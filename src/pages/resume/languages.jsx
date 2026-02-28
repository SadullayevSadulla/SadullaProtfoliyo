const Languages = () => {
    return <>
        <section className="devLangguages">
            <h5>Languages</h5>
             <div className="devLangList">
                <span>Uzbek</span>
                <progress id="p" value="100" max="100"></progress>
            </div>
             <div className="devLangList">
                <span>English</span>
                <progress id="p" value="20" max="100"></progress>
            </div>
        </section>
    </>
}

export default Languages;