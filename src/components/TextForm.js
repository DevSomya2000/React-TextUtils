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
        var text = document.getElementById('myBox')
        text.select();
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

    const textLength = (text) => {
        if(text==='') {
            return 0
        }
        else {
            return text.replace('\n',' ').trim().split(' ').length
            // let count = 0
            // let last_was_space = 1
            // for (let i = 0;text[i] !== '\0';i++)
            // {
            //     if (text[i] === ' ')
            //     {
            //         if (!last_was_space) 
            //         {
            //             count++; // Only count when last char wasn't a space
            //             last_was_space = 1;
            //         }
            //     }
            //     else
            //     {
            //         // Update flag (unless this char is a newline)
            //         if (text[i] !== '\n') last_was_space = 0;
            //     }
            // }
            // if (!last_was_space) ++count; // Count the last word if there wasn't a space before
            // console.log(count)
            // return(count)
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
