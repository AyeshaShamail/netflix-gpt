# Netflix-GPT

-- Create React App using npx-create-react-app netflix-gpt
-- Configure Tailwind css
-- Header
-- Routing of App
-- Login form
-- Sign up form
-- Form validation
-- useRef hook
-- Firebase Setup
-- Deploying our app to production
-- Create Sign up user account
-- Implement Sign in user API
-- Created Redux store with userSlice
-- Implemented Sign out user API
-- Updated Profile API call
-- Redirected our app
-- BugFix: Sign up user display name and profile pic update
-- BugFix: if user is not logged in,Redirect /browse to login page and vice versa
-- Unsubscribe to the onAuthStateChanged callback once header unloads
-- Add hardcoded values to constants file
-- Register for TMDB APi and create a new App and get access token.
-- go to docs > go to API reference > Movie Lists > Now playing > get data from options and fetch and paste in constant.js and browse page respectively.
-- To make browse page look clean, creating a custom hook useNowPlayingMovies to `Fetch data from TMDB API and update the store`
-- Create movie slice
-- Update the store with Moviesdata
-- Plan for main and secondary container
-- Fetch data for trailer video
-- Update the store with Trailer Video with Video Data
-- Embedded the youtube video
-- Making it autoplay nad mute
-- Added tailwind classes to make it look better
-- Build secondary component i.e., Create movie suggestion component
-- Build Movie List and Card
-- Added TMDB Image_CDN_URL
-- Made browse page looks good using Tailwing css
-- Show popular movies list on browse page using custom hook
--Show Top rated movies list on browse page using custom hook
--Show Upcoming movies list on browse page using custom hook
-- Build GPT search
-- create GptSearch component
-- Create new slice for GPT search
-- `Multilingual feature is added in GPTSearch page`

# Features when signed-in

- Browse page(with authentication)
  - Header
  - Main Movie
    -Trailer in bg
    -Movie title and description and play button
  - Movie suggestion rows
    -MovieList xN
- Netflix-GPT
  -Search bar
  -Movie suggestions

# Features when !signed-in

    -Login/Sign up form
    -redirect to Browse page once logged in
