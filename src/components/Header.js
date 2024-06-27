import React from "react";
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Html } from "./Html";
import { Css } from "./Css";
import { Javascript } from "./Javascript";
import { B } from "./B";
import { Introduction } from "../Topics/Introduction";
import { BlockInline } from "../Topics/BlockInline";
import { Attributes } from "../Topics/Attributes";
import { InputControls } from "../Topics/InputControls";
import { HtmlTags } from "../Topics/HtmlTags";
import { Html5Features } from "../Topics/Html5Features";
import { CssIntroduction } from "../csstopics/CssIntroduction";
import { ApplyStyles } from "../csstopics/ApplyStyles";
import { BoxModel } from "../csstopics/BoxModel";
import { Positions } from "../csstopics/Positions";
import { Selectors } from "../csstopics/Selectors";
import { MediaQueries } from "../csstopics/MediaQueries";
import { CssProperties } from "../csstopics/CssProperties";
import { Css3 } from "../csstopics/Css3";

export const Header = () => {
  return (
    <div className="header">
      <header>
        <h4 className="logo">JavaFullstackClass</h4>
        <ul>
        
          <li>
            <Link  to="html">HTML</Link>
          </li>
          <li>
            <Link to="css">CSS</Link>
          </li>
          <li>
            <Link to="/js">JAVASCRIPT</Link>
          </li>
          <li>
            <Link to="/react">REACT</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Html/>}></Route>
          <Route path="/html" element={<Html />}>
            <Route path="intro" element={<Introduction/>}/>
            <Route path="block-inline" element={<BlockInline/>}/> 
            <Route path="attributes" element={<Attributes/>}/>
            <Route path="input-controls" element={<InputControls/>}/>
            <Route path="html-tags" element={<HtmlTags/>}/>
            <Route path="html5-tags" element={<Html5Features/>}/>
            {/* <Dynamic */}
            <Route />
          </Route>
          <Route path="/" element={<Css/>}></Route>
          <Route path="/css" element={<Css />} >
            <Route path="css-intro" element={<CssIntroduction/>}/>
            <Route path="apply-css-style" element={<ApplyStyles/>}/>
            <Route path="box-model" element={<BoxModel/>}/>
            <Route path="positions" element={<Positions/>}/>
            <Route path="selectors" element={<Selectors/>}/>
            <Route path="media-queries" element={<MediaQueries/>}/>
            <Route path="css-properties" element={<CssProperties/>}/>
            <Route path="css3" element={<Css3/>}/>
          </Route>
          <Route path="/js" element={<Javascript />} />
          <Route path="/react" element={<B />} />
        </Routes>
        {/* <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="courses">Courses</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />}>
                        <Route path="search" element={<Search />} />
                        <Route path="list" element={<List />} />
                    </Route>
                </Routes>
            </Router> */}
      </header>
    </div>
  );
};
