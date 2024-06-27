import React, { useState, useEffect } from 'react';
import {Introduction} from '../Topics/Introduction';
import {BlockInline} from '../Topics/BlockInline';
import {Attributes} from '../Topics/Attributes';
import {InputControls} from '../Topics/InputControls';
import {HtmlTags} from '../Topics/HtmlTags';
import {Html5Features} from '../Topics/Html5Features';

const PageContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Define a map that associates page numbers with component functions
  const componentMap = {
    1: <Introduction/>,
    2: <BlockInline/>,
    3: <Attributes/>,
    4: <InputControls/>,
    5: <HtmlTags/>,
    6: <Html5Features/>
  };

  useEffect(() => {
    // Use selectedComponent to render the corresponding component when currentPage changes
    if (currentPage in componentMap) {
      setSelectedComponent(componentMap[currentPage]);
    }
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div>
        {selectedComponent && <selectedComponent />}
      </div>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={nextPage} disabled={currentPage === 3}>
        Next
      </button>
    </div>
  );
};

export default PageContainer;
