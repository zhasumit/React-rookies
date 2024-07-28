import React from 'react'

const BtnInline = () => {
    // styles are taken as js object and then passed as variable in the inline CSS part 
    // we can give the CSS inline then and there in the element tags
    const styles = {
        border: "none",
        padding: ".5em 1em",
        backgroundColor: "lightgreen",
        color: "white",
        borderRadius: ".3em",
        display: "block"
    }

    return (
        <button style={styles}>
            Inline Button
        </button>
    )
}

export default BtnInline