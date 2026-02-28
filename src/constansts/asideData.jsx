//////////// ASIDE DATA IMG /////////////
import asideLogo1 from "../assets/email.svg";
import asideLogo2 from "../assets/phone.svg";
import asideLogo3 from "../assets/calendar.svg";
import asideLogo4 from "../assets/location.svg";
//-----------------------------------------------

/////////////// Aside socials IMG ///////////////
import telegram from "../assets/telegram.svg";
import gitHub from "../assets/github.svg";
import instagram from "../assets/instagram.svg";

//pathes
const telegramPath = "https://t.me/sadullayev0627"
const gitHubPath = "https://github.com/SadullayevSadulla"
const instagramPath = "https://www.instagram.com/sadullayev.0627/"



export const AsideData = [
    {
        id: 1,
        logo: asideLogo1,
        title: "EMAIL",
        txt: "sadullayev813@gmail.com",
    },
    {
        id: 2,
        logo: asideLogo2,
        title: "PHONE",
        txt: "+998 (93) 663 07-85",
    },
    {
        id: 3,
        logo: asideLogo3,
        title: "BIRTHDAY",
        txt: "Jun 27, 2012",
    },
    {
        id: 4,
        logo: asideLogo4,
        title: "LOCATION",
        txt: "Uzbekistan, Khorezm",
    },
]

export const AsideSocials = [
    {
        id: 1,
        logo: telegram,
        link: telegramPath,
    },
    {
        id: 2,
        logo: gitHub,
        link: gitHubPath,
    },
    {
        id: 3,
        logo: instagram,
        link: instagramPath,
    },
]