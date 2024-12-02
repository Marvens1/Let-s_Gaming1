import Farm from "../Images/Farm.jpg";
import Jungle from "../Images/Jungle.jpg";
import Beach from "../Images/Beach.jpg";
import Turbo from "../Images/Turbo.jpg";
import Royal from "../Images/Royal.jpg";
import Hexa from "../Images/Hexa.jpg";
import Ninja from "../Images/Ninja.jpg";
import Dunk from "../Images/Dunk.jpg";
import Golden from "../Images/Golden.jpg";
import SoccerDash from "../Images/SoccerDash.jpg";
import BattleSoccerArena from "../Images/BattleSoccerArena.jpeg";
import SoccerSimulator from "../Images/SoccerSimulator.jpeg";
import StickmanZombie from "../Images/StickmanZombie.jpg";
import HideMoodengHippo from "../Images/HideMoodengHippo.jpg";
import Zumbauest from "../Images/Zumbauest.jpg";
import SiberianAssault from "../Images/SiberianAssault.jpg";
import CandyBubble from "../Images/CandyBubble.jpg";
import WolfLifeSimulator from "../Images/WolfLifeSimulator.jpg";
import WordRivers from "../Images/WordRivers.jpg";
import FPSTargetShooting from "../Images/FPSTargetShooting.jpg";
import WordsfromwordsSea from "../Images/WordsfromwordsSea.jpg";
import DominoAdventure from "../Images/DominoAdventure.jpg";
import LittleCandyBakery from "../Images/LittleCandyBakery.jpg";
import BlockPuzzleFrozenJewel from "../Images/BlockPuzzleFrozenJewel.jpg";
import CheckersDeluxeEdition from "../Images/CheckersDeluxeEdition.jpg";
import WordSwipe from "../Images/WordSwipe.jpeg";
import FootballFun from "../Images/FootballFun.jpg";
import RealFreekick from "../Images/RealFreekick.jpg";
import RealFootball from "../Images/RealFootball.jpeg";
import UltimateTransportDrivingSim from "../Images/UltimateTransportDrivingSim.jpg";
import JailPrisonVanPoliceGame from "../Images/JailPrisonVanPoliceGame.jpg";
import SiberianStrike from "../Images/SiberianStrike.jpeg";






