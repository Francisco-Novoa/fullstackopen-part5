import React from "react"

export default function ControledInput({ handleChange, value, label, name, placeholder, type }) {
    return (
        <div className="input-form">
            <span>{label}</span>
            <input
                name={name}
                onChange={({target}) => { handleChange(target.value)}}
                value={value}
                type={type}
                placeholder={placeholder} />
        </div>
    )
}