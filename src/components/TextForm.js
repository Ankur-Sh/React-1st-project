import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLoClick = () => {
        // console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleClClick = () => {
        let newText = "";
        setText(newText);
    };

    const handleSenClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    };
    const handleRemSpClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleUpClick}
                >
                    Convert to Uppercase
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleLoClick}
                >
                    Convert to Lowercase
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleClClick}
                >
                    Clear
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleSenClick}
                >
                    Sentence
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleRemSpClick}
                >
                    Remove Space
                </button>
            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length}Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
