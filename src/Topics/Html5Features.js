import React from "react";
import { NextLink } from "../components/NextLink";

export const Html5Features = () => {
  return (
    <div className="main-section bg-clr">
      {/* <NextLink/> */}
      <h2 className="clr">Html5</h2>
      <br></br>
      <li className="h-6">
        It's a open source markup language used to building modern websites.
        It's a combination of HTML,CSS,JS.
      </li>
      <li className="h-6">New features introduced in HTML5 are</li>
      <br></br>
      <div className="div-margin pclr">Semantic Tags</div>
      <br></br>
      <li className="h-6">
        Semantic tags are using for better structure of your webpage. It's tells
        something about the content to the developer by seeing.
      </li>
      <li className="h-6">
        We are using Semantic tags to developing E-newspapers.
      </li>
      <li className="h-6">
        non-semantic elements: div,p - Tells nothing about its content.
      </li>
      <li className="h-6">
        semantic elements: header,footer,nav - Clearly tells about its content.
      </li>
      <br></br>
      <div className="div-margin pclr">Ex : </div>
      <br></br>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. section: This element tells a
        section in a document.A web page could normally be split into sections.
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. article: This element tells
        independent, self-contained content.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. header: this element tells about the
        header part of your webpage. It may contains h1-h6 tags, logos.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. footer: this element tells about the
        footer part of your webpage.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. hgroup<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. aside: This element defines some
        content aside from the web content.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. command<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. details: It provides additional
        details that the user can view or hide<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. summary: Defines a visible
        heading for a details element.
      </div>
      <br></br>
      <div className="margin">
        &lt;html&gt; <br></br>
        &lt;head&gt;&lt;/head&gt;<br></br>
        &lt;body&gt; &lt;detail&gt;<br></br>
        &lt;summary&gt;HTML5 features ?&lt;/summary&gt; <br></br>
        &lt;p&gt;Semantics Elements&lt;/p&gt; <br></br>
        &lt;p&gt;New Input controls &lt;/p&gt; <br></br>
        &lt;p&gt;New Attributes &lt;/p&gt; <br></br>
        &lt;p&gt;Web Storages&lt;/p&gt; <br></br>
        &lt;p&gt;Web workers &lt;/p&gt; <br></br>
        &lt;p&gt;Web Sockets&lt;/p&gt; <br></br>
        &lt;/details&gt;<br></br>
        &lt;/body&gt;<br></br>
        &lt;/html&gt;
      </div>
      <br></br>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10. figure: This tag specifies
        self-contained content, like diagrams, photos etc.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11. figurecaption: This element can
        be placed as child of a figure element, it's tells something about
        figure.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12. nav: In this element we can
        define navigation links.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13. mark: Defines marked/highlighted
        text.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14. time: Defines a date/time
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15. meter: If you want to specify
        the range.
      </div>
      <br></br>
      <div className="margin">
        &lt;html&gt;<br></br>
        &lt;head&gt;&lt;/head&gt;<br></br>
        &lt;body&gt;<br></br>
        &lt;h3&gt;50% compelted &lt;/h3&gt;<br></br>
        &lt;meter value="5" max="10" /&gt;<br></br>
        &lt;/body&gt;<br></br>
        &lt;/html&gt;
      </div>
      <br></br>
      <div className="div-margin pclr">Input Controls</div>
      <br></br>
      <div className="div-margin">
        In HTML5 introduced below new input controls(type attribute values)
        <ol>
          <li> color</li>
          <li> email</li>
          <li> number</li>
          <li> range</li>
          <li> search</li>
          <li> tel</li>
          <li> url</li>
          <li> date</li>
          <li> datetime</li>
        </ol>
      </div>
        <li className="h-6">You can use above list items to the input tag with type attribute.
        &lt;input type="color" /&gt;
        </li>
      <br></br>
      <div className="div-margin pclr">Attributes</div>
      <br></br>
      <li className="h-6">
        attribute is a key value pair, which tells something about an
        element/tag.
      </li>
    <br></br>
      <ol >
        <li>
          autofocus: If we add this attribute to input field, then that input
          field automatically focused when the page is rendered.
        </li>
        <li>
          autocomplete: This attribute helps users complete form data based on
          earlier input data from browser cache.
        </li>
        <li>
          required : Which is used to handle validations, we can add this
          attribute to input field to specify that field data is required or not
          for form submission.
        </li>
        <li>
          pattern: Using this attribute, we can mention the input field data
          format using regular expressions.
          <br></br> &lt;input pattern="[0-9][A-Z]{3}" type="text"
          placeholder="Single digit followed by three uppercase letters."/&gt;
        </li>
        <li>
          multiple: This attribute is used to select multiple elements (file
          input control/list)
        </li>
        <li>
          novalidate: This attribute is used to avoid validation check(form
          level) at the time of submitting the form.
        </li>
        <li>
          list: The list attribute enables the user to associate a list of
          options with a particular field.
        </li>
      </ol>
      <br></br>
      <div className="margin">
        &lt;label&gt;Players:&lt;/label&gt;<br></br>
        &lt;datalist id="players"&gt;<br></br>
        &lt;select name="players"&gt;<br></br>
        &lt;option value="Sachin"&gt;Sachin&lt;/option&gt;<br></br>
        &lt;option value="Dhoni"&gt;Dhoni&lt;/option&gt;<br></br>
        &lt;option value="Kohli"&gt;Kohli&lt;/option&gt;<br></br>
        &lt;/select&gt;<br></br>
        &lt;/datalist&gt;<br></br>
        &lt;input type="text" name="players" list="players" /&gt;
      </div>
      <br></br>
      <ol>
        <li>formaction/formmethod/formtarget/formenctyp: These attribute are used, while submitting the form</li>
      </ol>
      <div className="div-margin pclr">Media Tags </div>
      <br></br>
      <li className="h-6">HTML5 audio and video tags make it simple to add media to a webpage. We have to add src attribute to identify the media file.</li>
      <ol>
        <li>audio</li>
        <div>
        &lt;audio src = "media file path"  width = "300" height = "200" &gt;;
               
        &lt;audio&gt;
        </div>
      </ol>
      {/* <NextLink/> */}
      <br></br>
    </div>
  );
};
