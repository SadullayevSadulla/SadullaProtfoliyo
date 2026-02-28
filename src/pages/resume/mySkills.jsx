import DevLanguages from "./devLanguages";
import DevTools from "./devTools";
import Languages from "./languages";
import Technologies from "./technologies";
import "./resume.css"

const MySkills = () => {
    return <>
        <section className="MySkills">
            <h3 className="mySkillsTitle">My Skills</h3>
            <div className="skillsMain">
                <DevLanguages />
                <Technologies />
                <DevTools />
                <Languages />
            </div>
        </section>
    </>
}

export default MySkills;