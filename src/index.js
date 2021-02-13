import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ImagesShow from './showImages.js'
import reportWebVitals from './reportWebVitals';
import doFetch from './fetch.js';
import {Form, Button, Col} from 'react-bootstrap'; 
// import App from './App.js';


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
      // console.log("rezultatas: ",this.state.result);
  }
  // funkcija nebutina
  handleChange(e) {
    this.setState({ value: e.target.value });
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
        {this.state.result ? <ImagesShow result={this.state.result} value={this.state.value} state={this.state} /> :null}
      </div>
      );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MyForm  />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
