const DevTools = () => {
    return <>
        <section className="devLangguages">
            <h5>Developer Tools</h5>
             <div className="devLangList">
                <span>VS Code</span>
                <progress id="p" value="85" max="100"></progress>
            </div>
             <div className="devLangList">
                <span>Figma</span>
                <progress id="p" value="100" max="100"></progress>
            </div>
        </section>
    </>
}

export default DevTools;