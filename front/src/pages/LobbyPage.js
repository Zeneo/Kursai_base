import React, {useEffect, useState} from 'react';
import mainStore from "../store/mainStore";
import {socket} from "../plugins/sockets";
import SingleUser from "../components/SingleUser";

const LobbyPage = () => {

    const {user} = mainStore()

    const [users, setUsers] = useState([])
    const [pokedBy, setPokedBy] = useState("")

    useEffect(() => {
        socket.on("info", info => {
            info = info.filter(x => x.name !== user.name)
            setUsers(info)
        })

        socket.on("gotPoked", username => {
            setPokedBy(username)
        })

    }, [])


    function joinRoom(name) {
        socket.emit("joinRoom", name)
    }

    function leaveRoom(name) {
        socket.emit("leaveRoom", name)
    }

    return (

        <div>
            <div className="d-flex justify-content-between">
                {user && <div className="d-flex">
                    <img src={user.image} alt=""/>
                    <h4>{user.name}</h4>
                </div>}


                <div>
                    <h3>Poked by: {pokedBy}</h3>
                </div>
            </div>


            <div className="p-5 d-flex gap-2">

                <div className="grow1 p-2 border d-flex gap-3 flex-column">
                    <button onClick={() => joinRoom("room1")}>Join Room 1</button>
                    {/*<button onClick={() => sendMessage("room1", "to room1 msg")}>Send message</button>*/}
                    <button onClick={() => leaveRoom("room1")}>Leave Room</button>
                </div>

                <div className="grow1 p-2 border d-flex gap-3 flex-column">
                    <button onClick={() => joinRoom("room2")}>Join Room 2</button>
                    {/*<button onClick={() => sendMessage("room2", "to room2 msg")}>Send message</button>*/}
                    <button onClick={() => leaveRoom("room2")}>Leave Room</button>
                </div>

                <div className="grow1 p-2 border d-flex gap-3 flex-column">
                    <button onClick={() => joinRoom("room3")}>Join Room 3</button>
                    {/*<button onClick={() => sendMessage("room3", "to room3 msg")}>Send message</button>*/}
                    <button onClick={() => leaveRoom("room3")}>Leave Room</button>
                </div>

            </div>

            <div className="roomInside d-flex flex-wrap align-items-start gap-3">
                {users.map(x => <SingleUser user={x} key={x.socket_id}/>)}
            </div>

        </div>
    );
};

export default LobbyPage;