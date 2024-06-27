import React from "react";
import "./../components/Html.css";
import { NextLink } from "../components/NextLink";
// import { NextLink } from "../components/NextLink";



export const Introduction = () => {
 

  // const renderComponent = () => {
  //   switch (pageURLs) {
  //     case "/html/intro":
  //       return <Introduction />;
  //     case "/html/block-inline":
  //       return <BlockInline />;
  //     case "/html/attributes":
  //       return <Attributes />;
  //     case "/html/input-controls":
  //       return <InputControls />;
  //     case "/html/html-tags":
  //       return <HtmlTags />;
  //     case "/html/html5-tags":
  //       return <Html5Features />;
  //     // Add more cases for additional options
  //     default:
  //       return <Introduction />;
  //   }
  // };

  
  
  return (
      <div className="main-section bg-clr">
       {/* <NextLink/> */}
        <h2 className="clr">Introduction : </h2>
        <br></br>
        <li className="h-6">HTML stands for Hyper Text Markup Language.</li>
        <li className="h-6">
          HTML is used to create webpages by using tags/elements which is given
          by w3(world wide web).
        </li>
        <li className="h-6">
          To create HTML page, just save that file with .html extention
        </li>
        <li className="h-6">
          All .html files can run only in web browsers like IE, Chrome,
          Firefox,Opara,Safari etc.
        </li>
        <li className="h-6">
          The !DOCTYPE html declaration defines that this document is an HTML5
          document
        </li>
       
       
        <h2 className="clr">Syntax:</h2>
        <br></br>
        <li className="h-6">
          Tag: &lt;div&gt;&lt;/div&gt; :
          <span className="eg">&lt;script&gt;&lt;/script&gt;</span>
        </li>
        <li className="h-6">
          Element: &lt;tagname&gt;Content &lt;/tagname&gt; :
          <span className="eg">&lt;span&gt;Sachin &gt;/span&gt;</span>
        </li>
        <li className="h-6">
          Self closing Element :<span className="eg">&lt;input/&gt;</span>
        </li>
        <br></br>
        <h2 className="clr">Markup Language vs Programming Language</h2>
        <br></br>
        <li className="h-6">
          <br></br>
          No tags are mandatory, empty .html files also run in browser.
        </li>
        <br></br>
        <h5 className="h-6 pclr">Markup Language(HTML) :</h5>
        <br></br>
        <li className="h-6">No compilation is required to run.</li>
        <li className="h-6">
          If no tags in .html file, then browser placed by default three tags,
          html,head,body
        </li>
        <br></br>
        <h5 className="h-6 pclr">Programming Language(C) :</h5>
        <br></br>
        <li className="h-6">First have to compile, after that only can run.</li>
        <li className="h-6">
          Minimum lines of code is required, at least main() method.
        </li>
       <br></br>
        {/* <NextLink/> */}
          {/* <NextLink className="b-next-link"/> */}
      
      </div>
  );
};
