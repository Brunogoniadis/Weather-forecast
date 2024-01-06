import styled, { keyframes } from 'styled-components';
import backgroundComponent from '../../assets/backgroundComponent.png'


const rotateAnimation = keyframes`
  0% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const MainAnimation = keyframes`
  0% 
  {
    transform: scaleX(1);
    opacity: 0;
  }
  50%{
    transform: scaleX(-1);

  }
  100% {
    transform: scaleX(1);

  }
`;


export const Region = styled.div`
  width: 214px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #0014ce;
  color: white;
  transform: scaleX(1);

  background-image: url(${backgroundComponent});
  background-position: center;
  background-size: cover;
  border: 2px solid white;
  
  
  animation: ${MainAnimation} 0.8s normal;


  .name-container {
    height: 15%;
    width: 100%;
    border-radius: 8px 8px 0px 0px;
    border-bottom: 2px solid white;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;

  }

  .center-container {
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .icon-type {
      width: 110px;
      height: 110px;
      animation: ${rotateAnimation} 2s normal;
      
    }

    .temps-wrapper {
        gap: 10px;
        display: flex;
        height: 35px;


      .temp-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 90px;
        height: 55px;

        .text-container-1{
            font-size: 16px;
            font-weight: bold;
        }
        .text-container-2{
            font-size: 32px;
            font-weight: bold;
        }
      }
    }
  }

  .spec-container {
    height: 15%;
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    border-top: 2px solid white;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #0BBDD6;
    
  }
`;
