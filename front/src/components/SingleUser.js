import React from 'react';

const {socket} = require('../plugins/sockets')

const SingleUser = ({user}) => {

    function poke() {
        socket.emit("poke", user.socket_id)
    }

    return (
        <div className="p-2 border d-flex gap-3 justify-content-between">
            <div>
                <img src={user.image} alt=""/>
                {user.name}
            </div>

            <div className="poke" onClick={poke}>👆</div>

            {/*<button className="mt-3" onClick={poke}>Poke</button>*/}
        </div>
    );
};

export default SingleUser;