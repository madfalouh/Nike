import React from "react";
import "./navBar.css";
import nikeBlack from "../../assets/img/nikeLogoBack.png";
import { Text } from "@chakra-ui/react";
function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-wrapper">
        <img src={nikeBlack}></img>
        <div className="nav-bar-list">
          <ul>
            <li className="nav-sections">
              <a>
                <Text fontWeight="600">New&Features</Text>
              </a>
            </li>
            <li className="nav-sections">
              <a>
                <Text fontWeight="600">Men</Text>
              </a>
            </li>
            <li className="nav-sections">
              <a>
                <Text fontWeight="600">Women</Text>
              </a>
            </li>
            <li className="nav-sections">
              <a>
                <Text fontWeight="600">Kids</Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="tools-bar-list">
          <div className="search-bar">
            <div className="search-bar-wrapper">
              <input className="animated" placeholder="Search"></input>
            </div>
            <div className="tools-bar-buttons">
              <button
                className="pre-search-btn ripple"
                data-var="vsButton"
                aria-label="Open Search Modal"
                data-search-closed-label="Search"
                data-search-open-label="Open Search Modal"
              >
                <svg
                  aria-hidden="true"
                  className="pre-nav-design-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                  ></path>
                </svg>
              </button>
              <button
                className="pre-search-btn "
                data-var="vsButton"
                aria-label="Open Search Modal"
                data-search-closed-label="Search"
                data-search-open-label="Open Search Modal"
              >
                <svg
                  aria-hidden="true"
                  className="pre-nav-design-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                  ></path>
                </svg>
              </button>
              <button
                className="pre-search-btn "
                data-var="vsButton"
                aria-label="Open Search Modal"
                data-search-closed-label="Search"
                data-search-open-label="Open Search Modal"
              >
                <svg
                  aria-hidden="true"
                  className="pre-nav-design-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                  ></path>
                </svg>
              </button>
              <button
                className="pre-search-btn "
                data-var="vsButton"
                aria-label="Open Search Modal"
                data-search-closed-label="Search"
                data-search-open-label="Open Search Modal"
              >
                <svg
                  aria-hidden="true"
                  className="pre-nav-design-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                  data-var="glyph"
                  style={{ display: "inline-block" }}
                >
                  <path
                    fill="currentColor"
                    d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
