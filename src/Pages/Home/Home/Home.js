import React from 'react';
import Banner from '../Banner/Banner';
import ExtraService from '../ExtraService/ExtraService';
import FrequentlyAskedQuestion from '../FrequentlyAskedQuestion/FrequentlyAskedQuestion';
import Services from '../Service/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
            <ExtraService></ExtraService>
        </div>
    );
};

export default Home;
