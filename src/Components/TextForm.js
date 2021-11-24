import React ,{useState} from 'react'



export default function TextForm(props) {
    const [text,setText]=useState("Enter text here");
    // text="ABABABA"; //wrong way to update state of text variable this is not allowed in react it'll throw an Error
    // setText("text Changed"); //correct way to change the state of text variable using an updation function (here >>setText).

    const handleUpClick=()=>{
        console.log("Uppercase button was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick=()=>{
        console.log("LowerCase button was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClearText=()=>{
        console.log("Clear Text Button was clicked");
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }

    const handleKebabCase=()=>{
        let str = text.split(" ");
        let newText="";

        let i=1;
        str.forEach((word)=>{
           if(i<str.length)
           {
            newText+=word+"-";
           }else{
               newText+=word;
           }
          
           i++;
        })     
        setText(newText);
        props.showAlert("Converted to KebabCase","success");
    }


    const handleProperCase=()=>{
        let str = text.split(" ");
        let newText="";

        let i=1;
        str.forEach((word)=>{
            let properWord= word.charAt(0).toUpperCase() + word.slice(1);
           if(i<str.length)
           {
            
            newText+=properWord+" ";
           }else{
               newText+=properWord;
           }
          
           i++;
        })     
        setText(newText);
        props.showAlert("Converted to ProperCase","success");
    }

    const handleCopyText=()=>{
        // var text=document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied!","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        newText=newText.join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed!","success");
    }

    
    const handleOnChange=(event)=>{
        console.log("onChange handled");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor : props.mode==='dark'?'#27608e':'white',
        color : props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-1" disabled={text.length===0} onClick={handleKebabCase}>Kebab Case</button>
            <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleProperCase}>Proper Case</button>
        
            <button className="btn btn-primary my-1" disabled={text.length===0} onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-3" disabled={text.length===0} onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
            <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read</p>
            <h2>Preview</h2>
             <p>{text.length>0?text : "Nothing to Preview!"}</p>
        </div>
        </>
    )
}
