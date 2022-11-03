import React, { Fragment } from "react";

const SideNav = () => {
  return (
    <Fragment>
      <div className="col-4">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              href="/user/profile"
              className="nav-link active"
              aria-current="page"
            >
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/works">
              Works
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/acheivements">
              Achievements
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/statement">
              Statement
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/shows">
              Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/camps">
              Camps
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default SideNav;
