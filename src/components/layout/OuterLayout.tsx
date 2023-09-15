import React from 'react';
import SectionNavBar from '../SectionNavBar';
import './OuterLayout.css';
import InnerLayout from './InnerLayout';

export default function OuterLayout() {
  return (
    <div className="outer-layout-container">
      <SectionNavBar />
      <InnerLayout />
    </div>
  );
}
