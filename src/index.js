import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ImagesShow from './showImages.js'
import doFetch from './fetch.js';
import {Form, Button, Col} from 'react-bootstrap'; 

//  creating context for all data received
export const dataReceived = React.createContext();

class MyForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = { result: '',
                     value: '',
                     data: '',
                     imagesHaveBeenDisplayed: 0,
                     imagesAreDisplayedPerBlock: 12,
                     inputError: false
                   };
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleScroll = this.handleScroll.bind(this)
  }
// getting data from https://api.giphy.com/ 
  async handleSubmit(e) {
      e.preventDefault();
      
      let correctInput=[...this.state.value].filter(item =>
          !item.match(/^[0-9a-zA-Z]+$/)
      )
      if(correctInput.length===0){
        this.setState({inputError : false});
        let data=await doFetch(this.state.value)
        this.setState({imagesHaveBeenDisplayed: 0})
        this.setState({
          result: data.data.slice(0,this.state.imagesAreDisplayedPerBlock),
          data: data.data,
          imagesHaveBeenDisplayed: (this.state.imagesHaveBeenDisplayed+this.state.imagesAreDisplayedPerBlock),
        });
      }
  }
  // O input change
  handleChange(e) {
    let letter_or_number=/^[0-9a-zA-Z]+$/
    if(!e.target.value.match(letter_or_number))
    {
      this.setState({inputError : true});
      console.log(this.state.inputError)
    }
    this.setState({ value: e.target.value });
    // console.log("input: "+e.target.value);
  }

  handleScroll(){
      if(this.state.imagesHaveBeenDisplayed<this.state.data.length){
        this.setState({imagesHaveBeenDisplayed: (this.state.imagesHaveBeenDisplayed+this.state.imagesAreDisplayedPerBlock)});
        this.setState({result: this.state.data.slice(0,this.state.imagesHaveBeenDisplayed)})
      }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll) 
  }
 
  render() {
  let error = this.state.inputError ? (
              <div className="d-flex justify-content-center m-3">Only latin letters and numbers are alowed. Please check the input field above!</div>
  ) :null;
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
             <Form.Row className="d-flex m-3">
                <Col>
                {error}
                </Col>
             </Form.Row>
        </Form>
        {this.state.result ? (
          <dataReceived.Provider value={this.state.result}>
            <ImagesShow/>
          </dataReceived.Provider>) :null}
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


