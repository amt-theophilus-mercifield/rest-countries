import  { createGlobalStyle } from 'styled-components'  

export const theme = {
    colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlueBg: 'hsl(207, 26%, 17%)',
        veryDarkBlueTxt: 'hsl(200, 15%, 8%)',
        darkGrayInput: 'hsl(0, 0%, 52%)',
        veryLightGrayBg: 'hsl(0, 0%, 98%)',
        whiteTxt: 'hsl(0, 0%, 100%)',
    },
    fonts: {
        primary: 'Nunito Sans', 
    },
    fontSizes: {
        small: '14px',
        medium: '16px',
    },
}

export const GlobalStyle = createGlobalStyle``;
