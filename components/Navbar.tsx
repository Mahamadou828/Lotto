import Link from "next/link";
import React from "react";
import { Route } from "../typescript/routes";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href={Route.AppPath.home}>
          Lotto
          {/* <img src={IconName.borlette} /> */}
        </Link>
      </div>

      <nav className="navbar">
        <ul className="nav-items d-flex d-alignCenter">
          <li className="nav-item">
            <Link href={Route.AppPath.home}>Home</Link>
          </li>
          <li className="nav-item">
            <Link href={Route.AppPath.about}>About us</Link>
          </li>
          <li className="nav-item">
            <Link href={Route.AppPath.contact}>Contact</Link>
          </li>

          <li className="nav-item">
            <Link href={Route.AuthPath.signup}>Signup</Link>
          </li>

          <li className="nav-item btn-primary btn-nav_item btn-medium">
            <Link href={Route.AuthPath.login}>Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
