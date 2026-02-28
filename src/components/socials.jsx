import { AsideSocials } from "../constansts/asideData";
import "./components.css"

const SocialMedia = () => {
    return <>
        <section className="socialMedia">
            {AsideSocials.map((item, i) => (
               <a key={i} href={item.link}>
                    <img src={item.logo} alt="LOGO" />
               </a>
            ))}
        </section>
    </>
}

export default SocialMedia;