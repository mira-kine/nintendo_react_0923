import React, { useEffect, useState } from 'react';
import './InnerLayout.css';
import SectionContent from '../SectionContent';
import fetchMockContentData from 'src/services/content';
import type { Content } from 'src/services/content';

export default function InnerLayout() {
  // receive any data to show content of according to params
  // assuming receiving data information from exterior database
  // depends on what content is named in database, however will go with these defaults. Can change as necessary
  const [content, setContent] = useState<Content | undefined>({
    heading: '',
    imageUrl: '',
    date: '',
    title: '',
    description: '.',
    link: { text: '', url: '' },
    buttonSpan1: '',
    buttonSpan2: '',
  });

  useEffect(() => {
    const fetchMockDataAsync = async () => {
      const response = await fetchMockContentData();
      setContent(response);
    };
    fetchMockDataAsync();
  }, []);

  return (
    <div className="inner-layout-container">
      <div className="inner-layout-content">
        {content ? <SectionContent {...content} /> : <h2> Loading...</h2>}
      </div>
    </div>
  );
}
