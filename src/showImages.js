import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import App from './App.js';
import './App.css'
 

class ImagesShow extends React.Component{
    constructor(props){
        super(props);
        console.log("props: ", this.props.result)
    }
    componentDidMount(){

    }
    render(){
        // let a=this.props.result[1]?.images?.fixed_width_still?.url ?? "";
        return(
         <Container>
            <RowOfImages result={this.props.result}/>
        </Container>
        )
    }
}

function RowOfImages (props){
    const result=props.result;
    let number=0, id=0;
    const listItems=result.map(image =>
        <SingleImage key={number++} id={id++} item={image.images.fixed_width_still.url} />
        );
    return(
       <Row>
            {listItems}
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
           ReactDOM.render(<Popup closePopup={handlePopupOff}/>, document.getElementById("enlarge"));

        }
         return( ()=> {
             if(idSet!==-1 && showPop){ 
                 document.getElementById("enlarge").remove();
                }
         })
        
 
    },[idSet, showPop])
    return(
        <Col xs={6} md={4} lg={3}>
            <Image onClick={(e)=> setId(e.target.id)} src={result} id={id} thumbnail>
            </Image> 
        </Col>
    );
}

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>x</button>
          </div>
        </div>
      );
    }
  }


export default ImagesShow;
export {SingleImage};