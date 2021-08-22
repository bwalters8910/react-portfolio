function Header() {
  return (
    <div>
      <nav className="nav-border p-1em">
        <ul className="d-f fxd-r jc-sa list-n m-t-1em nav">
          <li>
            <a className="td-n" href="#Bio">
              Bio
            </a>
          </li>
          <li>
            <a className="td-n" href="#Projects-Apps">
              Projects/Apps
            </a>
          </li>
          <li>
            <a
              className="td-n"
              href="#Contact">
              Contact
            </a>
          </li>
          <li>
            <a
              className="td-n"
              href="https://docs.google.com/document/d/1vTswEbFfWeHIOnUFabfVsX41GRtWvoxvpRRh-9GbGKM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;