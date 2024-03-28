import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // trailer.key if we use in src of iframe `src={"https://www.youtube.com/embed/" + trailer.key}`, itsrc={"https://www.youtube.com/embed/" + trailer.key} it says trailer is not defined. There are two ways to handle this.
  // 1. By creating a state variable - check notes in Desktop-My Projects - netflix-gpt-notes-netflix-gpt-note-2
  // 2. Use redux store to avoid creating state variable

  //fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
