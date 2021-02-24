import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import App from './App.js';
// import './App.css'
 

class ImagesShow extends React.Component{
    constructor(props){
        super(props);
        console.log("props: ", this.props.result)
    }
    componentDidMount(){
        // console.log("components mounted!")
        // const img = (document.getElementsByTagName("img"));
        // console.log(img);
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
    // console.log("id: ",props.id) 
    const result=props.item;
    const id=props.id;
    function handleClick(e){


        ReactDOM.render(<App showPopup={true}/>, document.getElementById("meet"));
        
    }
    return(
        <Col xs={6} md={4} lg={3}>
            <Image onClick={handleClick} src={result} id={id} thumbnail>
            </Image> 
        </Col>
    );
}

export default ImagesShow;
export {SingleImage};