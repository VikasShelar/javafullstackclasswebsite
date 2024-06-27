import React from 'react'
import "./../components/Html.css";

import { HtmlSpanStructure } from './HtmlSpanStructure';
import { HtmlStructure } from './HtmlStructure';

// import { Content } from '../components/Content.js';
export const BlockInline = () => {
  return (
    <div className="main-section bg-clr">
       <h2 className="clr">Inline Elements:</h2> 
       <br></br>
       <li className="h-6">Inline elements takes content width as its own width.</li>
       <li className="h-6">Inline elements are not starts in new line</li>
       <li className="h-6">span,i,b,img,input,select etc.. are Inline elements</li>
       <li className='h-6'>By using display:block CSS property ,we can convert Inline element into block level element.</li>
<br></br>
      <div className='div-margin'>Ex: Can you display three players names in the same line?</div>
      <br></br>
      <HtmlSpanStructure/>
<br></br>
       <h2 className="clr">Block Level Elements: </h2>
       <br></br>
       <li className='h-6'>Block level elements takes parent width as its own width.</li>
       <li className='h-6'>Block level elements always starts in new line</li>
       <li className='h-6'>p,div,h1..h6,ul,li etc.. are Block level elements</li>
       <li className='h-6'>By using display:inline CSS property ,we can convert Block level element into inline element.</li>
       <br></br>
       <div className='div-margin'>Ex: Can you display three players names in the same line?</div>
<br></br>
     <HtmlStructure/>
      <br></br>
    
    </div>
        
  )
}
