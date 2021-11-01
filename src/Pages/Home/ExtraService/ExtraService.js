import React from 'react';
import "./ExtraService.css"
const ExtraService = () => {
    return (
        <>
        <h1 className="text-primary">Why you will choice us?</h1>
       <div className="extra-color">
           <div className="row">
              
               <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                   <div className="card-size" >
                   <img src="https://i.ibb.co/HdyKvpw/ic-Food-Feature-1.png" class="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h1 class="card-title">Fastest Delivery</h1>
                       <p className="card-text">Get your food delivered in less than an hour! That’s as fast as it can get.</p>
                   </div>
                   </div>
               </div>
               <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                   <div className="card-size" >
                   <img src="https://i.ibb.co/hCsKBSQ/ic-Food-Feature-3.png" class="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h1 class="card-title">So Much to
Choose From</h1>
                       <p className="card-text">Find your favourite among the thousands of restaurants in our app.</p>
                   </div>
                   </div>
               </div>
               <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                   <div className="card-size">
                   <img src="https://i.ibb.co/vwSYkHZ/ic-Food-Feature-2.png" class="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h1 class="card-title">Best Offers
In Town!</h1>
                       <p className="card-text">Get the best offers and combos at the best price only at Pathao Food!</p>
                   </div>
                   </div>
               </div>
           </div>
           
       </div>
       </>
    );
};

export default ExtraService;
