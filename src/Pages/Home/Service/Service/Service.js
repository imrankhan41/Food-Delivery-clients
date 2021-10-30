import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"
const Service = (props) => {
    const {name,img,price,text}=props.service
    return (
        <div className="m-2 card">
             <Card>
            <Card.Header> <h4>{name}</h4>
                </Card.Header>
       
        
            <Card.Img style={{height:'20rem'}} variant="top" src={img} />
            <Card.Body>
            <Card.Text>
                <h5>price:${price}</h5>  
                <br />
            {text}
             
            </Card.Text>
            </Card.Body >
            <Card.Footer >
                <button className="button1" ><Link className="link-button"  to={`/service/${name}`}>Buy Now</Link></button>
            </Card.Footer>
        </Card>
    </div>
    );
};

export default Service;