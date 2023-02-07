import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Get Started", path: "/" },
    { label: "Charts", path: "/charts" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        className="mb-3"
        to={link.path}
        key={link.label}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
