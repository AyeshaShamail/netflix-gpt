export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isFullNameValid = /^([a-zA-z]+)\s([a-zA-z]+)$/.test(name);

  if (!isEmailValid) return "Invalid Email address";
  if (!isPasswordValid) return "Invalid Password";
  if (!isFullNameValid) return "Invalid Name";

  return null;
};
