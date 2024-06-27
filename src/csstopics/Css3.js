import React from 'react'
import HtmlContent from './Image'
import "./../components/style.css";
import "./../components/Html.css";
import MyComponent from './HtmlCode';
export const Css3 = () => {
  return (
    <div className="css-main-section bg-clr">
      <h2 className="clr">Css3:</h2>
      <br></br>
      <li className='h-6'>Below are the features introduced in CSS3.</li>
      <br></br>
      <ol className="pl">
        <li className=" pclr">Rounded Corners:</li>
        <br></br>
        <div className="margin ">
        <HtmlContent
          src="../CSS/rounded_corner.png"
          alt="border-radius eg"

          // height="200px"
          // width="400px"
        />
      </div>
      <br></br>
        <li className="pclr">Border Images:</li>
        <br></br>
        <div className="margin">
        <HtmlContent
          src="../CSS/border_images.png"
          alt="border image property"
          // height="200px"
          // width="400px"
        />
      </div>
      <br></br>
        <li className="pclr">Multiple Backgrounds:</li>
        <br></br>
        <div className="margin scroll-container">
        <iframe 
          src="../CSS/multiple_property.png"
          title="shorthand property"
          height="250px"
          width="100%"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
        ></iframe>
      </div>
      <br></br>
      
      <li className="pclr">Gradients:</li>
        <br></br>
        <ol>
          <li>Linear Gradients</li>
          <br></br>
      <div className="margin">
        <HtmlContent
          src="../CSS/linear_gradient.png"
          alt="gradient"
          // height="200px"
          // width="400px"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
          />
      </div>
    <br></br>
    <li>Radial Gradients</li>
    <br></br>
    <div className="margin">
        <HtmlContent 
          src="../CSS/radial_gradient.png"
          alt="gradient-1"
          // height="200px"
          // width="480px"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
          />
          </div>
          <br></br>
      </ol>
      <br></br>
      <li className="pclr">Shadows:</li>
        <br></br>
        <ol>
          <li>Text Shadow</li>
          <br></br>
          <div className="margin">
        <HtmlContent 
          src="../CSS/text_shadow.png"
          alt="text_shadow"
          // height="200px"
          // width="400px"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
          />
          </div>
          <br></br>
          <li>Box Shadow</li>
          <br></br>
          <div className="margin">
        <HtmlContent 
          src="../CSS/box-shadow.png"
          alt="box-shadow"
          // height="200px"
          // width="400px"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
          />
          </div>
        </ol>
      <br></br>
      <li className="pclr">Transforms:</li>
     <br></br>
     <div className="margin">
        <HtmlContent 
          src="../CSS/transform.png"
          alt="transform"
          // height="200px"
          // width="400px"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
          />
          </div>
          <br></br>
          <div className="margin">
        <HtmlContent 
          src="../CSS/transform_1.png"
          alt="transform"
          // height="200px"
          // width="400px"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
          />
          </div>
          <br></br>
          <div className="margin">
        <HtmlContent 
          src="../CSS/transform_2.png"
          alt="transform"
          // height="200px"
          // width="400px"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
          />
          <br></br>
        <li className="pclr">Transitions:</li>
        <br></br>
        <div className="margin scroll-container2">
        <iframe 
          src="../CSS/transition.png"
          title="transition example"
          height="550px"
          width="100%"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
        ></iframe>
      </div>
      <br></br>
      <br></br>
          <li className='pclr'>Animation:</li>
          <br></br>
          <div className="margin">
        <HtmlContent 
          src="../CSS/animation.png"
          alt="Animation example"
          // height="200px"
          // width="400px"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
          />
          </div>
          <br></br>
          <li className='pclr'>Box Sizing:</li>
          <br></br>
          <div className="margin scroll-container2">
        <iframe 
          src="../CSS/box-sizing.png"
          title="Box-sizing example"
          height="550px"
          width="100%"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
          ></iframe>
          </div>
          <br></br>
          <li className='pclr'>Flexbox:</li>
          <br></br>
          <div className="margin scroll-container2">
        <iframe 
          src="<MyComponent/>"
          title="Flexbox example"
          height="550px"
          width="100%"
          // --->1) Set the scrolling attribute of the iframe to no (scrolling="no"). This will disable both horizontal and vertical scroll bars.
          ></iframe>
          </div>
          </div>
          <br></br>
          </ol>
      <br></br>
      
       
     
    </div>
  )
}
