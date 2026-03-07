import { ClientsData } from "../../constansts/aboutData";
import "./about.css";
const Clients = () => {
  return (
    <section className="clients">
      <h3>Clients</h3>
      <div className="clientsMain">
        {ClientsData.map((item, i) => (
          <div key={i} className="clientsCart">
            <img src={item.img1} alt="client" />
            <p>{item.client}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;