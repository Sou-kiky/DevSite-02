import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <nav className="flex text-red-500 justify-between my-5">
        <div className="text-3xl">
          <Link to="/homepage">Nikki</Link>
        </div>
        <ul className="flex">
          <li className="mx-10">
            <Link to="/homepage">Home</Link>
          </li>
          <li className="mx-10">
            <Link to="/blog">Contents</Link>
          </li>
          <li className="ml-10">
            <a href="#">Sns</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
