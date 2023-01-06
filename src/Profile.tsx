import * as React from 'react'
import {useState} from "react";
import './style/fontstyle.css';
import './style/profile/profile.css'

let isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

export const colorModeStyle = {
    backgroundColor: isDarkMode ? "#2D2424" : "#E0C097",
    color: isDarkMode ? "#E0C097" : "#2D2424",
}

function profilePage() {
    document.body.style.backgroundColor = colorModeStyle.backgroundColor
    document.body.style.color = colorModeStyle.color

    const enableHover = () => {
        setSublineText(githubLine)
    };

    const disableHover = () => {
        setSublineText(defaultSubline)
    };

    const defaultSubline = <div>I'm a german 🇩🇪 <u>backend developer</u> 🧑🏽 <b onMouseEnter={enableHover}> → [hover]</b></div>
    const githubLine = <a style={colorModeStyle} href={"https://github.com/kxmpxtxnt"}>Checkout my <u>Github</u> 🧑🏽‍💻 <b onMouseLeave={disableHover}>→ [click]</b></a>

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [getSublineText, setSublineText] = useState(defaultSubline)


    return (
        <div className={"profile"}>
            <div className={"header"}>
                <div className={"headline"}>
                    <b>Hey 👋 - my name is <u>Paul</u> <a style={colorModeStyle} href={"https://upload.wikimedia.org/wikipedia/commons/7/70/En-us-Paul.oga"}>→ [paʊ̯l]</a></b>
                </div>
                <div className={"subheadline"} >
                    {getSublineText}
                </div>
            </div>
        </div>
    );
}

export default profilePage
