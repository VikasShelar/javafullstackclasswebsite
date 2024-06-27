import React from "react";
import "./../components/style.css";
import "./../components/Html.css";

export const CssIntroduction = () => {
  return (
    <div className="css-main-section bg-clr">
      <h2 className="clr">Introduction</h2>
      <br></br>
      <li className="h-6">CSS stands for Cascading Style Sheets.</li>
      <li className="h-6">
        Using CSS, we can control the way of display HTML elements in browser.
      </li>
      <li className="h-6">
        If you want to see the applied styles to the element, open developer
        window(by inspect or click on &nbsp;&nbsp;&nbsp;&nbsp;f12), click on
        elements tab, click one of element and see the styles in the right side
        to that element.
      </li>
      <li className="h-6">
        We can apply the styles to elements, in the form of properties, like key
        value pairs.
      </li>
      <li className="h-6">CSS always tells the behavior of elements.</li>
      <li className="h-6">
        Browser always reads your CSS and format your elements accordingly
      </li>
      <li className="h-6">We can apply styles in three ways.</li>
      <ol className="h-6 list">
        <li>Inline</li>
        <li>Internal</li>
        <li>External</li>
      </ol>
      <br></br>
    </div>
  );
};
