/* eslint-disable */
import { useState } from "react";

export function HeroSpotifyPlaylist() {
  const [loading, setLoading] = useState(true);
  const handleOnload = () => {
    setLoading(false);
  };
  return (
    <iframe
      // src="https://open.spotify.com/embed/track/4SUwJA3eUVNHExxMPEUhQe?utm_source=generator&theme=0"
      src="https://open.spotify.com/embed/playlist/1MBSU3qv3VMsWAhT1Z8Ej3?utm_source=generator&theme=0"
      width="100%"
      className={`rounded bg-none transition ease-in-out ${
        loading ? "opacity-0" : "opacity-100"
      }`}
      height="100%"
      allowFullScreen=""
      allow="autoplay"
      allowtransparency="true"
      onLoad={handleOnload}
    ></iframe>
  );
}
