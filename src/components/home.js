import React, { useState } from 'react'

export default function Home(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        //console.log("handling UpClick");
        setText(text.toUpperCase());
    }

    const handleLowClick = () => {
        //console.log("handling UpClick");
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        //console.log("handling onChange");
        setText(event.target.value);
    }

    const handleClear = (event) => {
        //console.log("handling onChange");
        setText("");
    }

    const handleCopy = (event) => {
        navigator.clipboard.writeText(text);
    }

    const handlePaste = (event) => {
        navigator.clipboard.readText().then((clipText) => (setText(clipText)));
    }

    const searchword = () => {
        let text_to_search = document.getElementById("search").value;
        console.log(text_to_search.length);
        let para = document.getElementById("preview_text");
        text_to_search = text_to_search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let pattern = new RegExp(`${text_to_search}`, "gi");

        if (text_to_search.length >= 1) {
            para.innerHTML = para.textContent.replace(pattern, match => `<mark>${match}</mark>`);
        }
        else {
            para.innerHTML = text;
        }

    }

    return (
        <div className='form-group mx-4 p-1 pb-5 '>
            <div className="d-flex justify-content-between mt-5 ">

                <div className='w-75 '>
                    <div className='d-flex justify-content-between'>
                        <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enter Text to Utilize</h3>
                        <input className='border border-success rounded w-25 m-2' type="text" id='search' placeholder='search words' onChange={searchword} />
                    </div>
                    <textarea placeholder='Enter text here.' value={text} onChange={handleOnChange} className={`${props.mode === 'light' ? 'text-dark text_area_color_light' : 'text-light text_area_color_dark'}`} id="exampleFormControlTextarea1" rows="10"></textarea>
                    <button onClick={handleUpClick} type="button" className={`btn btn-${props.mode === 'light' ? 'warning' : 'info'} mx-1`}>Upper Case</button>
                    <button onClick={handleLowClick} type="button" className={`btn btn-${props.mode === 'light' ? 'warning' : 'info'} mx-1`}>Lower Case</button>
                    <button onClick={handleCopy} type="button" className={`btn btn-${props.mode === 'light' ? 'warning' : 'info'} mx-1`}>Copy to Clip board</button>
                    <button onClick={handlePaste} type="button" className={`btn btn-${props.mode === 'light' ? 'warning' : 'info'} mx-1`}>Paste from Clip board</button>
                    <button onClick={handleClear} type="button" className="btn btn-danger  mx-1">Clear</button>

                </div>
                <div className='w-25 '>
                    <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'} m-2`}>Summary</h3>
                    <p className={`text-${props.mode === 'light' ? 'dark' : 'light'} d-flex`}><p className='display-5 m-1'>{text.split(/\n/).filter((element) => {return element.length !== 0}).length}</p> <p className='h4 align-self-end'>Lines</p></p>
                    <p className={`text-${props.mode === 'light' ? 'dark' : 'light'} d-flex`}><p className='display-5 m-1'>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length}</p> <p className='h4 align-self-end'>Words</p></p>
                    <p className={`text-${props.mode === 'light' ? 'dark' : 'light'} d-flex`}><p className='display-5 m-1'>{text.length}</p> <p className='h4 align-self-end'>Characters</p> </p>
                    <p className={`text-${props.mode === 'light' ? 'dark' : 'light'} d-flex`}> <p className='display-5 m-1'>{(0.008 * text.split(" ").length).toFixed(2)}</p> <p className='h4 align-self-end'>Miniutes to Read</p></p>
                </div>


            </div>



            <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'} my-2`}>Preview</h3>
            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} id='preview_text'>{text}</p>
        </div>
    )
}
