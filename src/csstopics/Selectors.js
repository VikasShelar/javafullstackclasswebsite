import React from 'react'
import HtmlContent from './Image'
import "./../components/style.css";
import "./../components/Html.css";
export const Selectors = () => {
  return (
    <div className="css-main-section bg-clr">
    <h2 className="clr">Selectors:</h2>
    <br></br>
    <li className='h-6'>Using selectors we can get the reference of element, and then we can apply styles.</li>
    <br></br>
    <h5 className="h-6 pclr">Star(*):</h5>
    <br></br>
    <li className='h-6'>It selects all the elements in body.</li>
    <br></br>
    <h5 className="h-6 pclr">Ex:</h5>
    <br></br>
    <div className="margin">
        <HtmlContent src="../CSS/star.png" alt="star selector" />
      </div>
      <br></br>
      <div className='result'><span>Result:</span> both span and div into red color.</div>
      <br></br>
      <h5 className="h-6 pclr">TagName:</h5>
      <br></br>
      <li className='h-6'>It selects all the elements which is having the same tag name.</li>
      <br></br>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent src="../CSS/tagname.png" alt="tagname selector" />
      </div>
      <br></br>
      <div className='result'><span>Result:</span> span into red color.</div>
      <br></br>
      <h5 className="h-6 pclr">ID(#):</h5>
      <br></br>
      <li className='h-6'>It selects all the elements, which is having same id.</li>
      <br></br>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent src="../CSS/id.png" alt="Id selector" />
      </div>
      <br></br>
      <div className='result'><span>Result:</span> span into red color.</div>
      <br></br>
      <h5 className="h-6 pclr">Class(.):</h5>
      <br></br>
      <li className='h-6'>It selects all the elements,which are having same class.</li>
      <br></br>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent src="../CSS/class.png" alt="class selector" />
      </div>
      <br></br>
      <div className='result'><span>Result:</span> div into red color.</div>
      <br></br>
      <h5 className="h-6 pclr">:first-child</h5>
      <br></br>
      <li className='h-6'>It selects all the first childrens of all parents.</li>
      <br></br>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent src="../CSS/first-child.png" alt="first-child selector" />
      </div>
      <br></br>
      <div className='result'><span>Result:</span>  Sachin and Kohli span elements into red color.</div>
      <br></br>

      <h5 className="h-6 pclr">:last-child</h5>
      <br></br>
      <li className='h-6'>It selects all the last childrens of all parents.</li>
      <br></br>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent src="../CSS/last-child.png" alt="last-child selector" />
      </div>
      <br></br>
      <div className='result'><span>Result:</span> Laxman span element into red color.</div>
      <br></br>
      <h5 className="h-6 pclr">:first-of-type </h5>
      <br></br>
      <li className='h-6'>It selects the elements, of first occurance from top to bottom. </li>
      <br></br>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent src="../CSS/first-of-type.png" alt="first-of-type selector" />
      </div>
      <br></br>
      <div className='result'><span>Result:</span> Dhoni p element into red color.</div>
      <br></br>

      <h5 className="h-6 pclr">::last-of-type </h5>
      <br></br>
      <li className='h-6'>It selects the elements, of first occurance from bottom to top. </li>
      <br></br>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent src="../CSS/last-of-type.png" alt="last-of-type selector" />
      </div>
      <br></br>
      <div className='result'><span>Result:</span> Ganguly p element into red color.</div>
      <br></br>
    </div>
  )
}
