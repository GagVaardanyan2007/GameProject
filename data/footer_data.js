import { CiLocationOn } from "react-icons/ci";
import { LuMail } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";

export const footer = {
    inform:[
        {
            title:"",
            description:"",
            feedback:[
                {
                    icon:MdOutlineLocalPhone(),
                    inform:"+4-(821)-(7360)-(5192)"
                },
                {
                    icon:LuMail(),
                    inform:"gamingproject1234@email.com"
                },
                {
                    icon:CiLocationOn(),
                    inform:"No 82 Maple Avenue 57/4, Los Angeles, USA"
                },
            ],
        },
    ],
    links:[ 
        { title: "Home", path: "/home" },
        { title: "Games", path: "/games" },
        { title: "Leaderboard", path: "/leaderboard" },
        { title: "Profile", path: "/profile" },
        { title: "Help", path: "/help" },
        { title: "About", path: "/about" },
    ],
}