import "./about.css"
import iconDesign from "../../assets/icon-design.svg";
import iconDesign1 from "../../assets/icon-dev.svg";
import iconDesign2 from "../../assets/icon-app.svg";
import iconDesign3 from "../../assets/icon-photo.svg";
import 'swiper/css';
import { useState } from 'react';
import Testimonials from "./aboutTestimonials";
import Clients from "./aboutClients";

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return <>
        <div className="about">
            <h1 className="aboutTitle">About Me</h1>
            <p className="aboutInfo">
                Salom, men Sa’dullayev Sadulla (tug‘ilgan yilim: 2012 yil, iyun 27), zamonaviy va interaktiv veb-saytlar yaratishga ishtiyoqli Frontend Developerman. Men HTML, CSS, JavaScript, React va Bootstrap bilan ishlashni yaxshi ko‘raman va dizaynlarni jonli, foydalanuvchi uchun qulay saytlar shaklida yaratishga intilaman.

                Yangi texnologiyalarni o‘rganish, kreativ yechimlar topish va o‘z ko‘nikmalarimni doimiy rivojlantirish mening asosiy maqsadlarimdan. Kod yozishdan tashqari, men dizayn va shaxsiy loyihalar ustida ishlashni, murakkab muammolarni ijodiy tarzda hal qilishni yoqtiraman.
            </p>
            <h2 className="aboutDoingTitle">What I'm Doing</h2>
            <div className="about-doing-grid">
                <div className="about-doing-card">
                    <img src={iconDesign} alt="" />
                    <h3>Web Design</h3>
                    <p>The most modern and high-quality design made at a professional level.</p>
                </div>
                <div className="about-doing-card">
                    <img src={iconDesign1} alt="" />
                    <h3>Web Development</h3>
                    <p>High-quality development of sites at the professional level.</p>
                </div>
                <div className="about-doing-card">
                    <img src={iconDesign2} alt="" />
                    <h3>Mobile Apps</h3>
                    <p>Professional development of applications for iOS and Android.</p>
                </div>
                <div className="about-doing-card">
                    <img src={iconDesign3} alt="" />
                    <h3>Photography</h3>
                    <p>I make high-quality photos of any category at a professional level.</p>
                </div>
            </div>
            <Testimonials />
            <Clients />
        </div>
    </>
}

export default About;