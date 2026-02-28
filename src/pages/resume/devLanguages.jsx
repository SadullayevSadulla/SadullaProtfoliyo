import "./resume.css"

const DevLanguages = () => {
    return <>
        <section className="devLangguages">
            <h5>Programming Languages</h5>
             <div className="devLangList">
                <span>JavaScript</span>
                <progress id="p" value="40" max="100"></progress>
            </div>
        </section>
    </>
}

export default DevLanguages;