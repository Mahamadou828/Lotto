import React from "react";
import Link from "next/link";
import { Route } from "../typescript/routes";

export const Fotter = () => {
  return (
    <footer className="fotter ">
      <div className="fotter__item">
        <div className="logo">
          <Link href={Route.AppPath.home}>
            Lotto
            {/* <img src={IconName.borlette} /> */}
          </Link>
        </div>

        <nav className="navbar">
          <ul className="nav-items d-flex">
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

            <li className="nav-item">
              <Link href={Route.AuthPath.login}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="copyWrite">
        <p>copywrite Lotto Company</p>
        <p>Desing in collaboration with somme dev</p>
      </div>
    </footer>
  );
};
