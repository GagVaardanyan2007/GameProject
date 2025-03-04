import { IoMdLogIn } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";
import { MdOutlineMenuOpen } from "react-icons/md";


export const navbar = {
    logo: "\gameslogo.jpeg",
    links:[ 
        { title: "Home", path: "/home" },
        { title: "Games", path: "/games" },
        { title: "Leaderboard", path: "/leaderboard" },
        { title: "Profile", path: "/profile" },
        { title: "Help", path: "/help" },
        { title: "About", path: "/about" },
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

