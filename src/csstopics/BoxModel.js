import React from "react";
import "./../components/style.css";
import "./../components/Html.css";
import HtmlContent from "./Image";
export const BoxModel = () => {
  return (
    <div className="css-main-section bg-clr">
      <h2 className="clr">Box Model:</h2>
      <li className="h-6">Box model tells about, the element structure.</li>
      <li className="h-6">
        Each element having 4 parts, content, padding, border, margin.
      </li>
      <br></br>
      <h5 className="h-6 pclr">Content:</h5>
      <li className="h-6">
        This is the actual content of the box, such as text, images, or other
        media.
      </li>
      <li className="h-6">Text, which is visible in the browser.</li>
      <li className="h-6">Text between open and closing element.</li>
      <br></br>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">&lt;div&gt;Sachin&lt;/div&gt;</div>
      <br></br>
      <h5 className="h-6 pclr">Border:</h5>
      <li className="h-6">
        The border surrounds the padding, and it is the boundary between the
        padding and the margin. <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It
        can have a specified width, style, and color.
      </li>
      <li className="h-6">To represent the bounds of your element.</li>
      <br></br>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent src="../CSS/border.png" alt="border image" />
      </div>
      <br></br>
      <h5 className="h-6 pclr">Padding:</h5>
      <li className="h-6">
        Padding is the space between the content and the border. It provides
        internal spacing within the box.
      </li>
      <li className="h-6">
        Padding is transparent, and the background of the element extends into
        the padding area.
      </li>
      <li className="h-6">The gap between content to border.</li>
      <li className="h-6">
        We can give padding to element in four directions(left,right,top,bottom)
      </li>
      <li className="h-6">
        By using padding-left, padding-right,padding-top, padding-bottom css
        properties, we can apply &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding to
        element.
      </li>
      <li className="h-6">
        By using padding css property , we can apply padding left,right,top,
        bottom.
      </li>
      <li className="h-6">
        Padding property values always take in clock wise direction.
      </li>
      <li className="h-6">
        Ex:<span className="padding_left">padding:30px;</span> means padding
        top, right, bottom, left values are 30px;
      </li>
      <li className="h-6">
        Ex:<span className="padding_left">padding:30px 20px</span> means padding
        top is 30px,rigth is 20px, bottom is 30px and left is 20px.
      </li>
      <li className="h-6">
        Ex:<span className="padding_left">padding:30px 20px 40px</span> means
        padding top is 30px,rigth is 20px, bottom is 40px and left is
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20px.
      </li>
      <li className="h-6">
        Ex:<span className="padding_left">padding:30px 20px 40px 50px</span>{" "}
        means padding top is 30px,rigth is 20px, bottom is 40px and left
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is 50px.
      </li>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent src="../CSS/padding.png" alt="padding image" />
      </div>
      <br></br>
      <h5 className="h-6 pclr">Margin:</h5>
      <li className="h-6">
        The margin is the space outside the border. It provides spacing between
        the border of one element &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and the
        adjacent elements. Like padding, the margin is transparent.
      </li>
      <li className="h-6">The gap between one element border to another element border.</li>
      <li className="h-6">We can give margin to element in four directions(left,right,top,bottom)</li>
      <li className="h-6">By using margin-left, margin-right,margin-top, margin-bottom css propertes, we can apply margin to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;element.</li>
      <li className="h-6">By using margin css property also , we can apply margin left,right,top, bottom.</li>
      <li className="h-6">margin property values always take in clock wise direction.</li>
      <li className="h-6">Ex:<span className="padding_left">margin:30px</span> means margin top, right, bottom, left values are 30px;</li>
      <li className="h-6">Ex:<span className="padding_left">margin:30px 20px</span> means margin top is 30px,rigth is 20px, bottom is 30px and left is 20px.</li>
      <li className="h-6">Ex:<span className="padding_left">margin:30px 20px 40px</span> means margin top is 30px,rigth is 20px, bottom is 40px and left is 20px.</li>
      <li className="h-6">Ex:<span className="padding_left">margin:30px 20px 40px 50px</span> means margin top is 30px,rigth is 20px, bottom is 40px and left is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50px.</li>
      <br></br>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent src="../CSS/margin.png" alt="margin image" />
      </div>
      <br></br>
    </div>
  );
};
