import React from "react";
import "./Html.css";
import { NavLink } from "react-router-dom";
import { Introduction } from "../Topics/Introduction";
import { useState } from "react";
import { BlockInline } from "../Topics/BlockInline";
import { Attributes } from "../Topics/Attributes";
import { InputControls } from "../Topics/InputControls";
import { HtmlTags } from "../Topics/HtmlTags";
import { Html5Features } from "../Topics/Html5Features";
export const Html = () => {
  const [selectedOption, setSelectedOption] = useState(<Introduction />);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    
  };
  const renderComponent = () => {
    switch (selectedOption) {
      case "introduction":
        return <Introduction />;
      case "inline-block":
        return <BlockInline />;
      case "attributes":
        return <Attributes />;
      case "input-controls":
        return <InputControls />;
      case "html-tags":
        return <HtmlTags />;
      case "html5-tags":
        return <Html5Features />;
      // Add more cases for additional options
      default:
        return <Introduction />;
    }
  };
  return (
    <div className="container-fluid ">    
      <aside className="html-topic">
        <div
          style={{
            border: "1px solid rgb(224,224,224)",
            marginRight: "1000px",
            borderRadius: "9px",
          }}
          className="bg-clr"
        >
          <h2 style={{ color: "#4e524f", fontWeight: "bold" }}>Topics : </h2>
          <p onClick={() => handleOptionClick("introduction")} className="html-content " >
            <NavLink to="/html/intro" className={({ isActive }) => (isActive ? "link-active" : "link")} >
              Introduction
            </NavLink>
          </p>
          <p onClick={() => handleOptionClick("inline-block")} className="html-content " >
            <NavLink to="/html/block-inline"  className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Block Inline Level
            </NavLink>
          </p>
          <p onClick={() => handleOptionClick("attributes")} className="html-content " >
            <NavLink to="/html/attributes"  className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Attributes
            </NavLink>
          </p>
          <p onClick={() => handleOptionClick("input-controls")} className="html-content " >
            <NavLink to="/html/input-controls"  className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Input Controls
            </NavLink>{" "}
          </p>
          <p onClick={() => handleOptionClick("html-tags")} className="html-content " >
            <NavLink to="/html/html-tags"className={({ isActive }) => (isActive ? "link-active" : "link")}>
              HTML Tags
            </NavLink>{" "}
          </p>

          <p onClick={() => handleOptionClick("html5-tags")}  className="html-content " >
            <NavLink to="/html/html5-tags"  className={({ isActive }) => (isActive ? "link-active" : "link")}>
              HTML5
            </NavLink>
          </p>
        </div>
        {renderComponent()}

        {/* <Route path="/js" element={<Javascript/>}/>
          <Route path="/react" element={<B/>}/> */}
      </aside>
    </div>
  );
};
