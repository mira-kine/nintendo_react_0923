import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar';
// add common Header component here

export default function Header() {
  return (
    <div className="header_container">
      <SearchBar />
    </div>
  );
}
