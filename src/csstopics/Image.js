import React from 'react';
import "./../components/style.css";
function HtmlContent({src,alt,height,width}) {
  return (
    <div>
      <img src={src} alt={alt} height={height} width={width}/>
    </div>
  );
}

export default HtmlContent;
