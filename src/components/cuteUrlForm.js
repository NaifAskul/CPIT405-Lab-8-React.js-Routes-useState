import React, { useState } from "react";

const CuteUrlForm = () =>{

    const [Longurl,SetLongUrl] = useState("")
    const [shortCode,SetShortCode] = useState("")
    const [shorturl,SetShortUrl] = useState("")


    function handleClick(){
        const id = Math.random().toString(36).substring(5)

        if(shortCode && shortCode.length > 0){

             SetShortUrl(`https://example.com/${shortCode}`)

        }else{
            SetShortUrl(`https://example.com/${id}`)
        }

    }

    return(

        <>
        <h1>Cute Url</h1>
        
           <div className="Form">

          

           <label htmlFor="LongUrl">Long Url: </label>
           
           <input id="LongUrl" type="text" value={Longurl} placeholder="Type a Url"
            onChange={(e) => SetLongUrl(e.target.value)}
           />

           <label htmlFor="shortCode">Short Code: </label>
          
           <input id="shortCode" type="text" placeholder="Type some code"
             onChange={(e) => SetShortCode(e.target.value)}
           />

           <button className="shortenButton" onClick={handleClick}>Shorten</button>

           <div className="Result">

            <label htmlFor="shortUrl">Short Url: </label>

            <p id="shortUrl">{shorturl}</p>

            </div>
            
           </div>

           </>

    )

}

export default CuteUrlForm