// import {createGlobalStyle} from  "styled-components";
import {createGlobalStyle} from "styled-components"


export const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    box-sizing: border-box;
    padding:0;
}
body{
    background: ${({theme})=>theme.background};
    color: ${({theme})=>theme.textColor};
    transition: all 0.25s linear;
}
.canvas{
    display: grid;
    min-height: 100vh;
    grid-auto-flow: row;
    grid-template-flow: row;
    grid-template-row: auto 1fr auto;
    gap: 0.5rem;
    padding: 2rem;
    width: 100vw;
    align-items: center;
    text-align: center;
}

.type-box{
    display:block;
    max-width: 1000px;
    height: 140px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.words{
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
    color: ${({theme})=>theme.typeBoxText};
}

.word{
    margin:5px;
    padding-right:2px;
}

.hidden-input{
    opacity:0;
}

.current{
    border-left: 1px solid red;
    animation : blinking 2s infinite;
    animation-timing-function: ease;
    @keyframes blinking{
        0%{border-left-color: white;}
        25%{border-left-color: black;}
        50%{border-left-color: white;}
        75%{border-left-color: black;}
        100%{border-right-color: green;}
    }

}

.current-right{
    border-right: 1px solid red;
    animation : blinkingRight 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingRight{
        0%{border-right-color: white;}
        25%{border-right-color: black;}
        50%{border-right-color: white;}
        75%{border-right-color: black;}
        100%{border-right-color: green;}
    }
}

.correct{
    color:green;
}
.incorrect{

    color: red;
}

.upper-menu{
    display: flex;
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    font-size: 1.35rem;
    justify-content: space-between;
    padding: 0.5rem;
}

.modes{
    display: flex;
    gap:0.4rem;     
}

.time-mode:hover{
    color:green;
    cursor: pointer;
}

.footer{
    width:1000px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    color: ${({theme})=>theme.textColor};
}

.stats-box{
    display: flex;
    width:1000px;
    height:auto;
    margin-left: auto;
    margin-rigft: auto;
}

.left-stats{
    width: 30%;
    padding: 30px;
}

.right-stats{
    width: 70%;
}

.title{
    font-size: 20px;
    color: ${({theme})=>theme.textBoxColor};
}

.subtitle{
    font-size : 30px;
}

.header{
    width:1000px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
}
`