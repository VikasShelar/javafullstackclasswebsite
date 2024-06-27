import React from "react";
import "./../components/style.css";
import "./../components/Html.css";
import HtmlContent from "./Image";
export const MediaQueries = () => {
  return (
    <div className="css-main-section bg-clr">
      <h2 className="clr">Media Queries:</h2>
      <br></br>
      <li className="h-6">
        Media Queries are used to design responsive web pages.
      </li>
      <li className="h-6">
        Using @media we can apply CSS properties for particular resolution to
        elements.
      </li>
      <li className="h-6">
        We have multiple media types like screen, print etc.
      </li>
      <li className="h-6">
        It uses the @media rule to include a block of CSS properties only if a
        certain condition is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;true.
      </li>
      <li className="h-6">
        The @media rule in CSS is used to apply different styles to a document
        based on the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;characteristics of the
        device or media the document is being displayed on. It allows you
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to create responsive designs that
        adapt to various screen sizes, devices, and other media
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;features.{" "}
      </li>
      <li className="h-6">
        The @media rule is a key component of responsive web design, enabling
        developers to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;create layouts and
        styles that work well on a wide range of devices, from desktop
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;monitors to mobile phones.
      </li>
      <li className="h-6">
        The syntax of the @media rule typically includes a media type and one or
        more media &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;features. Here's a
        breakdown of its purpose:
      </li>
      <br></br>
      <ol className="pl">
        <li className="pclr">Media Type:</li>
      </ol>
      <li className="h-6">
        The media type specifies the category of the device or medium, such as
        screen, print, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;speech, etc. It helps
        determine when the styles within the @media block should be
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;applied.
      </li>
      <br></br>
      <ol type="decimal" start="2" className="pl">
        <li className=" pclr">Media Features:</li>
      </ol>
      <li className="h-6">
        Media features are conditions or criteria based on specific
        characteristics of the output
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;device, such as width, height,
        orientation, resolution, etc. These features are used to
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;apply styles selectively.
      </li>
      <h5 className="h-6 pclr">Syntax:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent
          src="../CSS/mediaquerysyntax.png"
          alt="MediaQuery Syntax"
          height="80px"
          width="700px"
        />
      </div>
      <br></br>
      <h5 className="h-6 pclr">Ex:</h5>
      <br></br>
      <div className="margin">
        <HtmlContent
          src="../CSS/mediaQuery.png"
          alt="MediaQuery Syntax"
          height="400px"
          width="300px"
        />
      </div>
      <br></br>
      <div className="result">
        <span>Result:</span>Red color applied for Sachin and Rayudu span
        elements at the time of the screen
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width
        is less than 700px.
      </div>
      <br></br>
      <div className="margin">
        <HtmlContent
          src="../CSS/print.png"
          alt="MediaQuery print example"
          height="400px"
          width="300px"
        />
      </div>
      <br></br>
      <div className="result">
        <span>Result:</span>The style declaration in the example above tells the
        browser to display body content in 14
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pixels
        Arial font on the screen, but in case of printing it will be in a 12
        points Times font.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;However
        the value of line-height property is set to 1.2 for both of them:
      </div>
      <br></br>
    </div>
  );
};
