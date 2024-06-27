import React, { useState } from "react";
import { CssIntroduction } from "../csstopics/CssIntroduction";
import "./Html.css";
import { NavLink } from "react-router-dom";

import { BoxModel } from "../csstopics/BoxModel";
import {Positions} from '../csstopics/Positions'
import {Selectors} from '../csstopics/Selectors'
import {MediaQueries} from '../csstopics/MediaQueries'
import { CssProperties } from "../csstopics/CssProperties";
import { ApplyStyles } from "../csstopics/ApplyStyles";
import {Css3} from '../csstopics/Css3';
export const Css = () => {
  const [selectedOption, setSelectedOption] = useState(<CssIntroduction />);

  const handleOptionClick = (option) => {
   
    setSelectedOption(option);
  };
  const renderComponent = () => {
    switch (selectedOption) {
      case "css-intro":
        return <CssIntroduction />;
      case "apply-css-style":
        return <ApplyStyles/>;
      case "box-model":
        return <BoxModel />;
      case "positions":
        return <Positions />;
      case "selectors":
        return <Selectors />;
      case "media-queries":
        return <MediaQueries />;
      case "css-properties":
        return <CssProperties />;
      case "css3":
        return <Css3 />;
      // Add more cases for additional options
      default:
        return <CssIntroduction />;
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
          <p onClick={() => handleOptionClick("css-intro")} className="html-content">
          <NavLink to="/css/css-intro" className={({ isActive }) => (isActive ? "link-active" : "link")} >
             Css Introduction
          </NavLink>
          </p>
          <p onClick={() => handleOptionClick("apply-css-style")} className="html-content">
            <NavLink to="/css/apply-css-style" className={({ isActive }) => (isActive ? "link-active" : "link")}>
             Apply Style
            </NavLink>
          </p>
           <p onClick={() => handleOptionClick("box-model")} className="html-content">
            <NavLink to="/css/box-model" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Box Model
            </NavLink>
          </p>
          <p onClick={() => handleOptionClick("positions")} className="html-content">
            <NavLink to="/css/positions" className={({ isActive }) => (isActive ? "link-active" : "link")} >
              Positions
            </NavLink>
          </p>
          <p onClick={() => handleOptionClick("selectors")} className="html-content">
            <NavLink to="/css/selectors" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Selectors
            </NavLink>
          </p>
          <p onClick={() => handleOptionClick("media-queries")} className="html-content">
            <NavLink to="/css/media-queries" className={({ isActive }) => (isActive ? "link-active" : "link")}>
             Media Queries
            </NavLink>
          </p>
          <p onClick={() => handleOptionClick("css-properties")} className="html-content">
            <NavLink to="/css/css-properties" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Css Properties
            </NavLink>
          </p>
          <p onClick={() => handleOptionClick("css3")} className="html-content">
            <NavLink to="/css/css3" className={({ isActive }) => (isActive ? "link-active" : "link")}>
              Css3
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
