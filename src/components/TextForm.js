import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercas was clicked' , text) 
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
        // console.log('Lowercase was clicked' , text) 
        let newText = text.toLowerCase()
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

    const [text,setText] = useState('Enter text Here')
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
    </div>
    <div className="container">
        <h2>Your text summary</h2>
        <p>{textLength(text)} words and {text.trim().length} characters</p>
        <p>{textLength(text) * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
