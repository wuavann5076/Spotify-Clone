import React, { useEffect } from "react";
import axios from "axios";
import "./Spotify.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { useStateProvider } from "../../utils/StateProvider";
import { type } from "@testing-library/user-event/dist/type";
import { reducerCases } from "../../utils/Constrants";
export default function Spotify() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      console.log([{ data }]);
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
        image: data.images[1],
      };

      console.log(userInfo);

      dispatch({ type: reducerCases.SET_USER, userInfo });
    };

    getUserInfo();
  }, [dispatch, token]);
  return (
    <div className="spotify_container">
      <div className="spotify_body">
        <Sidebar />
        <div className="body">
          <Navbar />
          <div className="body_contents">
            <Body />
          </div>
        </div>
      </div>
      <div className="spotify_footer">
        <Footer />
      </div>
    </div>
  );
}
