import { ClientsData } from "../../constansts/aboutData";

import "./about.css"

const Clients = () => {
    return <>
        <section className="clients">
            <h3>Clients</h3>
            <div className="clientsMain">
                {ClientsData.map((item, i) => (
                    <div key={i} className="clientsCart">
                        <p>{item.client}</p>
                    </div>
                ))}
            </div>
        </section>
    </>
}

export default Clients;