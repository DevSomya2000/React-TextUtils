import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // Converts to Uppercase
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to UpperCase', 'success')
    }

    const handleLoClick = () => {
        // Converts to Lowercase
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to LowerCase', 'success')
    }

    const handleClearClick = () => {
        // Clears the text 
        let newText = ''
        setText(newText)
        props.showAlert('Cleared the text', 'success')
    }

    const handleCamelClick = () => {
        // camelCaseTheText 
        let newText = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
        setText(newText)
        props.showAlert('Converted to CamelCase', 'success')
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copied the text', 'success')
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('Removed all extra spaces from the text', 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // const textLength = (text) => {
    //     if(text==='') {
    //         return 0
    //     }
    //     else {
    //         let newText = text.replace('\n',' ').trim().split(/[ ]+/).join(' ')
    //         console.log(newText)
    //         return newText.split(' ').length
    //     }
    // }

    const [text,setText] = useState('')
  return (
    <>
    <div className='container' style={{color: props.mode === 'light'? '#042743': 'white'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'light'? 'white': '#13466e',color: props.mode === 'light'? '#042743': 'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleCamelClick}>CamelCase Text</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container" style={{color: props.mode === 'light'? 'black': 'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.trim().length} characters</p>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
