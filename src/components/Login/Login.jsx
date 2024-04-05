import React from "react";
import "./Login.css";
import logo from "../../assets/image/Spotify_Logo_RGB_Black-removebg-preview.png";

const Login = () => {
  const hanhdClick = () => {
    const clientId = "22f6c37f04ca40fca83a5bc42a7c8ad2";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="login-container">
      <img className="logo-spotify" src={logo} alt="" />
      <button className="connect-btn" onClick={hanhdClick}>
        Connect Spotify
      </button>
    </div>
  );
};
export default Login;
