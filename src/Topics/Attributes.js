import React from 'react'
import "./../components/Html.css";

export const Attributes = () => {
  return (
    <div className="main-section bg-clr">
      
        <h2 className='clr'>Attribute : </h2>
        <br></br>
        <li className='h-6'>An attribute is a key value pair, it tells the behavior of an element.</li>
        <li className='h-6'>Attribute key is always unique.</li>
        <li className='h-6'>Then common attributes for all HTML elements are id,name,class,style etc..</li>
      <br></br>
      <div className='div-margin pclr'>Ex : </div>
      <br></br>
      <div className='margin'>&lt;div id="div1" &gt;Sachin &lt;/div&gt;</div>
      <br></br>
      <li className='h-6'>In this 'id' is an attribute.</li>
      <li className='h-6'>'Id' attribute value always unique(recomended).</li>
      <br></br>
      <div className='div-margin pclr'>Ex : </div>
      <br></br>
      <div className='margin'>
      &lt;div id="div1" id="id1" &gt;Sachin &lt;/div&gt;
      </div>
      <br></br>
      <li className='h-6'>In this id attribute key used multiple times</li>
      <li className='h-6'>In this case browser always render unique attribute keys only.</li>
      <li className='h-6'>So it looks like &lt;div id="div1" &gt;Sachin &lt;/div&gt;</li>
      <br></br>
      
    </div>
  )
}
