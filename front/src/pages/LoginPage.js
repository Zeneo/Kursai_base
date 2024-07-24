import React, {useEffect, useState} from 'react';
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import mainStore from "../store/mainStore";
import {socket} from "../plugins/sockets";


const LoginPage = () => {
    const nameRef = useRef()
    const imgRef = useRef()
    const nav = useNavigate()

    const [error, setError] = useState("")
    const {setUser} = mainStore()

    useEffect(() => {
        socket.on("loggedIn", data => {
            if(data.error) return setError(data.message)
            setUser(data.data)
            nav('/lobby')
        })
    }, [])

    function login() {
        const item = {
            image: imgRef.current.value,
            name: nameRef.current.value
        }

        if (item.image.length === 0 || item.name.length === 0) return

        socket.emit("login", item)
    }

    return (
        <div className="d-flex flex-column p-5">
            <input type="text" ref={imgRef} placeholder="photo url"/>
            <input type="text" ref={nameRef} placeholder="username"/>
            <h4>{error}</h4>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default LoginPage;