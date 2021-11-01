import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name,img,price,text,_id}=props.service
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
       <Link to={`/service/${_id}`}>
           <button className="btn btn-warning">Buy Now</button>
       </Link>
       </Card.Footer>
   </Card>
</div>
    );
};

export default Service;
