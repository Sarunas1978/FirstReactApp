import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import doFetch from './fetch.js';
import { Form, Button, Col } from 'react-bootstrap'; 


class MyForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = { result: '',
                     value: ''};
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }

  async handleSubmit(e) {
      e.preventDefault();
      let data=await doFetch(this.state.value)
      this.setState({result: data.data});

      console.log(this.state.result);
      console.log(this.state.value+ " nieko")
      // this.props.onInputChange(e.target.value);

  }
  // funncija nebutina
  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log(e.target.value)
    
}
  
  render() {
      return (
      <div id="search-bar">
          <Form onSubmit={this.handleSubmit}>
               <Form.Row className="d-flex justify-content-center m-3">
                  <Col sm={10}>
                    <Form.Group controlId="formBasicSearch">
                      {/* onchange nereikia */}
                      <Form.Control onChange={this.handleChange} type="text" placeholder="Enter your search" />
                    </Form.Group>
                  </Col>
                  <Button variant="primary" type="submit">Search</Button>
              </Form.Row>
          </Form>
          
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
