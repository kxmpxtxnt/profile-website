import * as React from 'react'
import {useState} from "react";
import './style/fontstyle.css';
import './style/profile/profile.css'

function profilePage() {

  const [darkMode, setDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)

  const changeColorTheme = () => {
    setDarkMode(!darkMode)
  };

  const colorMode = {
    backgroundColor: darkMode ? "#2D2424" : "#E0C097",
    color: darkMode ? "#E0C097" : "#2D2424",
  }

  document.body.style.backgroundColor = colorMode.backgroundColor
  document.body.style.color = colorMode.color

  const enableHover = () => {
    setSublineText(githubLine)
  };

  const disableHover = () => {
    setSublineText(defaultSubline)
  };

  const defaultSubline = <div>I'm a german ð©ðª <u>backend developer</u> ð§ð½<b onMouseEnter={enableHover}> â [hover]</b>
  </div>

  const githubLine = <a style={colorMode} href={"https://github.com/kxmpxtxnt"}>Checkout my <u>Github</u> ð§ð½âð»<b onMouseLeave={disableHover}> â [click]</b></a>

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [getSublineText, setSublineText] = useState(defaultSubline)

  return (
    <div className={"profile"}>
      <div className={"header"}>
        <div className={"headline"}>
          <b>Hey ð - my name is <u>Paul</u>
            <a style={colorMode} href={"https://upload.wikimedia.org/wikipedia/commons/7/70/En-us-Paul.oga"}> â
              [paÊÌ¯l]</a></b>
        </div>
        <div className={"subheadline"}>
          {getSublineText}
        </div>
      </div>
    </div>
  );
}

export default profilePage
