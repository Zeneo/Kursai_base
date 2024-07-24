import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);



const units = [
    {
        "icon": "🧔",
        "class": "warrior",
        "name": "Thorin",
        "health": 100,
        "price": 500,
        "inventory": []
    },
    {
        "icon": "👩‍🎤",
        "class": "warrior",
        "name": "Athena",
        "health": 120,
        "price": 550,
        "inventory": []
    },
    {
        "icon": "🧑‍🚀",
        "class": "warrior",
        "name": "Bjorn",
        "health": 110,
        "price": 520,
        "inventory": []
    },
    {
        "icon": "👩‍️",
        "class": "archer",
        "name": "Luna",
        "health": 80,
        "price": 450,
        "inventory": []
    },
    {
        "icon": "🧑‍🦳",
        "class": "archer",
        "name": "Elyan",
        "health": 85,
        "price": 480,
        "inventory": []
    },
    {
        "icon": "👨‍🏫",
        "class": "archer",
        "name": "Robin",
        "health": 90,
        "price": 470,
        "inventory": []
    },
    {
        "icon": "👩‍️",
        "class": "healer",
        "name": "Serena",
        "health": 70,
        "price": 400,
        "inventory": []
    },
    {
        "icon": "🧑‍️",
        "class": "healer",
        "name": "Aldric",
        "health": 75,
        "price": 420,
        "inventory": []
    },
    {
        "icon": "👨‍🎨",
        "class": "healer",
        "name": "Lyra",
        "health": 65,
        "price": 390,
        "inventory": []
    },
    {
        "icon": "👨‍🚀",
        "class": "warrior",
        "name": "Kane",
        "health": 115,
        "price": 530,
        "inventory": []
    },
    {
        "icon": "🧑‍🎤",
        "class": "archer",
        "name": "Faye",
        "health": 88,
        "price": 460,
        "inventory": []
    },
    {
        "icon": "🧑‍⚖️",
        "class": "healer",
        "name": "Merlin",
        "health": 72,
        "price": 410,
        "inventory": []
    },
    {
        "icon": "👨‍🎤",
        "class": "warrior",
        "name": "Drake",
        "health": 130,
        "price": 600,
        "inventory": []
    },
    {
        "icon": "🧑‍🏫",
        "class": "archer",
        "name": "Elara",
        "health": 92,
        "price": 490,
        "inventory": []
    },
    {
        "icon": "👩‍🚀",
        "class": "healer",
        "name": "Gwen",
        "health": 78,
        "price": 430,
        "inventory": []
    }
]
const weapons = [
    {
        "class": "warrior",
        "damage": 25,
        "price": 300,
        "icon": "🗡️"
    },
    {
        "class": "warrior",
        "damage": 30,
        "price": 350,
        "icon": "⚔️"
    },
    {
        "class": "warrior",
        "damage": 20,
        "price": 250,
        "icon": "🪓"
    },
    {
        "class": "warrior",
        "damage": 35,
        "price": 400,
        "icon": "🔨"
    },
    {
        "class": "warrior",
        "damage": 28,
        "price": 320,
        "icon": "🏹"
    },
    {
        "class": "warrior",
        "damage": 40,
        "price": 450,
        "icon": "🗡️"
    },
    {
        "class": "warrior",
        "damage": 22,
        "price": 270,
        "icon": "🔪"
    },
    {
        "class": "warrior",
        "damage": 33,
        "price": 380,
        "icon": "🪚"
    },
    {
        "class": "warrior",
        "damage": 37,
        "price": 420,
        "icon": "⚒️"
    },
    {
        "class": "archer",
        "damage": 22,
        "price": 300,
        "icon": "🏹"
    },
    {
        "class": "archer",
        "damage": 27,
        "price": 350,
        "icon": "🎯"
    },
    {
        "class": "archer",
        "damage": 18,
        "price": 250,
        "icon": "🪃"
    },
    {
        "class": "archer",
        "damage": 32,
        "price": 400,
        "icon": "🔫"
    },
    {
        "class": "archer",
        "damage": 24,
        "price": 320,
        "icon": "🔮"
    },
    {
        "class": "archer",
        "damage": 29,
        "price": 370,
        "icon": "🔫"
    },
    {
        "class": "archer",
        "damage": 21,
        "price": 280,
        "icon": "🪁"
    },
    {
        "class": "archer",
        "damage": 34,
        "price": 410,
        "icon": "🛠️"
    },
    {
        "class": "archer",
        "damage": 26,
        "price": 330,
        "icon": "🎾"
    },
    {
        "class": "healer",
        "damage": 10,
        "price": 150,
        "icon": "💊"
    },
    {
        "class": "healer",
        "damage": 12,
        "price": 180,
        "icon": "🍵"
    },
    {
        "class": "healer",
        "damage": 15,
        "price": 200,
        "icon": "🧬"
    },
    {
        "class": "healer",
        "damage": 8,
        "price": 120,
        "icon": "🌿"
    },
    {
        "class": "healer",
        "damage": 20,
        "price": 250,
        "icon": "🔮"
    },
    {
        "class": "healer",
        "damage": 18,
        "price": 230,
        "icon": "⚗️"
    },
    {
        "class": "healer",
        "damage": 14,
        "price": 190,
        "icon": "💉"
    },
    {
        "class": "healer",
        "damage": 11,
        "price": 160,
        "icon": "🧴"
    },
    {
        "class": "healer",
        "damage": 16,
        "price": 210,
        "icon": "🧪"
    }
]
const armours = [
    {
        "icon": "🪖",
        "type": "head",
        "price": 100,
        "armour": 10
    },
    {
        "icon": "🎩",
        "type": "head",
        "price": 150,
        "armour": 15
    },
    {
        "icon": "👑",
        "type": "head",
        "price": 200,
        "armour": 20
    },
    {
        "icon": "⛑️",
        "type": "head",
        "price": 120,
        "armour": 12
    },
    {
        "icon": "🧢",
        "type": "head",
        "price": 80,
        "armour": 8
    },
    {
        "icon": "🪖",
        "type": "head",
        "price": 90,
        "armour": 9
    },
    {
        "icon": "🛡️",
        "type": "body",
        "price": 300,
        "armour": 30
    },
    {
        "icon": "🦺",
        "type": "body",
        "price": 250,
        "armour": 25
    },
    {
        "icon": "🥋",
        "type": "body",
        "price": 350,
        "armour": 35
    },
    {
        "icon": "🧥",
        "type": "body",
        "price": 280,
        "armour": 28
    },
    {
        "icon": "👕",
        "type": "body",
        "price": 220,
        "armour": 22
    },
    {
        "icon": "👚",
        "type": "body",
        "price": 200,
        "armour": 20
    },
    {
        "icon": "👖",
        "type": "legs",
        "price": 200,
        "armour": 20
    },
    {
        "icon": "🥾",
        "type": "legs",
        "price": 180,
        "armour": 18
    },
    {
        "icon": "🩳",
        "type": "legs",
        "price": 220,
        "armour": 22
    },
    {
        "icon": "👢",
        "type": "legs",
        "price": 240,
        "armour": 24
    },
    {
        "icon": "👟",
        "type": "legs",
        "price": 160,
        "armour": 16
    },
    {
        "icon": "👠",
        "type": "legs",
        "price": 190,
        "armour": 19
    }
]

