import eduLogo from "../../assets/education.svg";
import MySkills from "./mySkills";

import "./resume.css"

const Resume = () => {
    return <>
        <section className="resume">
            <h1 className="resumeTitle">Resume</h1>

            <div className="education">
                <div className="educationTitle">
                    <div className="educationLogo">
                        <img src={eduLogo} alt="img" />
                    </div>
                    <h3>Education & Certification</h3>
                </div>

                <div className="educationList1">
                    <div className="list1Title">
                        <div className="list1Check"></div>
                        <h5>IT Park</h5>
                    </div>
                    <span>July 2024</span>
                    <p>Front-End Programming</p>
                </div>
                
                <div className="educationList1">
                    <div className="list1Title">
                        <div className="list1Check"></div>
                        <h5>Coursera</h5>
                    </div>
                    <span>Jul 2025</span>
                    <p>Meta Front-End Developer</p>
                </div>
            </div>

            <MySkills />
            
        </section>
    
    </>
}

export default Resume;