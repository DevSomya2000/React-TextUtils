import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercas was clicked' , text) 
        let newText = text.toUpperCase()
        setText(newText)
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

    const [text,setText] = useState('Enter text Here')
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    </div>
    <div className="container">
        <h1>Your text summary</h1>
        <p>{textLength(text)} words and {text.trim().length} characters</p>
        <p>{textLength(text) * 0.008} Minutes read</p>
    </div>
    </>
  )
}
