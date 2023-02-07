import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineApple,
} from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import Button from "../components/Button";

function ButtonPage() {
  const links = [
    {
      label: "Instagram",
      path: "https://www.instagram.com/",
      icon: <AiOutlineInstagram />,
    },
    {
      label: "YouTube",
      path: "https://www.youtube.com/",
      icon: <AiOutlineYoutube />,
    },
    {
      label: "Spotify",
      path: "https://open.spotify.com/",
      icon: <FaSpotify />,
    },
    {
      label: "Apple Music",
      path: "https://www.apple.com/apple-music/",
      icon: <AiOutlineApple />,
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Button
        secondary
        outline
        rounded
        className="mb-5 hover:bg-gray-100"
        onClick={() => {
          window.location.href = link.path;
        }}
      >
        {link.icon}
        {link.label}
      </Button>
    );
  });

  return <div>{renderedLinks}</div>;
}

export default ButtonPage;
