import React, {useState} from 'react'
// import { isCompositeComponentWithType } from 'react-dom/test-utils'

export default function About(props) {

// const [myStyle,setMyStyle] = useState({
//     color : "black",
//     backgroundColor : "white"
// });

// const [btnText,setbtnText] = useState("Enable Dark Mode");


const myStyle={
    color : props.mode==="dark"?"white":"black",
    backgroundColor : props.mode==="dark"?"rgb(36, 74, 104)":"white"
}


// const toggleStyle = ()=>{

// if(myStyle.backgroundColor=== "white")
// {
//     setMyStyle({
//         color:"white",
//         backgroundColor:"black",
//         // border : "1px solid white"
//     })
//     setbtnText("Enable Light Mode");
// }else{
//     setMyStyle({
//         color:"black",
//         backgroundColor:"white"
//     })
//     setbtnText("Enable Dark Mode")
// }



// }

    // let myStyle={
    //     color : "white" ,
    //     backgroundColor : "black"
    // };
    return (
        <div classname="container" style={{ color : props.mode==="dark"?"white":"black",backgroundColor : props.mode==="dark"?"rgb(4 39 67)":"white"}}>
            
            <h1 className="my-3 mx-3 py-2">About Us</h1>
            <div className="accordion mx-3" style={myStyle} id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong>Analyze your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                       TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
            </div> */}
        </div>
    )
}
