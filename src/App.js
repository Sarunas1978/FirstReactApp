import React from 'react'
import './App.css'
class Popup extends React.Component {
  constructor (props){
    super(props);
    this.state={
      isPopupDone:false
    };
  }
  render() {
    console.log("propsai: ", this.props)
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <button onClick={this.props.closePopup}>x</button>
        </div>
      </div>
    );
  }
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: this.props.showPopup
    };
  }
  togglePopup() {
  this.setState({
      showPopup: !this.state.showPopup
    });   
  }

  render() {
  
console.log("renderyje: ",this.state.showPopup)
      return (
      <div className='app'>
      
       {this.state.showPopup ? 
          <Popup
            closePopup={this.togglePopup.bind(this)}
            showpop={this.state.showPopup}
          />
          : null
        }
      </div>
    );
  }
};

        // console.log(e)
        // let div=document.createElement("div");
        // let button=document.createElement("button")
        // div.classList.add("app")
        // button.classList.add("button")
        // div.appendChild(button)
        // document.body.appendChild(div)
        // e.target.classList.add("popup")
        // let popup=React.createElement("App", {class: "popup"})

