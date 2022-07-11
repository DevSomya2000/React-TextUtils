import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // Converts to Uppercase
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
        // Converts to Lowercase
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearClick = () => {
        // Clears the text 
        let newText = ''
        setText(newText)
    }

    const handleCamelClick = () => {
        // camelCaseTheText 
        let newText = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
        setText(newText)
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const textLength = (text) => {
        if(text==='') {
            return 0
        }
        else {
            return text.replace('\n',' ').trim().split(' ').length
        }
    }

    const [text,setText] = useState('')
  return (
    <>
    <div className='container' style={{color: props.mode === 'light'? 'black': 'white'}}>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'light'? 'white': 'grey',color: props.mode === 'light'? 'black': 'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCamelClick}>CamelCase Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container" style={{color: props.mode === 'light'? 'black': 'white'}}>
        <h2>Your text summary</h2>
        <p>{textLength(text)} words and {text.trim().length} characters</p>
        <p>{textLength(text) * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
