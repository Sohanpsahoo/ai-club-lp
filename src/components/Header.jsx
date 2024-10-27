import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const navigation = [
    { id: 1, title: "Home", url: "#home" },
    { id: 2, title: "Blogs", url: "#blogs" },
    { id: 3, title: "People", url: "#people" },
    { id: 4, title: "About", url: "#about" },
    { id: 5, title: "Projects", url: "#projects" },
  ];

  const dropdownItems = [
    { id: 6, title: "Achievements", url: "#achievements" },
    { id: 7, title: "Events", url: "#events" },
    { id: 8, title: "Core Team", url: "#core-team" },
    { id: 9, title: "Testimonials", url: "#testimonials" },
    { id: 10, title: "Magazine", url: "#magazine" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-4">
        <a className="block w-[10rem] xl:mr-8" href="#hero">
          {/* <img src={brainwave} width={160} height={32} alt="ai-club-logo" /> */}
        </a>

        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block font-code text-lg uppercase text-n-1 transition-colors hover:text-color-1 ${item.url === pathname.hash
                    ? " text-color-1 font-bold"
                    : "text-n-1/50"
                  } px-4 py-2 lg:px-2`}
              >
                {item.title}
              </a>
            ))}
            
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="block font-code text-lg uppercase text-n-1 transition-colors hover:text-color-1 px-4 py-2 lg:px-2"
              >
                More
              </button>
              {showDropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-n-8 shadow-lg rounded-lg">
                  {dropdownItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      onClick={() => {
                        handleClick();
                        setShowDropdown(false);
                      }}
                      className="block px-4 py-2 text-n-1/50 hover:text-color-1 hover:bg-n-6"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <HamburgerMenu />
        </nav>

        <button
          className="ml-auto lg:hidden"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
