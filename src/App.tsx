import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './App.css';
import Header from './components/common/Header';
import OuterLayout from './components/layout/OuterLayout';
import fetchMockNavData, { NavItem } from './services/navitems';

export interface NavItemProps {
  navItems: NavItem[];
  setNavItems: Dispatch<SetStateAction<NavItem[]>>;
}

function App() {
  // fetching data out here to pass to Header search filter as well if choose to
  const [navItems, setNavItems] = useState<NavItem[]>([]);

  useEffect(() => {
    const fetchMockDataAsync = async () => {
      const response = await fetchMockNavData();
      setNavItems(response);
    };
    fetchMockDataAsync();
  }, []);

  return (
    <div className="App">
      <Header />
      <OuterLayout navItems={navItems} setNavItems={setNavItems} />
    </div>
  );
}

export default App;
