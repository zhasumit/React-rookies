import React from 'react'

import styles from "./Button.module.css" // Import the styles module

const Button = () => {
    return (
        <div>
            <button className={styles.button}>Click Me</button>
        </div>
    )
}

export default Button