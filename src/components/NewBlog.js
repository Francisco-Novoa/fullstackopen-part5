import React, { useState } from "react"
import ControledInput from "./ControledInput"

export default function NewBlog({ handleButton }) {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleButton(
                    {
                        title,
                        author,
                        url
                    },
                    setTitle,
                    setAuthor,
                    setUrl)
            }}>
            <div>
                <ControledInput
                    name="title"
                    label="Title:"
                    placeholder="Title goes here"
                    type="text"
                    value={title}
                    handleChange={setTitle}
                />

                <ControledInput
                    name="author"
                    label="Author:"
                    placeholder="Author goes here"
                    type="text"
                    value={author}
                    handleChange={setAuthor}
                />

                <ControledInput
                    name="url"
                    label="Url:"
                    placeholder="Url goes here"
                    type="text"
                    value={url}
                    handleChange={setUrl}
                />
            </div>
            <div className="toggle-footer">
                <button type="submit">
                    Submit
                </button>
            </div>
        </form >
    )
}