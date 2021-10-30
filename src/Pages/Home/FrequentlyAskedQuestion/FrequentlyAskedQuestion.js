import React from 'react';
import "./FrequentlyAskedQuestion.css"
import { Accordion } from 'react-bootstrap';
const FrequentlyAskedQuestion = () => {
    return (
        <div id="faq" className="container my-5">
            <h1 className="text-primary">FrequentlyAskedQuestion</h1>
            <Accordion>
        <Accordion.Item eventKey="0" >
            <Accordion.Header className="accordin-color">I got the wrong food. What should i do?</Accordion.Header>
            <Accordion.Body>
            We’re extremely sorry for the inconvenience. Please report this issue through our app with a photo of the food or you can also immediately contact our support team with the helpline
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>My Foodman's number is unreachable. What should i do?</Accordion.Header>
            <Accordion.Body>
            We’re extremely sorry about the inconvenience. Please, inform our support team and we will take actions accordingly to help you.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion.Item eventKey="2">
            <Accordion.Header>The foodman refused to take my order's. What can i do?</Accordion.Header>
            <Accordion.Body>
            Please inform our support at 09678100800 immediately and we will take care of the issue.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>The foodman cancelled my order'c. What can i do?</Accordion.Header>
            <Accordion.Body>
            We’re extremely sorry for the inconvenience. Please, place your order again from the same restaurant and your desired food will be delivered to you by another nearby foodman.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>I forgot to apply my promo code. What can i do?</Accordion.Header>
            <Accordion.Body>
            Since you’ve already placed an order, you will need to proceed with the current order. Please remember to apply the promo on your next order and you will have your food delivered with a discount.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
            <Accordion.Header>I want to order from a restaurant which is not in the app. Possible?</Accordion.Header>
            <Accordion.Body>
            According to our policy, you can only order from the restaurants available on the app. So, it is not possible for you to order from a restaurant that is not on our app.
            </Accordion.Body>
        </Accordion.Item>
        </div>
    );
};

export default FrequentlyAskedQuestion;