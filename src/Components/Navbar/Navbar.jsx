import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="rounded-md rounded-lg text-white border border-white lg:max-w-4xl lg:w-full lg:mx-auto">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>Resource</li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">adTask.aiv</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex flex-col lg:flex-row gap-4 px-1">
            <li>Resource</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="navbar-end mr-2">
          <Button 
            text={'Try now for free'}

          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
