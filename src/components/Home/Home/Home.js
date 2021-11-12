import React from 'react';
import AllServices from '../AllServices/AllServices';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <AllServices></AllServices>
           <Choose></Choose>
           <Team></Team>
        </div>
    );
};

export default Home;