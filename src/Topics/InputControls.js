import React from "react";
import "./../components/Html.css";

export const InputControls = () => {
  return (
    <div className="main-section bg-clr">
      <h2 className="clr">Input Controls :</h2>
      <br></br>
      <div className="div-margin pclr">Text Box:</div>
      <li className="h-6">Using input tag we can create text box.</li>
      <li className="h-6">The default attribute for input tag is type=text.</li>
      <br></br>
      <div className="div-margin pclr">Ex :</div>
      <br></br>
      <div className="margin">&lt;input/&gt;</div>
      <div className="margin">&lt;input type="text" /&gt;</div>
      <br></br>
      <div className="div-margin pclr">Password Box :</div>
      <br></br>
      <li className="h-6">
        Using input tag and type=password attribute we can create password
        field.
      </li>
      <br></br>
      <div className="div-margin pclr">Ex :</div>
      <br></br>
      <div className="margin">&lt;input type="password" /&gt;</div>
      <br></br>
      <div className="div-margin pclr">Radio button :</div>
      <br></br>
      <li className="h-6">
        If we select one option from multiple options, then go with radio
        button.
      </li>
      <li className="h-6">
        Using input tag and type=radio attribute we can create radio button.
      </li>
      <li className="h-6">
        To group radio buttons , we have to take same name attribute values.
      </li>
      <br></br>
      <div className="div-margin pclr">Ex :</div>
      <br></br>
      <div className="margin">&lt;input type="radio" name='gen'/&gt; Male</div>
      <div className="margin">
        &lt;input type="radio" name='gen'/&gt; FeMale
      </div>
      <br></br>
      <div className="div-margin pclr">checkbox :</div>
      <br></br>
      <li className="h-6">
        If we select multiple options from multiple options, then go with
        checkbox.
      </li>
      <li className="h-6">
        Using input tag and type=checkbox attribute we can create checkbox.
      </li>
      <br></br>
      <div className="div-margin pclr">Ex :</div>
      <br></br>
      <div className="margin">&lt;input type="checkbox" /&gt; Cricket</div>
      <div className="margin">&lt;input type="checkbox" /&gt; Hockey</div>
      <br></br>
      <div className="div-margin pclr">Dropdown :</div>
      <br></br>
      <li className="h-6">
        If we select single option from multiple options, then go with select
        box(dropdown).
      </li>
      <li className="h-6">
        Using select, option tags, we can create checkbox.
      </li>
      <br></br>
      <div className="div-margin pclr">Ex :</div>
      <br></br>
      <div className="margin">
        &lt;select&gt;<br></br>
        &lt;option&gt;India&lt;/option&gt;<br></br>
        &lt;option&gt;Pak&lt;/option&gt;<br></br>
        &lt;option&gt;China&lt;/option&gt;<br></br>
        &lt;/select&gt;
      </div>
      <br></br>
      <div className="div-margin pclr">textarea :</div>
      <br></br>
      <li className="h-6">
        If you want to write more content in multiple row, then go with textarea
      </li>
      <li className="h-6">Using textarea tag, we can create textarea.</li>
      <br></br>
      <div className="div-margin pclr">Ex :</div>
      <br></br>
      <div className="margin">
        &lt;textarea cols="30" rows="4"&gt; &lt;/textarea&gt;
      </div>
      <br></br>
      <div className="div-margin pclr">File Upload :</div>
      <br></br>
      <li className="h-6">
        Using input tag and type=file attribute we can create File Upload.
      </li>
      <br></br>
      <div className="div-margin pclr">Ex :</div>
      <br></br>
      <div className="margin">&lt;input type="file" /&gt;</div>
      <br></br>
    </div>
  );
};
