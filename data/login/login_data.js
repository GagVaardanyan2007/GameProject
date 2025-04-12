import { IoCaretBackSharp } from "react-icons/io5";

export const login = {
    title:"Log In",
    inputs:[
        {  placeholder: "Enter your email", type: "email" },
        {  placeholder: "Enter your password", type: "password" },
        {  placeholder: "Submit", type: "submit" }
    ],
    moreButton:[
        {
            title:"Back",
            icon:IoCaretBackSharp(),
            path:"/register"
        },
        {
            title:"Forgot password?",
            path:"/register"
        },
    ]
}