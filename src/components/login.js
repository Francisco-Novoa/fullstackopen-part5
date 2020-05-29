import React from "react"
import ControledInput from "./ControledInput"

export default function Login({ username, password, setPassword,setUsername, handleButton, text }) {

    return (
        <form onSubmit={(e) => { e.preventDefault(); console.log("asdf"); handleButton() }}>
            <div className="label">
                <h3>{text}</h3>
            </div>
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
            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>

    )
}