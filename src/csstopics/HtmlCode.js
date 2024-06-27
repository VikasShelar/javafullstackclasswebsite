import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'html-react-parser';

const MyComponent = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch('flexbox.html');
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <div>{ReactHtmlParser(htmlContent)}</div>
  );
};

export default MyComponent;
