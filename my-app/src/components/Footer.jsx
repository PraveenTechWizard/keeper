import React from "react"

function Footer(){
        const Year = new Date().getFullYear()
    return(
        <footer className="footer">
            {<p> © Copyrights on {Year}</p>}
        </footer>
    )


}


export default Footer