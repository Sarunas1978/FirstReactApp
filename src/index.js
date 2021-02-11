import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class MyForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = { result: '',
                     value: ''};
      this.handleBlur = this.handleBlur.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }

  handleBlur(e) {
      e.preventDefault();
      
      console.log(this.state.value+ " nieko")
      // this.props.onInputChange(e.target.value);
      fetch("https://api.giphy.com/v1/gifs/search?api_key=nkV4IRRGJr4mFTMqnn49dtP0Tjg6ffaX&q=funny dogs&limit=12&offset=0&rating=g&lang=en")
      .then(result => result.json())
      .then(data => console.log(data.data))
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log(e.target.value)
    
}
  
  render() {
      return (
      <div id="search-bar">
          <form  onSubmit={this.handleBlur}>
          <div>
              <input
              type="text"
              // value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter search"
              /> 
                       
          </div>
          </form>
      </div>
      );
  }
}

// function UserLogin(props) {  
//   return <h1>Welcome back!</h1>;  
// }  
// function GuestLogin(props) {  
//   return <h1>Please sign up.</h1>;  
// }  
// function SignUp(props) {  
//   const isLoggedIn = props.isLoggedIn; 
//   console.log(props); 
//   if (isLoggedIn) {  
//     return <UserLogin />;  
//   }  
//   return <GuestLogin />;  
// }  
  
// ReactDOM.render(  
//   <SignUp isLoggedIn="true" good={56} />,  
//   document.getElementById('meet')  
// );  


ReactDOM.render(
  <React.StrictMode>
    <MyForm  brand="masina"/>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
  




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
