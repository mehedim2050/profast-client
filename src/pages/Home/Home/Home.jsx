import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogoMarquee from './ClientLogoMarquee/ClientLogoMarquee';
import BenefitCards from './Benefits/BenefitCard';
import BeMerchant from './BeMerchant/BeMerchant';
import WorkCard from './Work/WorkCard';
import CustomerCard from './customers/CustomerCard';
import Frequently from './Frequently/Frequently';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
             <WorkCard></WorkCard>
          <Services></Services>
          <ClientLogoMarquee></ClientLogoMarquee>
          <BenefitCards></BenefitCards>
          <BeMerchant></BeMerchant>
       <CustomerCard></CustomerCard>
       <Frequently></Frequently>
        </div>
    );
};

export default Home;