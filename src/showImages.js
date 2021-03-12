import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './App.css';
import {dataReceived} from "./index.js";
import PropTypes from 'prop-types';
 

class ImagesShow extends React.Component{
    render(){
        return(
         <Container>
            <RowOfImages/>
        </Container>
        )
    }
}

function RowOfImages (){
    let number=0, id=0;
    return(
       <Row>
           <dataReceived.Consumer>
            {value => value.map(image =>
              <SingleImage 
                key={number++}
                id={id++}
                item={image.images.fixed_width_still.url}
              />
            )}
           </dataReceived.Consumer>
       </Row>
    )
}

function SingleImage (props){
    const result=props.item;
    const id=props.id;
  
    const [idSet, setId] = useState(-1);
    const [showPop, setShowPop] = useState(false);

    useEffect(() =>{
        function handlePopupOff(){
            setId(-1);
        }
        let div;
        if (idSet!==-1){ 
           setShowPop(true)
           div=document.createElement('div');
           div.setAttribute('id', 'enlarge')
           document.body.appendChild(div);

           ReactDOM.render(<Popup 
                closePopup={handlePopupOff}
                result={result}
                />,document.getElementById("enlarge"));
        }
         return( ()=> {
             if(idSet!==-1 && showPop){ 
                 document.getElementById("enlarge").remove();
                }
         })
    },[idSet, showPop, result])

    return(
        <Col xs={6} md={4} lg={3}>
            <Image 
                onClick={(e)=> setId(e.target.id)} 
                src={result} 
                id={id}
                thumbnail
            />
        </Col>
    );
}

class Popup extends React.Component {
    constructor(props){
        super(props)
        console.log("")
    }
    render() {
      let buttonStyle = {
        color:"",
        textDecoration: "none",
        borderRadius: "0 0 0 4px",
        }
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <Button className="button" variant="outline-light" style={buttonStyle} onClick={this.props.closePopup}>x</Button>
            <Image className='popup_image' src={this.props.result}  alt="something"/>
          </div>
        </div>
      );
    }
  }

  Popup.propTypes = {
    closePopup : function(props,propName, componentName){
         if(!/Off/.test(props[propName])) { 
             return new Error( 'Invalid prop `' + propName + '` supplied to' +
             ' `' + componentName + '`. Validation failed.'
           );
         }
     } ,
    resul : PropTypes.string
  }

export default ImagesShow;
export {SingleImage};