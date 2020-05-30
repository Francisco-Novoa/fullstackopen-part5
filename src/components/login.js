import React, { useState } from "react"
import ControledInput from "./ControledInput"

export default function Login({ handleButton }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleButton(
                {
                    username,
                    password
                },
                setUsername,
                setPassword
            )
        }}>
            <div>
                <ControledInput
                    name="username"
                    label="Username"
                    placeholder="Add your Username"
                    type="text"
                    value={username}
                    handleChange={setUsername}
                />
                <ControledInput
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Add your Password"
                    value={password}
                    handleChange={setPassword}
                />
            </div>
            <div className="toggle-footer">
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>

    )
}