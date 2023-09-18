import React, { useState } from 'react';
import './SectionNavBar.css';
import type { NavItem } from 'src/services/navitems';
import { NavItemProps } from 'src/App';

export default function NavBar({ navItems, setNavItems }: NavItemProps) {
  const [showNav, setShowNav] = useState(false);

  const handleNavItemClick = (selectedItem: NavItem) => {
    setNavItems((prevItems) =>
      prevItems.map((item) =>
        item.title === selectedItem.title
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  };

  return (
    <>
      <button
        tabIndex={0}
        className="hamburger-menu"
        onClick={() => setShowNav(!showNav)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div
        className={
          showNav ? 'section-navbar-container-show' : 'section-navbar-container'
        }
      >
        <div className="section-navbar__content">
          {/* mapping through navbar items and can display according to params */}
          {navItems.map(({ title, href, tabIndex, selected }) => (
            <ul key={title} className="section-navlist">
              <li
                className={
                  selected ? 'selected-nav-item' : 'section-navlist__item'
                }
              >
                <button
                  className="section-navlist__button"
                  tabIndex={tabIndex}
                  onClick={() =>
                    handleNavItemClick({ title, href, tabIndex, selected })
                  }
                >
                  {title}
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
