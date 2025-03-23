import { IoMdLogIn } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";
import { MdOutlineMenuOpen } from "react-icons/md";


export const navbar = {
    logo: "\gameslogo.jpeg",
     links:[
                { title: "About Us", path: "/" },
                { title: "Leaderboard", path: "/leaderboard" },
                { title: "News", path: "/news" },
                { title: "Events", path: "/events" },
                { title: "New Events", path: "/new-events" },
                { title: "Donate", path: "/donate" },
                { title: "Reviews", path: "/reviews" },
              ],
              
    icons: [
        { 
        icon:  MdOutlineMenuOpen(), action: "Menu" 
        },
        { 
        icon: LuSunMoon(), action: "toggleTheme"
        },
        { 
        icon: IoMdLogIn(), action: "Log-in" 
        },
        
    ],
};

