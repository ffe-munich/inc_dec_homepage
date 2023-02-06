import React from 'react'
import './Services.css'

import Card_1 from '../Box/Box_1';
import Card_2 from '../Box/Box_2';
import Card_3 from '../Box/Box_3';
import Card_4 from '../Box/Box_4';
import Card_5 from '../Box/Box_5';
import Card_6 from '../Box/Box_6';
import Card_7 from '../Box/Box_7';


import GAMERS from '../../img/gamers.png';
import ARROW from '../../img/box_1_4.png';
import IMG2 from '../../img/box_1_1.png';
import IMG3 from '../../img/box_1_2.png';
import IMG4 from '../../img/box_1_3.png';
import IMG5 from '../../img/Inc.png';
import IMG6 from '../../img/box_2_2.png';
import IMG7 from '../../img/box_3_1.png';
import IMG8 from '../../img/box_3_2.png';
import IMG9 from '../../img/box_3_3.png';
import IMG10 from '../../img/box_4_1.png';
import IMG11 from '../../img/box_4_2.png';
import IMG12 from '../../img/box_5_1.png';
import IMG13 from '../../img/box_5_2.png';
import IMG14 from '../../img/box_5_3.png';

const Services = () => {
  return (
    <div className="services">
       
        {/* right side */}
        <div className="cards">
            
            {/* first card */}
            <div style={{top: '2rem',left: '-1rem'}}>
                <Card_1
                img1={GAMERS}
                img5 = {ARROW}
                img2 = {IMG2}
                img3 = {IMG3}
                img4 = {IMG4}

                text1 = {"There are two nodes with generators on both and a load on the second node (generators dashboard)/loads on both and a generator on the first node(load dashboard)"}
                text2 = {"Between the nodes there is a limited transmission capacity"}
                text3 = {"Electricity trading happens via a central market mechanism on the spot market"}
                />
            </div>

            {/* Second card */}
            <div style={{top: '2rem',left: "44.5rem"}}>
                <Card_2
                img1={IMG5}
                img2 = {IMG6}
                text1 = {'Increase-Decrease Gaming (Inc-Dec gaming) is a form of strategic bidding behavior in the market-based procurement of grid-serving flexibility (market-based redispatch). The flexibility providers expect an advantageous price on the flexibility market and alter their bid on the spot market accordingly. Hence, they will exploit the parallel existence of spot market and flexibilty market for arbitrage opportunities. It is to be distinguished from market power and can also be performed by small, non-pivotal flexibiltiy providers. Among potential consequences are an aggravation and increasing number of grid congestions, high costs for the grid operator for flexibility procurement and undesirable incentives.'}
                text2 = {"In case of network congestion, redispatch is performed via seperate redispatch markets for node 1 (export constraint node) and node 2 (import constraint node)."}
                text3 = {'While the export constraint node requires a reduction (downdispatch) of feed-in or an increase (updispatch) of load, for the import constraint node, the signs are reversed.'}
                />
            </div>

            {/* first card */}
            <div style={{top: '18rem',left: '44.5rem'}}>
                <Card_6
                detail = {"Inc-Dec gaming in higher demand, higher redispatch costs, and generates windfall profits for the strategic bidders"}
                />
                

            </div>
            
            {/* Second card */}
            <div style={{top: '18rem',left: "-1rem"}}>
                <Card_3
                
                img1 = {IMG7}
                img2 = {IMG8}
                img3 = {IMG9}

                text_1_1={"None: "}
                text_1_2={"All actors bid marginal costs on all market(no strategic bidding)."}
                text_2_1={"Full Anticipation: "}
                text_2_2={"Bidders bid their profit maximizing bid on the spot market anticipating the redispatch price."}
                text_3_1={"Baysian Equilibrium: "}
                text_3_2 = {"Depiction of the long-term equilibrium."}
              
                />
            </div>

             {/* Second card */}
             <div style={{top: '27rem',left: "-1rem"}}>
                <Card_4
                img1 = {IMG10}
                img2 = {IMG11}
                
                text_1_1={"Freeze-bids button: "}
                text_1_2={"Fixes all actors and enables to change the input situation, to depict risk by showing the results of false forecasting of a situation(e.g changed generation/load, change of transmission capacity available)."}
                text_2_1={"Save results: "}
                text_2_2={"Save the actors payoffs, the network operator costs and the network congestion to an excel file, for direct comparison of different inputs."}
                
              
                />
            </div>

            <div style={{top: '26rem',left: "-1rem",bottom: '1rem'}}>
                <Card_5
                img1 = {IMG12}
                img2 = {IMG13}
                img3 = {IMG14}
                
                text_1_1={"1.Statistic:"}
                text_1_1_1 =  {"Non-Attribution"}
                text_1_2={"To increase th risk of inc-dec gaming,actors are not distributed randomly on the redispatch market, even if their lies below the bid of their competitors."}
                text_2_1={"2.Monitoring:"}
                text_2_1_1 ={"Sanctions "}
                text_2_2={"Systematic deviations in times of network congestions are monitored. They are detected with a probability p and in this case sanctioned with a sanction of XX."}
                text_3_1={"3.Capacity Pricing: "}
                text_3_2 = {"One or more actors can be selected, who are not remunerated directly for a change in power flows but receive a fixed compensation for the provision of their flexibility for a certain time period. When they are redispatched, they are compensated by the spot market price in case of updispatch/need to pay the spot market price in case of downdispatch. "}
              
                />
            </div>
          

            <div style={{top: '30rem',left: "44.5rem",bottom: '1rem'}}>
                <Card_7
             
                
                text_1={"Try out the interactive dashboards here: "}
                text_2={"Dashboard for generators "}
                text_3={"Dashboard for Loads "}              
                />
            </div>

            

            


        </div>

    </div>
  )
}

export default Services