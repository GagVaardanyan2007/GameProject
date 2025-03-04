import { IoPeople, IoTime } from "react-icons/io5";
import { TbMoneybag, TbTrophy } from "react-icons/tb";

export const main_section = {
    about:{
        title:"Information about our website",
        SubTitle:"Welcome to the Ultimate Gaming Experience!",
        description:[
            "Here, you can play various games, meet other players, and purchase unique donations. We offer an exciting gaming experience, regular events, and a friendly community. Whether you want to relax, compete in tournaments, or create something grand – there's a place for everyone here!",
            "Explore our vast worlds, take on thrilling challenges, and enjoy custom features designed to make your adventure unforgettable. With balanced gameplay, dedicated staff, and a welcoming atmosphere, you'll always find something exciting to do.",
            "Join us today and become part of a growing community where creativity and competition go hand in hand. Whether you're a casual player or a dedicated gamer, there's always a new experience waiting for you!",
        ],
        img:"../public/mainSectionImages/AboutImage.webp"
    },

    leaderBoard:{
        title: "Server Leaderboards",
         description: " Track the best players across the gaming world! Check out the top rankings for balance, playtime, and achievements to see who dominates the leaderboard. 🚀",
            card: [
                {
                    img: "url(../public/mainSectionImages/LeaderBoardImg1.jpeg)",
                    subtitle: "🏆 Top Scores",
                    description: "Who dominates the leaderboards? Check out the players with the highest scores across games!",
                    icon: TbTrophy(),
                    btnTitle: "View Rankings",
                    TopPlayers: [
                        { Player: "Player1", count: "50000" },
                        { Player: "Player2", count: "47000" },
                        { Player: "Player3", count: "45000" },
                        { Player: "Player4", count: "43000" },
                        { Player: "Player5", count: "41000" },
                    ],
                },
                {
                    img: "url(../public/mainSectionImages/LeaderBoardImg2.jpeg)",
                    subtitle: "🎮 Top Players",
                    description: "The best gamers based on achievements, skill, and activity. Who will claim the throne?",
                    icon: IoPeople(),
                    btnTitle: "View Rankings",
                    TopPlayers: [
                        { Player: "Player1", count: "120 Achievements" },
                        { Player: "Player2", count: "110 Achievements" },
                        { Player: "Player3", count: "105 Achievements" },
                        { Player: "Player4", count: "100 Achievements" },
                        { Player: "Player5", count: "95 Achievements" },
                    ],
                },
                {
                    img: "url(../public/mainSectionImages/LeaderBoardImg3.jpeg)",
                    subtitle: "⏳ Top Playtime",
                    description: "These dedicated gamers have spent the most time perfecting their skills!",
                    icon: IoTime(),
                    btnTitle: "View Rankings",
                    TopPlayers: [
                        { Player: "Player1", count: "1200h" },
                        { Player: "Player2", count: "1100h" },
                        { Player: "Player3", count: "1050h" },
                        { Player: "Player4", count: "1000h" },
                        { Player: "Player5", count: "950h" },
                    ],
                    
                },
            ]
         }
    }
    