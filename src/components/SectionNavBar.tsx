import React, { useEffect, useState } from 'react';
import './SectionNavBar.css';
import type { NavItemListProps, NavItem } from 'src/services/navitems';
import fetchMockNavData from 'src/services/navitems';

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [navItems, setNavItems] = useState<NavItemListProps>([]);

  useEffect(() => {
    const fetchMockDataAsync = async () => {
      const response = await fetchMockNavData();
      setNavItems(response);
    };
    fetchMockDataAsync();
  }, []);

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
