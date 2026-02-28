import { AsideData } from "../../constansts/asideData"
import SocialMedia from "../socials"
import "./aside.css"

const ASideInfo = () => {
    return <>
        <div className="userInfo">
                {AsideData.map((item, index) => (
                    <div className="infoList">
                        <div key={index} className="userInfoLogo">
                            <img src={item.logo} alt={item.title} />
                        </div>
                        <div className="userInfoText">
                            <h6>{item.title}</h6>
                            <p>{item.txt}</p>
                        </div>
                    </div>
                ))}
                <div className="userSocials">
                    <SocialMedia />
                </div>
            </div>
    </>
}

export default ASideInfo