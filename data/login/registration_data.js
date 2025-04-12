import { IoCaretBackSharp } from "react-icons/io5";

export const register = {
    title:"Registration",
    inputs:[
        {  placeholder: "Enter your name", type: "text" },
        {  placeholder: "Enter your SurName", type: "text" },
        {  placeholder: "Enter your age", type: "number" },
        {  placeholder: "Enter your email", type: "email" },
        {  placeholder: "Enter your password", type: "password" },
        {  placeholder: "Confirm Password", type: "password" },
        {  placeholder: "Submit", type: "submit" },
    ],
    moreButton:[
            {
                title:"Back",
                icon:IoCaretBackSharp(),
                path:"/"
            },
            {
                title:'Log-in',
                path:"/login"
            },
        ]
}