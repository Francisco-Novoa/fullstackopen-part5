import React from "react"

export default function Alert({ text, classes }) {
    return (
        <>
            {
                text !== null ?
                    <div className={`alert ${classes}`}>
                        <h4>{text}</h4>
                    </div>
                    : 
                    null
            }

        </>
    )
}