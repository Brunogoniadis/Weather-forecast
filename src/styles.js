import styled from 'styled-components';
import backgroundMainDiv from './assets/backgroundMainDiv.png'


export const MainScreen = styled.div`

    *button {
        cursor: pointer;
    }
    *a{
        text-decoration: none;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundMainDiv});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    .main-content{
        width: 100%;
        max-width: 1080px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 65px;

    }
    h1{
        width: 982px;
        font-weight: 700;
        color: black;
        font-size: 40px;
        color: white;
    }
    .regions-wrapper{
        display: grid;
        grid-template-columns: auto auto auto auto;
        justify-content: space-around;
        width: 982px;
        height: 390px;
        transition: width 2s;    
    }
`

