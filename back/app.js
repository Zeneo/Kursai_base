const express = require("express")
const app = express()
const cors = require("cors")
const mainRouter = require("./routers/mainRouter")
const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_KEY)
    .then(() => {
        console.log("DB CONNECT SUCCESS")
    }).catch(err => {
    console.log("ERROR")
    console.log(err)
})

// app.use(cors())
// app.use(express.json())
//
// app.use("/", mainRouter)
//
// app.listen(2001)


const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: "http://localhost:3000"
    }
});

const users = []

const usersInRoom = (roomName)=> {
    const room_users = io.of('/').adapter.rooms.get(roomName);
    if(!room_users) return

    const usersIdArr = Array.from(room_users)
    const roomUsers = []

    usersIdArr.forEach(id => {
        const current = users.find(x => x.socket_id === id)

        if(current) {
            roomUsers.push(current)
        }
    })

    io.to(roomName).emit("info", roomUsers);
}

io.on("connection", (socket) => {

    socket.on("login", data => {
        if(users.find(x => x.name === data.name)) {
            return socket.emit("loggedIn", {error: true, message: "Username exists", data: null})
        }

        const user = {
            ...data,
            socket_id: socket.id
        }
        users.push(user)

        socket.emit("loggedIn", {error: false, message: null, data: user})
    })

    socket.on("joinRoom", name => {
        for (let room of socket.rooms) {
            if (room !== socket.id) {
                socket.leave(room);
                usersInRoom(room)

            }
        }

        socket.join(name)
        usersInRoom(name)
    })

    socket.on("leaveRoom", name => {
        socket.leave(name)
        usersInRoom(name)
        socket.emit("info", [])
    })

    socket.on("poke", socket_id => {
        const currentUser = users.find(x => x.socket_id === socket.id)
        io.to(socket_id).emit("gotPoked", currentUser.name)
    })


});

io.listen(2000);



