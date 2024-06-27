import React from 'react'
import "./../components/style.css";
import "./../components/Html.css";
import HtmlContent from "./Image";
export const ApplyStyles = () => {
  return (
    <div className="css-main-section bg-clr">
      <h2 className="clr">Inline styling</h2>
      <br></br>

      <li className="h-6">
        Inline CSS is used to style a specific HTML element. For this CSS style,
        you’ll only need to add the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style
        attribute to each HTML tag, without using selectors.
      </li>
      <li className="h-6">
        This CSS type is not really recommended, as each HTML tag needs to be
        styled individually. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Managing your website
        may become too hard if you only use inline CSS.
      </li>
      <li className="h-6">
        However, inline CSS in HTML can be useful in some situations. For
        example, in cases where you &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;don’t have
        access to CSS files or need to apply styles for a single element only.
      </li>
      <br></br>
      <div className="div-margin pclr">Ex. </div>
      <div className="margin">
        &lt;!DOCTYPE html&gt; <br></br>
        &lt;html&gt; <br></br>
        &lt;body style="background-color:black;"&gt; <br></br>
        &lt;h1 style="color:white;padding:30px;"&gt;Hostinger
        Tutorials&lt;/h1&gt;<br></br>
        &lt;p style="color:white;"&gt;Something usefull here.&lt;/p&gt;<br></br>
        &lt;/body&gt; <br></br>
        &lt;/html&gt;
        <br></br>
      </div>
      <br></br>
      <h2 className="clr">Internal CSS</h2>
      <br></br>
      <li className="h-6">
        Internal or embedded CSS requires you to add a &lt;style&gt; tag in the
        &lt;head&gt; section of your HTML
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.
      </li>
      <li className="h-6">
        This CSS style is an effective method of styling a single page. However,
        using this style for multiple &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pages
        is time-consuming as you need to put CSS rules on every page of your
        website.
      </li>

      <div className="div-margin pclr">Ex.</div>
      <div className="margin">Here’s how you can use internal CSS:</div>
      <ol>
        <li>Open your HTML page and locate &lt;head&gt; opening tag.</li>
        <li>Put the following code right after the &lt;head&lt; tag</li>
      </ol>
      <div className="margin">&lt;style type="text/css"&gt;</div>
      <br></br>
      <div className="div-margin pclr">
        Add CSS rules on a new line. Here’s an example:
      </div>
      <br></br>
      <div className="div-margin pclr">
        <HtmlContent src="../CSS/content.png" alt="inline-style"/>
      </div>
      <br></br>
      <h2 className="clr">External styling </h2>
      <br></br>
      <li className="h-6">
        In CSS, an external style is a way to separate the styles from the HTML
        document and store them in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a separate CSS file. </li>
        <li className="h-6">This helps in maintaining a clean and organized structure for your code.</li>
        <br></br>
        <div className="div-margin pclr">Ex. </div>
        <div className="margin">Here's an example of how you can create an external CSS file and link it to an
        HTML document:</div>
      <ol>
        <li>Create an External CSS File</li>
        <li>Link the External CSS File to HTML:</li>
      </ol>
    
      <div className="div-margin pclr">
      <HtmlContent src="../CSS/external.png" alt="external styling"/>
      <br></br>
      <HtmlContent src="../CSS/htmlfile.png" alt="html file"/>
      </div>
      <br></br>
    </div>
  )
}
