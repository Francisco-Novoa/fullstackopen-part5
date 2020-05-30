import React, { useState, useImperativeHandle } from "react"

const Togglable = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)
    const hideWhenVisible = { display: visible ? "none" : "" }
    const showWhenVisible = { display: visible ? "" : "none" }

    useImperativeHandle(ref, () => { return { setVisible } })

    return (
        <div className="toggle">
            <div className="toggle-header">
                <div style={showWhenVisible}>
                    <h3>{props.text}</h3>
                </div>
                <div>
                    <button onClick={() => setVisible(!visible)} style={showWhenVisible}>
                        X
                    </button>
                </div>
            </div>
            <div >
                <button
                    className="button"
                    onClick={() => setVisible(!visible)}
                    style={hideWhenVisible}>
                    {props.text}
                </button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
            </div>
        </div>
    )
})

export default Togglable