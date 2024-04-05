import React from "react";
import "./Sidebar.css";
import {
  CustomerServiceOutlined,
  HomeFilled,
  SearchOutlined,
} from "@ant-design/icons";
import Playlists from "../Playlists/Playlists";
// import logo from "../../assets/image/";
export default function Sidebar() {
  return (
    <div className="sidebar_container">
      <div className="top_links">
        {/* <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </div> */}
        <ul>
          <li>
            <HomeFilled />
            <span>Home</span>
          </li>
          <li>
            <SearchOutlined />
            <span>Search</span>
          </li>
        </ul>
      </div>
      <div className="bottom_links">
        <ul>
          <li>
            <CustomerServiceOutlined />
            <span>Your Library</span>
          </li>
        </ul>
        <Playlists />
      </div>
    </div>
  );
}
