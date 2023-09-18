import React from 'react';
import './SectionContent.css';
import { Content } from 'src/services/content';

type ContentProps = Content;

export default function SectionContent({
  heading,
  imageUrl,
  date,
  title,
  description,
  link,
  buttonSpan1,
  buttonSpan2,
}: ContentProps) {
  return (
    <>
      <div className="heading-container">
        <h2 className="heading-text">{heading}</h2>
      </div>
      <div className="section-img-container">{imageUrl}</div>
      <div className="section-date-span">
        <span>{date}</span>
      </div>
      <div className="title-container">
        <span>{title}</span>
      </div>
      <div className="description-container">
        <p>{description}</p>
      </div>
      <div className="link-container">
        <a href="#">{link?.text}</a>
      </div>
      <div className="section-button-container">
        <button className="section__button-filled">
          <span>{buttonSpan1}</span>
        </button>
        <button className="section__button-outline">
          <span>{buttonSpan2}</span>
        </button>
      </div>
    </>
  );
}
