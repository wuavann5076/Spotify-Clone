import React, { useEffect } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
export default function Body() {
  const playlistId = "0AsfnoRvxDXLg3XlNdzxIX";
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
      };
      console.log(response);
    };
    getInitialPlaylist();
  }, [token, dispatch]);
  return (
    <div>
      <iframe
        title="Spotify Embed: Recommendation Playlist "
        src={`https://open.spotify.com/playlist/0AsfnoRvxDXLg3XlNdzxIX?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        style={{ minHeight: "360px" }}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
