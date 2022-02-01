import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    };
    const handleLoClick = () => {
        // console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    };
    const handleClClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("TextArea Cleared", "success");
    };

    const handleSenClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Converted to Sentence!", "success");
    };
    const handleRemSpClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed!", "success");
    };
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div
                className="container"
                style={{
                    color: props.mode === "dark" ? "white" : "#042743",
                }}
            >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        style={{
                            backgroundColor:
                                props.mode === "dark" ? "grey" : "white",
                            color: props.mode === "dark" ? "white" : "#042743",
                        }}
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
            <div
                className="container"
                style={{
                    color: props.mode === "dark" ? "white" : "#042743",
                }}
            >
                <h2>Your text summary</h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length}Minutes to read</p>
                <h2>Preview</h2>
                <p>
                    {text.length > 0
                        ? text
                        : "Enter something in the textbox to preview it here"}
                </p>
            </div>
        </>
    );
}
