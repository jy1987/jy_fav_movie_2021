import {createGlobalStyle} from "styled-components"; 
import reset from "styled-reset";

const globalStyles = createGlobalStyle `
    ${reset};
    a { 
        text-decoration: none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        background-color:black;
        color:white;
        font-size : 14px;
        padding-top: 50px;
        font-family : --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    `;

export default globalStyles;