"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assets/svg/rmz-logo.svg";

import "./styles/header.scss";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="header-wrapper flex-align-center">
      <div className="nav flex-between w-100">
        <ul className="nav-list flex ">
          <li>
            <Link
              className={
                pathname === "/" ? "nav-link active-link" : "nav-link link"
              }
              href="/"
            >
              <Image src={logo} alt="rameez-iqbal-logo" />
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/work" ? "nav-link active-link" : "nav-link link"
              }
              href="/work"
            >
              WORK
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/me" ? " nav-link active-link" : "nav-link link"
              }
              href="/me"
            >
              ME
            </Link>
          </li>
        </ul>
        <p className="nav-title">
          RAMEEZ IQBAL <span>--</span> BOLEN
        </p>
      </div>
    </header>
  );
};

export default Header;
