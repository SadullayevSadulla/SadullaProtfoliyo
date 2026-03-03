import { TestimonialsData } from "../../constansts/aboutData";
import MyAvatar from "../../assets/avatar.png";
import "./about.css"

const Testimonials = () => {
    return <>
        <section className="testimonials">
            <h3>Testimonials</h3>
            <div className="testimonialsMain">
                {TestimonialsData.map((item, i) => (
                    <div key={i} className="testimonialsCart">
                        <h5>{item.name}</h5>
                        <p>{item.info}</p>
                        <div className="tesPick">
                            <img src={MyAvatar} alt="MyAvatar" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
}

export default Testimonials;