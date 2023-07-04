import React, { useState } from 'react'

export default function Textform(props) {

    const changeup = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if(text === "")
        {
            props.show("Enter the text first.")
            props.setResult('warning');
        }
        else
        {
            props.show("Success ! Text is changed to Uppercase.")
            props.setResult('success');
        }
    }

    const changelow = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(text == "")
        {
            props.show("Enter the text first.")
            props.setResult('warning');
        }
        else
        {
            props.show("Success ! Text is changed to Lowercase.");
            props.setResult('success');
        }
    }

    const copy = () => {

        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        if(text == "")
        {
            props.show("Enter the text first.")
            props.setResult('warning');
        }
        else
        {
            props.show("Success ! Text is copied to your Clipboard.");
            props.setResult('success');
        }
    }

    const extraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if(text == "")
        {
            props.show("Enter the text first.")
            props.setResult('warning');
        }
        else
        {
           props.show("Success ! Extra Spaces are Removed.");
           props.setResult('success');
        }
    }

    const clear = () => {
        let newText = "";
        setText(newText);
        if(text == "")
        {
            props.show("Enter the text first.")
            props.setResult('warning');
        }
        else
        {
            props.show("Success ! Text is cleared.");
            props.setResult('success');
        }
    }

    const change = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")

    return (
        <>
            <div className='container my-4'>
                <h1 className='my-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" name="mybox" value={text} id="mybox" rows="8" onChange={change} placeholder='Enter Text Here'>

                    </textarea>
                </div>

                <button className='btn mx-2' onClick={changeup}>Convert to Uppercase</button>

                <button className='btn mx-2' onClick={changelow}>Convert to Lowercase</button>

                <button className='btn mx-2' onClick={copy}>Copy To Clipboard</button>

                <button className='btn mx-2' onClick={extraspace}>Remove Extra Spaces</button>

                <button className='btn mx-2' onClick={clear}>Clear Text</button>
            </div>

            <div className="container my-6">

                <h1 className='my-2'>Text Counter : </h1>
                <ul>
                    <li><h4>There are {((text.split(".").length) - 1 )+((text.split("?").length) - 1 )+((text.split("!").length) - 1 )} Sentences.</h4></li>
                    <li><h4>There are {(text.split(" ").length) - 1} Words.</h4></li>
                    <li><h4>There are {text.length} Characters <small>(with spaces)</small>.</h4></li>
                </ul>


            </div>
        </>
    )
}