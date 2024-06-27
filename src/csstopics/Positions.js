import React from 'react'
import "./../components/style.css";
import "./../components/Html.css";
export const Positions = () => {
  return (
   <div className="css-main-section bg-clr">
      <h2 className="clr">Positions:</h2>
      <br></br>
      <li className='h-6'>Using position css property, we can specify type of position to the element.</li>
      <li className='h-6'>We have 5 positions in CSS.</li>
      <ol className='list'>
        <li>static</li>
        <li>relative</li>
        <li>absolute</li>
        <li>sticky</li>
        <li>fixed</li>
      </ol>
      <h5 className="h-6 pclr">static:</h5>
      <br></br>
      <li className='h-6'>The default position for all HTML elements are static.</li>
      <li className='h-6'>If the element has static position, that time we are not able to apply 4 css properties &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top,right,left,bottom.</li>
      <br></br>
      <h5 className="h-6 pclr">relative:</h5>
      <br></br>
      <li className='h-6'>If the element position is relative, then we can apply top,right, left, bottom CSS properties.</li>
      <li className='h-6'>Relative position element always take its current position as reference. From there it move &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top,right,left,bottom.</li>
      <li className='h-6'>Relative position,doesn't removes element space from DOM.</li>
      <li className='h-6'>Relative position, doesn't changes the behavior of element, like if the elemet is block level element, <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it doesn't convert into inline element.</li>
      
<br></br>
<h5 className="h-6 pclr">absolute:</h5>
<br></br>
<li className='h-6'>If the element position is absolute, then we can apply top,right, left, bottom CSS properties.
</li>
<li className='h-6'>Absolute position element always take its parent element as reference(The parent element should &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have one of this position(absolute,relative,fixed,sticky)), then only it takes parent as reference.</li>
<li className='h-6'>If no parent element has any one of this position(absolute,relative,fixed,sticket), at last it take html &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;element as a reference.</li>
<li className='h-6'>Absolute position, removes element space from DOM.</li>
<li className='h-6'>Absolute position, changes the behavior of element, like if the elemet is block level element, then it &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;converts into inline.</li>
<br></br>
<h5 className="h-6 pclr">Fixed:</h5>
<br></br>
<li className='h-6'>If the element position is fixed, then we can apply top,right, left, bottom CSS properties.</li>
<li className='h-6'>Fixed position element take viewport as reference, from there it moves top,right,left,bottom.</li>
<li className='h-6'>Fixed position element, always fixed to that position, irrespective of page scroll.</li>
<li className='h-6'>Fixed position, removes element space from DOM.</li>
<li className='h-6'>Fixed position, changes the behavior of element, like if the element is block level element, then it &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;converts into inline.</li>
<br></br>
<h5 className="h-6 pclr">Sticky:</h5>
<br></br>
<li className='h-6'>If the element position is sticky, then we can apply top,right, left, bottom CSS properties.</li>
<li className='h-6'>Sticky position is used to stick the element dynamically to that particular position.</li>
<li className='h-6'>Sticky position, doesn't removes element space from DOM.</li>
<li className='h-6'>Sticky position, doesn't changes the behavior of element, like if the elemet is block level element, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;then it doesn't converts into inline.</li>
<br></br>
    </div>
  )
}
