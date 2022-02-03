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
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        style={{
                            backgroundColor:
                                props.mode === "dark" ? "#13466e" : "white",
                            color: props.mode === "dark" ? "white" : "#042743",
                        }}
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleUpClick}
                >
                    Convert to Uppercase
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleLoClick}
                >
                    Convert to Lowercase
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleClClick}
                >
                    Clear
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleSenClick}
                >
                    Sentence
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
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
                    {
                        text.split(" ").filter((element) => {
                            return element.length !== 0;
                        }).length
                    }{" "}
                    words and {text.length} characters
                </p>
                <p>
                    {0.008 *
                        text.split(" ").filter((element) => {
                            return element.length !== 0;
                        }).length}
                    Minutes to read
                </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
