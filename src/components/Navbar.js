const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            Me
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">WHO</a>
            </li>
            <li>
              <a href="#">WHAT</a>
            </li>
            <li>
              <a href="#">WHERE</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
