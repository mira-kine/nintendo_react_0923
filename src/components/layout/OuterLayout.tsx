import React from 'react';
import SectionNavBar from '../SectionNavBar';
import './OuterLayout.css';
import InnerLayout from './InnerLayout';
import { NavItemProps } from 'src/App';

export default function OuterLayout({ navItems, setNavItems }: NavItemProps) {
  return (
    <div className="outer-layout-container">
      <SectionNavBar navItems={navItems} setNavItems={setNavItems} />
      <InnerLayout />
    </div>
  );
}
