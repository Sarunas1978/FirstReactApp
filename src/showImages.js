import React from 'react';
// import ReactDOM from 'react-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import './index.js';

// import doFetch from './fetch.js';
// import { Form, Button, Col } from 'react-bootstrap'; 

class ImagesShow extends React.Component{
    // constructor(props){
    //     super(props);

        // console.log("props: ", this.props.result)
        // console.log("value: ", props) 
    // }


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
    let id=0;
    const listItems=result.map(image =>
        <SingleImage key={id++} item={image.images.fixed_width_still.url} />
        );
        console.log("value: ", listItems) 
    return(
       <Row>
            {listItems}
       </Row>
    )
}

function SingleImage (props){
    console.log("value: ", props.item) 
    const result=props.item;
    function handleClick(e){

    }
    return(
        <Col xs={6} md={4} lg={3}>
            <Image onClick={handleClick} src={result} thumbnail /> 
        </Col>
    );
}


export default ImagesShow;
export {SingleImage};