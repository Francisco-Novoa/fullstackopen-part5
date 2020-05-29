import React from "react"

export default function Alert({ message, classes }) {
    return (
        <>
            {
                message !== null ?
                    <div className={`alert ${classes}`}>
                        <h1>{message}</h1>
                    </div>
                    : 
                    null
            }

        </>
    )
}