const enemies = [
    {
        "icon": "🐺",
        "health": 80,
        "damage": 15,
        "reward": 100
    },
    {
        "icon": "🦁",
        "health": 120,
        "damage": 25,
        "reward": 150
    },
    {
        "icon": "🐍",
        "health": 60,
        "damage": 10,
        "reward": 80
    },
    {
        "icon": "🐗",
        "health": 100,
        "damage": 20,
        "reward": 120
    },
    {
        "icon": "🦇",
        "health": 50,
        "damage": 8,
        "reward": 70
    },
    {
        "icon": "🦖",
        "health": 150,
        "damage": 30,
        "reward": 200
    },
    {
        "icon": "🦂",
        "health": 70,
        "damage": 12,
        "reward": 90
    },
    {
        "icon": "🐉",
        "health": 200,
        "damage": 35,
        "reward": 250
    },
    {
        "icon": "🦅",
        "health": 90,
        "damage": 18,
        "reward": 110
    },
    {
        "icon": "🐊",
        "health": 110,
        "damage": 22,
        "reward": 140
    },
    {
        "icon": "🐻",
        "health": 130,
        "damage": 28,
        "reward": 170
    },
    {
        "icon": "🦊",
        "health": 75,
        "damage": 14,
        "reward": 95
    },
    {
        "icon": "🐉",
        "health": 180,
        "damage": 33,
        "reward": 220
    },
    {
        "icon": "🦈",
        "health": 160,
        "damage": 32,
        "reward": 210
    },
    {
        "icon": "🦢",
        "health": 85,
        "damage": 16,
        "reward": 100
    }
]
