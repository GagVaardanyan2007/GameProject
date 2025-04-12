import App from "../../src/App";
import LogIn from "../../src/components/sections/Log-in/LogIn";
import Registration from "../../src/components/sections/Log-in/Registration";
import leaderBoardAllSection from "../../src/components/sections/mainSections/leaderBoardSection/leaderBoardAllSection";

import { login } from "../login/login_data";
import { register } from "../login/registration_data";
import { leaderPage } from "../mainSection/leaderboard/leaderBoardPage";


export const component = {
    allComponent:[
        {
            component:Registration(register),
            path:'/register',
        },
        {
            component:App(),
            path:'/',
        },
        {
            component:LogIn(login),
            path:'/LogIn',
        },
        {
            component:leaderBoardAllSection(leaderPage),
            path:'/leaderboard',
        },
    ]
}