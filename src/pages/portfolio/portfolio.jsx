import { PortfolioData } from "../../constansts/portfolioData";
import "./portfolio.css"

const Portfolio = () => {
    return <>
        <section className="portfolio">
            <h1 className="portfolioTitle">Portfolio</h1>
                <div className="portfolioMain">
                    {PortfolioData.map((item, i) => (
                            <a key={i} href={item.path}>
                                <div className="projectCart">
                                    <img src={item.pick} alt={item.title} />
                                </div>
                                <h5>{item.title}</h5>
                            </a>
                    ))}  
                </div>
        </section>
    
    </>
}

export default Portfolio;