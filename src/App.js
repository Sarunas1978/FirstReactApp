// import logo from './logo.svg';
// import './App.css';

// function App() {


//   return (

//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload. May be
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from 'react';   
import ReactDOM from 'react-dom';   
  
function ListItem(props) {  
  const item = props.item;  
  return (  
    // No need to specify the key here.  
    <li> {item} </li>  
  );  
}  
function NameList(props) {  
  const myLists = props.myLists;  
  let a=0;
  const listItems = myLists.map((strLists) =>  
    // The key should have been specified here.  
    <ListItem key={a++} item={strLists} />  
  );  
  return (  
    <div>  
        <h2>Correct Key Usage Example</h2>  
            <ol>{listItems}</ol>  
    </div>  
  );  
}  
const myLists = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];  
ReactDOM.render(  
  <NameList myLists={myLists}/>,  
  document.getElementById('meet')  
);  
export default NameList;  


