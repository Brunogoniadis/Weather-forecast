import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  width: 240px;
  height: 452px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: start;
  justify-content: center;
  position: absolute;
  background-color: #80a7bb;
  left: 0;
  transform: translate(-12vw);
  transition: all ease-in-out 1s;
  background-color: transparent;
 
  .form-citys {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        gap: 15px;
        opacity: 0;
        transition: all ease-in-out 1s;

        .submit{
          height: 40px;
          width: 175px;
          background-color: #203540;
          color: white;
          border: 1px solid white;
          border-radius: 5px
        }
        .row-city{
        display: grid;
        grid-template-columns: 20% 40% 40%;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
          input{
            width: 66px;
            height: 50px;
          }
      }
    }

  
  &::after {
    content: ' ';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #A4A4A4;
    position: absolute;
    right: -25px; 
    top: 50%;
    transform: translate(0, -50%);
    transition: all ease-in-out 1s;

  }

  &:hover {
    background-color: #80a7bb;

    transform: translate(0vw);
    
    .form-citys {
      opacity: 1;
    }

    &::after {
        background-color: transparent;

    }
  }
  



   

  `;
