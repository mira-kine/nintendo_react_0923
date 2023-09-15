import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="searchbar-container">
      <form className="searchbar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15px"
          height="15px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input type="search" placeholder="Search" />
        <select>
          <option>All</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35px"
          height="30px"
          viewBox="4 -1 20 15"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" />
          </g>
        </svg>
      </form>
    </div>
  );
}
