import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [showMenu, setShowMenu] = useState(false);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // update my store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser()); //not passing anything here as in userSlice it doesn't take action.payload but returns null
        navigate("/");
      }
    });
    // when my header compoenent unloads or unmounts, it will unsubscribe this event listener - onAuthStateChanged
    return () => unsubscribe;
  }, []);

  const handleGptSearch = () => {
    //Toggle Gpt  search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target?.value));
  };

  return (
    <div className="absolute w-full px-4 py-2 bg-gradient-to-b from-transparent z-10 flex justify-between">
      <img className="w-44 cursor-pointer" src={LOGO} alt="logo" />
      {user && (
        <div className="relative flex p-1">
          {showGptSearch && (
            <select
              className="py-2 px-2 mx-2 my-4 bg-purple-500 text-white rounded-md text-sm h-18"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-1 px-2 mx-2 my-4 bg-purple-500 text-white rounded-md text-sm h-18"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Back to Home" : "GPT Search"}
          </button>
          <img
            className="w-10 h-10 m-4 cursor-pointer"
            alt="user-icon"
            src={user?.photoURL}
            onClick={() => setShowMenu(!showMenu)} // Toggling menu visibility on user icon click
          />
          {showMenu && (
            <div className="absolute top-12 right-0 bg-gray-800 text-white p-2 rounded shadow">
              <button
                onClick={handleSignOut}
                className="hover:underline py-1 px-1 rounded-md text-xs"
              >
                Sign Out of Netflix
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
