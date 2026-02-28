import "./resume.css"

const Technologies = () => {
    return <>
         <section className="devLangguages1">
            <h5>Technologies/Frameworks</h5>
             <div className="devLangList">
                <span>HTML</span>
                <progress id="p" value="95" max="100"></progress>
            </div>
             <div className="devLangList">
                <span>CSS</span>
                <progress id="p" value="90" max="100"></progress>
            </div>
             <div className="devLangList">
                <span>GitHub</span>
                <progress id="p" value="30" max="100"></progress>
            </div>
             <div className="devLangList">
                <span>React</span>
                <progress id="p" value="65" max="100"></progress>
            </div>
        </section>
    </>
}

export default Technologies