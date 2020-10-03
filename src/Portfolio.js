import React from "react";
import Cards from "./Cards";
import cabin from './img/portfolio/cabin.png';
import cake from './img/portfolio/cake.png';
import circus from './img/portfolio/circus.png';
import safe from './img/portfolio/safe.png';
import game from './img/portfolio/game.png';
import submarine from './img/portfolio/submarine.png';


const Portfolio = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                    Portfolio
                </h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <Cards imageSrc={cabin} cardNum="#portfolioModal1" />
                    <Cards imageSrc={cake} cardNum="#portfolioModal2" />
                    <Cards imageSrc={circus} cardNum="#portfolioModal3" />
                    <Cards imageSrc={game} cardNum="#portfolioModal4" />
                    <Cards imageSrc={safe} cardNum="#portfolioModal5" />
                    <Cards imageSrc={submarine} cardNum="#portfolioModal6" />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
