import { NavLink } from "react-router-dom";
import { MenuData } from "../constansts/menuData";

const MenuBar = () => {
    return <>
        <div className="header">
            {MenuData.map((item, i) => (
                <NavLink to={item.path} key={i} className={({isActive}) => (isActive ? "link active" : "link")}>
                    <div className="menues">
                        <p>{item.label}</p>
                    </div>
                </NavLink>
            ))}
        </div>
    </>
}
export default MenuBar;