import React from "react";
import "./../components/style.css";
import "./../components/Html.css";
export const CssProperties = () => {
  return (
    <div className="css-main-section bg-clr">
      <h2 className="clr">Css properties:</h2>
      <br></br>
      <h5 className="h-6 pclr">Box sizing:</h5>
      <br></br>
      <div className="bg-clr h-6 c-blue">
        box-sizing:border-box (width + padding + border = width of element,
        height + padding + border = normal height of an element)
      </div>
      <br></br>
      <h5 className="h-6 pclr">Text Align:</h5>
      <br></br>
      <div className="bg-clr h-6 c-blue">
        text-align:left;<br></br>
        text-align:right;<br></br>
        text-align:center<br></br>
      </div>
      <br></br>
      <h5 className="h-6 pclr">Fonts:</h5>
      <br></br>
      <div className="bg-clr h-6 c-blue">
        font-weight:bold;<br></br>
        font-size:30px;<br></br>
        font-family:arial<br></br>
      </div>
      <br></br>
      <h5 className="h-6 pclr">Padding:</h5>
      <br></br>
      <div className="bg-clr h-6 c-blue">
        padding:20px;<br></br>
        padding:20px 30px;<br></br>
        padding:20px 30px 15px 18px;<br></br>
        padding-left:15px;<br></br>
        padding-right:10px;<br></br>
        padding-top:30px;<br></br>
        padding-bottom:20px;<br></br>
      </div>
      <br></br>
      <h5 className="h-6 pclr">Display:</h5>
      <br></br>
      <div className="bg-clr h-6 c-blue">
        display:inline;<br></br>
        display:block;<br></br>
        display:inline-block<br></br>
      </div>
      <br></br>
      <h5 className="h-6 pclr">Overflow:</h5>
      <br></br>
      <div className="bg-clr h-6 c-blue">
        overflow:hidden;<br></br>
        overflow:scroll;<br></br>
        display:inline-block<br></br>
      </div>
      <br></br>
      <h5 className="h-6 pclr">Float:</h5>
      <br></br>
      <div className="bg-clr h-6 c-blue">
      float:left;<br></br>
      float:right;<br></br>
      float:clear;<br></br>
      </div>
      <br></br>
      <h5 className="h-6 pclr">Opacity:</h5>
      <br></br>
      <div className="bg-clr h-6 c-blue">
      opacity:o.5(value always in between 0 to 1)
      </div>
      <br></br>
      <h5 className="h-6 pclr">z-index:</h5>
      <br></br>
      <div className="bg-clr h-6 c-blue">
      z-index:999999(value always number positive or negative)
      </div>
      <br></br>
    </div>
  );
};
