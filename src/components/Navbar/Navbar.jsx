import React from "react";
import "./Navbar.css";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { useStateProvider } from "../../utils/StateProvider";

export default function Navbar({ navBackground }) {
  const [{ userInfo }] = useStateProvider();
  return (
    <div className={`navbar_container ${navBackground ? "navBackground" : ""}`}>
      <div className="search_bar">
        <SearchOutlined />
        <input type="text" placeholder="What do you want to play?" />
      </div>
      <div className="avatar">
        <a href="#">
          <span>{userInfo?.userName}</span>
        </a>
        <img src={userInfo?.image.url} alt="" />
      </div>
    </div>
  );
}
