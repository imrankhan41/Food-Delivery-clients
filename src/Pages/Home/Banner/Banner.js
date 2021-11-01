import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
const Banner = () => {
    return (
        <div className="banner">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-banner"
                    src="https://i.ibb.co/j6gsWFr/food-banner7.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className="text-color">The Best Chocolate Cake</h1>
                    <p className="text-color">Be careful when taking the cakes out of the pans, they’re really moist and delicate.</p>
                    <button className="button-banner">Explore</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-banner"
                    src="https://i.ibb.co/pZ7RSGj/food-banner6.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h1 className="text-color">How much fruit is needed daily?</h1>
                    <p className="text-color">The amount of fruit you need to eat depends on your age, sex, height, weight, and level of physical activity.</p>
                    <button className="button-banner">Explore</button>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-banner"
                    src="https://i.ibb.co/QCJ0YRN/banner8.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h1 className="text-color">How much food from the Protein Foods Group is needed daily?</h1>
                    <p className="text-color">The amount of protein foods you need to eat depends on your age, sex, height, weight, and level of physical activity.</p>
                    <button className="button-banner">Explore</button>
                    </Carousel.Caption>
                </Carousel.Item>
             
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-banner"
                    src="https://i.ibb.co/wp2v0ch/food-banner2.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h1 className="text-color">What foods are in the Vegetable Group?</h1>
                    <p className="text-color"> Vegetables may be raw or cooked; fresh, frozen, canned, or dried/dehydrated; and may be whole, cut-up, or mashed.</p>
                    <button className="button-banner">Explore</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-banner"
                    src="https://i.ibb.co/THsQDnd/food-banner1.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h1 className="text-color">How much fruit is needed daily?</h1>
                    <p className="text-color">In general, 1 cup of fruit or 100% fruit juice, or ½ cup of dried fruit can be considered as 1 cup from the Fruit Group.</p>
                    <button className="button-banner">Explore</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
