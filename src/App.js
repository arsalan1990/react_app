import React from 'react';
import logo from './logo.svg';
import './App.css';
import quote from './quote.jpg';
import './index.css'


function App(props) {
  return <div align="center"><h1 className="body" >Hello World</h1> 
   <strong><div>From {props.name} {props.age + 5}</div></strong>
   <p className=".text">I am new to the web development. Till now everything works fine. Thanks......</p> 
   <img src={quote} alt="quote" width="350px" height="250px"></img><br/><br/><br/>
   <div><b><h1>Ordered List</h1></b></div>
   <ol className="size">
   <li> Text header, denoted using the h1, h2, h3, h4, h5, h6 tags.</li>
   <li>A paragraph, denoted using the p tag.</li>
   <li>A horizontal ruler, denoted using the hr tag.</li>
   <li>A link, denoted using the a (anchor) tag.</li>
   </ol>
   <div><b><h1>Unordered List</h1></b></div>
   <ul className="size">
     <li>A list, denoted using the ul (unordered list), ol (ordered list) and li (list element) tags.</li>
     <li>An image, denoted using the img tag</li>
     <li>A divider, denoted using the div tag</li>
     <li>A text span, denoted using the span tag</li>
   </ul>
  </div>
}

export default App;
