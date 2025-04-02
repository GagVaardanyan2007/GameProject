import { IoMdLogIn } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";
import { MdOutlineMenuOpen } from "react-icons/md";


export const navbar = {
    logo: "\gameslogo.jpeg",
    homePageLink:'#home',
     links:[
                { title: "Home", path: "#home" },
                { title: "About Us", path: "#about" },
                { title: "Leaderboard", path: "#leaderboard" },
                { title: "News", path: "#news" },
                { title: "Events", path: "#events" },
                { title: "Donate", path: "#donate" },
                { title: "Reviews", path: "#reviews" },
              ],
              
    icons: [
        { 
        icon:  MdOutlineMenuOpen(), action: "Menu"
        },
        { 
        icon: LuSunMoon(), action: "toggleTheme"
        },
        { 
        icon: IoMdLogIn(), action: "Log-in" ,
        path:"/LogIn"
        },
        
    ],
};

