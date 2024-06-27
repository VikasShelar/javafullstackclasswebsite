import React from "react";
import "./../components/Html.css";
export const HtmlTags = () => {
  return (
    <div className="main-section bg-clr">
      <h2 className="clr">Html Tags :</h2>
      <br></br>
      <div className="div-margin pclr">Title:</div>
      <br></br>
      <li className="h-6">
        which is used to give title to your html page, which is visible in
        browser tab.
      </li>
      <br></br>
      <div className="div-margin pclr">Script:</div>
      <br></br>
      <li className="h-6">
        which is used to load your .js file into html. By using 'src' attribute
        , we can give .js file path.
      </li>
      <br></br>
      <div className="div-margin pclr">Link:</div>
      <br></br>
      <div className="div-margin">We are using link tag in two ways:</div>
      <div className="div-margin">1.</div>
      <li className="h-6">to load your .css file into html.</li>
      <li className="h-6">
        By using 'href' attribute , we can give .css file path.
      </li>
      <li className="h-6">
        By using 'rel' attribute, we can tell like this is used for stylesheet.
      </li>
      <div className="div-margin">2.</div>
      <li className="h-6">
        to add favicon to your html file,which is visible in browser tab.
      </li>
      <li className="h-6">
        By using 'href' attribute , we can give icon file path.
      </li>
      <li className="h-6">
        By using 'rel' attribute, we can tell like this is used for favicon.
      </li>
      <br></br>
      <div className="div-margin pclr">Ex:</div>
      <br></br>
      <div className="margin">
        &lt;!DOCTYPE html&gt;<br></br>
        &lt;html&gt;<br></br>
        &lt;head&gt;<br></br>
        &lt;meta charset="utf-8" /&gt;<br></br>
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<br></br>
        &lt;title&gt;Page Title&lt;/title&gt;<br></br>
        &lt;meta name="viewport" content="width=device-width,
        initial-scale=1"&gt;<br></br>
        &lt;link rel="stylesheet" type="text/css" media="screen" href="
        href="your css file path"" /&gt;<br></br>
        &lt;script src=" href="your js file path""&gt;&lt;/script&gt;<br></br>
        &lt;/head&gt;<br></br>
        &lt;body&gt;<br></br>
        content to show in browser
        <br></br>
        &lt;/body&gt;<br></br>
        &lt;/html&gt;
      </div>
      <br></br>
      <div className="div-margin pclr">Iframe:</div>
      <br></br>
      <li className="h-6">
        which is used to load external urls into your html.
      </li>
      <li className="h-6">
        If you want's to load any you tube video or any other website in your
        html
      </li>
      <br></br>
      <div className="div-margin pclr">Ex:</div>
      <br></br>
      <div className="margin">
        &lt;iframe src="http://www.uijavakit.com"&gt;&lt;/iframe&gt; <br></br>
        &lt;iframe
        width="420" height="345"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"&gt;
        &lt;/iframe&gt;
      </div>
      <br></br>
      <div className="div-margin pclr">Image:</div>
      <br></br>
      <li className="h-6">which is used to load image into your html.</li>
      <li className="h-6">
        If you want's to load any image, first take that image path, and give 
        that path to src <br></br> attribute of image tag
      </li>
      <br></br>
      <div className="div-margin pclr">Ex:</div>
      <br></br>
      <div className="margin">
        &lt;img src="your image path"&gt;&lt;/img&gt;
      </div>
      <br></br>
      <div className="div-margin pclr">Table:</div>
      <br></br>
      <li className="h-6">
        If you want to display the data in the form of rows and columns, then go
        with table tag.
      </li>
      <li className="h-6">The table contains rows.</li>
      <li className="h-6">The rows contains heading or data..</li>
      <li className="h-6">
        table is representing by 'table' tag, row is representing by 'tr' tag,
        heading is representing by 'th' and data is representing by 'td' tag..
      </li>
      <br></br>
      <div className="div-margin pclr">Ex:</div>
      <br></br>
      <div className="margin">
        &lt;table border='1px'&gt;<br></br>
        &lt;tr&gt;<br></br>
        &lt;th&gt;Name&lt;/th&gt;<br></br>
        &lt;th&gt;Runs&lt;/th&gt;<br></br>
        &lt;/tr&gt;<br></br>
        &lt;tr&gt;<br></br>
        &lt;td&gt;Sachin&lt;/td&gt;<br></br>
        &lt;td&gt;20000&lt;/td&gt;<br></br>
        &lt;/tr&gt;<br></br>
        &lt;tr&gt;<br></br>
        &lt;td&gt;Dhoni&lt;/td&gt;<br></br>
        &lt;td&gt;18000&lt;/td&gt;<br></br>
        &lt;/tr&gt;<br></br>
        &lt;/table&gt;
      </div>
        <br></br>
      <div className="div-margin pclr">Ul:</div>
      <br></br>
      <li className="h-6">which is used to create unordered list.</li>
      <li className="h-6">
        we can represent unordered list by using 'ul' tag and the items in the
        list can represent 'li' tag.
      </li>
      <li className="h-6">
        By default unordered list items are displayed with dot(.)
      </li>
      <br></br>
      <div className="div-margin pclr">Ex:</div>
      <br></br>
      <div className="margin">
        &lt;ul&gt;<br></br>
        &lt;li&gt;Sachin&lt;/li&gt;<br></br>
        &lt;li&gt;Dhoni&lt;/li&gt;<br></br>
        &lt;li&gt;Kohli&lt;/li&gt; <br></br>
        &lt;li&gt;UV&lt;/li&gt; <br></br>
        &lt;/ul&gt;
      </div>
      <br></br>
      <div className="div-margin pclr">Ol:</div>
      <br></br>
      <li className="h-6">which is used to create ordered list.</li>
      <li className="h-6">
        we can represent ordered list by using 'ol' tag and the items in the
        list can represent 'li' tag.
      </li>
      <li className="h-6">
        By default ordered list items are displayed with numbers(1,2,3...)
      </li>
      <br></br>
      <div className="div-margin pclr">Ex:</div>
      <br></br>
      <div className="margin">
        &lt;ol&gt;<br></br>
        &lt;li&gt;Sachin&lt;/li&gt;<br></br>
        &lt;li&gt;Dhoni&lt;/li&gt;<br></br>
        &lt;li&gt;Kohli&lt;/li&gt; <br></br>
        &lt;li&gt;UV&lt;/li&gt; <br></br>
        &lt;/ol&gt;
      </div>
      <br></br>
      <div className="div-margin pclr">a(anchor):</div>
      <br></br>
      <li className="h-6">
        which is used to navigate from one page to another page.
      </li>
      <li className="h-6">
        First take the path,where you want to navigate, and then give that path
        to 'href' attribute of 'a' tag.
      </li>
      <br></br>
      <div className="div-margin pclr">Ex:</div>
      <br></br>
      <div className="margin">
        &lt;a href="http://www.google.com"  &gt;Click Here &lt;/a&gt;
      </div>
      <br></br>
      <li>With external CSS, you’ll link your web pages to an external .css file, which can be created by any text editor in your device </li>
      <li>This CSS type is a more efficient method, especially for styling a large website. By editing one .css file, you can change your entire site at once.</li>
      <div>Follow these steps to use external CSS:</div>
      <ol>
        <li>Create a new .css file with the text editor, and add the style rules. For example:</li>
      </ol>
      <br></br>
      
      <br></br>
      

    </div>
  );
};
