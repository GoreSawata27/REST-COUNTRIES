import React, { useContext } from 'react'
import { ThemeContext } from "./Contex/ThemeContex";

export default function Head() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };
  return (
    <>
      <nav className={`navbar  `}  >
        <div className={`heading ${darkMode ? 'dark-text' : 'light-text'} `} >
          Where in the World?
        </div>
        <div className={`mode ${darkMode ? 'dark-text' : 'light-text'} `}>
          <span onClick={onClick} >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-moon-fill ${darkMode ? 'dark-text' : 'light-text'} `} viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            </svg>
            <span className='hid'>Dark Mode</span> 
          </span>
          {/* Dark Mode */}
        </div>
      </nav>

    </>
  )
}
