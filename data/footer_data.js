import { CiLocationOn } from "react-icons/ci";
import { LuMail } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitch } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { CgCreditCard } from "react-icons/cg";
export const footer = {
    inform:{
            title:"Contacts",
            description:"Feel free to reach out to us with any questions or suggestions. We’re always happy to hear from you",
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
    
    links:[ 
        { title: "Home", path: "/home" },
        { title: "Games", path: "/games" },
        { title: "Leaderboard", path: "/leaderboard" },
        { title: "Profile", path: "/profile" },
        { title: "Help", path: "/help" },
        { title: "About", path: "/about" },
    ],
    EndFooterSection:{
        CopyRight:"© 2025 GameProject. All rights reserved.",
        BankCards:[
            {
                icon:FaCcVisa()
            },
            {
                icon:FaCcPaypal()
            },
            {
                icon:FaCcMastercard()
            },
            {
                icon:CgCreditCard()
            },
        ],
        SocialLinks:[
            {
                icon:TiSocialFacebook()
            },
            {
                icon:IoLogoTwitch()
            },
            {
                icon:FaPinterestP()
            },
            {
                icon:FaGoogle()
            },
            {
                icon:FaInstagram()
            },
        ],
    },

}