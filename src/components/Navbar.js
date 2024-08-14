import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container-fluid d-flex  align-items-center justify-content-between">
          <img
            src="/logo.png"
            className="img-fluid col-0"
            alt="Logo"
            style={{ maxHeight: "50px", width: "auto" }}
          />
          <a
            className="text-success navbar-brand fw-bold d-flex align-items-center col-12"
            href="#"
          >
            The Phone Store
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
