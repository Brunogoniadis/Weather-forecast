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
    position: relative;
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
    .title-container{
        width: 982px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        gap: 15px;

        h1{
            font-weight: 700;
            color: black;
            font-size: 40px;
            color: white;
        }   
        .icon{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            transition: 500ms all ease;

            &:hover{

                background-color: grey;
            }

            &:active{
                transform: scale(0.75);
            }
        }
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