export const fetchGames = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Farm Triple Match",
          url:"https://html5.gamedistribution.com/a2ccc7fecd4b4e61bb4c57503c79863d/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: Farm
        },
        {
          title: "Call of the Jungle! Animal Evolution",
          url:"https://html5.gamedistribution.com/dddb013d951146d5b9ffcae5fffeae70/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: Jungle
        },
        {
          title: "Parking Fury 3D: Beach City 2",
          url:"https://html5.gamedistribution.com/6ca9e461efb84bfba46b29379378cf78/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: Beach
        },
        {
          title: "Turbo Race 3D",
          url:"https://html5.gamedistribution.com/6b93a7631e0d41d59cd4d661b46ccf90/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: Turbo
        },
        {
          title: "Hexa",
          url:"https://html5.gamedistribution.com/ab1984b4b1314e1dab545a34b62bce47/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: Hexa
        },
        {
          title: "Stick Ninja Survival",
          url:"https://html5.gamedistribution.com/cc21338a4a4840e88848f186f567e4dd/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: Ninja
        },
        {
          title: "Ball Dunk Fall",
          url:"https://html5.gamedistribution.com/1f6162f5ac0541cca72f77a833acde86/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: Dunk
        },
        {
          title: "BFFs Golden Hour",
          url:"https://html5.gamedistribution.com/b2acab2d8070448db768c627f9966d50/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: Golden
        },
        {
          title: "Soccer Dash",
          url:"https://html5.gamedistribution.com/5772350f4ea345959c4e56a24d94ee42/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: SoccerDash
        },
        {
          title: "Battle Soccer Arena",
          url:"https://html5.gamedistribution.com/b48ef3f508ad4dc08e7afcff34284cf5/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: BattleSoccerArena
        },
        {
          title: "Soccer Simulator",
          url:"https://html5.gamedistribution.com/284cb659f32547d0b764ab9f4364b695/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: SoccerSimulator
        },
        {
          title: "Stickman vs Zombies: Epic Fight",
          url:"https://html5.gamedistribution.com/d94dfa9994034546a88f260d7dee078f/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail: StickmanZombie
        },
        {
          title: "Hide Moodeng Hippo!",
          url:"https://html5.gamedistribution.com/e9321a0e5df7409fada2598f1f0476a1/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail:HideMoodengHippo
        },
      
        {
          title: "Zumba Quest",
          url:"https://html5.gamedistribution.com/22a2d945cb7b434fb53e3876b611eb53/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail:Zumbauest
        },
        {
          title: "Siberian Assault",
          url:"https://html5.gamedistribution.com/aa0e174e9d234a0e8a60354ca2a01fe2/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail:SiberianAssault
        },
        {
          title: "Candy Bubble",
          url:"https://html5.gamedistribution.com/d9201aa9fdb24921b1b832c18762ddf1/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail:CandyBubble
        },
       
        {
          title: "Wolf Life Simulator",
          url:"https://html5.gamedistribution.com/ce5722d11d38481183a7c66963f762d4/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail:WolfLifeSimulator
        },
        {
          title: "Word Rivers",
          url:"https://html5.gamedistribution.com/fec982ec0f784e52801ff2ec4da56b6c/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" ,
          thumbnail:WordRivers
        },
        {
          title: "3D FPS Target Shooting",
          url:"https://html5.gamedistribution.com/75a87aa8fd5a47bf9abb24f0b20488e7/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail:FPSTargetShooting
        },
        {
          title: "Words from words: Sea",
          url:"https://html5.gamedistribution.com/f6afc2bcc09b4d44afe174bdb6603813/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" ,
          thumbnail:WordsfromwordsSea
        },
        {
          title: "Domino Adventure",
          url:"https://html5.gamedistribution.com/e94cd2326608446a8a78c54ff15b4558/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" ,
          thumbnail:DominoAdventure
        },

        {
          title: "Royal Bubble Blast",
          url:"https://html5.gamedistribution.com/e94cd2326608446a8a78c54ff15b4558/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" ,
          thumbnail:Royal
        },

        {
          title: "Little Candy Bakery",
          url:"https://html5.gamedistribution.com/8ae87b2c4ede4a9e8a56d9df8ed17052/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" ,
          thumbnail:LittleCandyBakery
        },

        {
          title: "Block Puzzle - Frozen Jewel",
          url:"https://html5.gamedistribution.com/5031e968c8ac4af7ac8940ac35518b7c/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" ,
          thumbnail:BlockPuzzleFrozenJewel
        },

        {
          title: "Checkers Deluxe Edition",
          url:"https://html5.gamedistribution.com/cc314a3c4ebd4c33a46d8bd0de8e5374/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail:CheckersDeluxeEdition
        },
        {
          title: "Word Swipe",
          url:"https://html5.gamedistribution.com/ef4b392680554564abe1a3d3917a754b/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail:WordSwipe
        },

        {
          title: "Football Fun",
          url:"https://html5.gamedistribution.com/b59e09ac797a4ccf9ddac5ac0c87a91c/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail:FootballFun
        },
        {
          title: "Real Freekick 3D",
          url:"https://html5.gamedistribution.com/527ae66f4e664fdc8847e7ce952165dc/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail:RealFreekick
        },
        {
          title: "Real Football",
          url:"https://html5.gamedistribution.com/0e790569b4c74967923678652de3dbc4/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
          thumbnail:RealFootball
        },
        {
          title: "Ultimate Transport Driving Sim",
          url:"https://html5.gamedistribution.com/99cf2c7b72fa4151a25ab371d826e4d8/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" ,
          thumbnail:UltimateTransportDrivingSim
        },

        {
          title: "Jail Prison Van Police Game",
          url:"https://html5.gamedistribution.com/114b54a4643841c9b0582a4ed39d094b/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" ,
          thumbnail:JailPrisonVanPoliceGame
        },

        {
          title: "Siberian Strike",
          url:"https://html5.gamedistribution.com/9e6724b6b0b94d44b0302ae73b5216e3/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}"  ,
          thumbnail:SiberianStrike
        },
      ]);
    }, 500); // Simulate a 1-second delay
  });
};