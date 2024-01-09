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
/*   transform: translate(-12vw);
  transition: all ease-in-out 1s;
  background-color: transparent;
 */
  &::after {
    content: ' ';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #80a7bb;
    position: absolute;
    right: -25px; 
    top: 50%;
    transform: translate(0, -50%);
    transition: all ease-in-out 1s;

  }

  &:hover {
    background-color: #80a7bb;

    transform: translate(0vw);
    
    &::after {
        background-color: transparent;

    }
  }
  
    .form-citys {

        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        width: 100%;
        gap: 15%;
    
        .submit{
            position: absolute;
            bottom: -25px;

        
    }
    }

    .column {
        width: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .input-group {
        margin-bottom: 10px;
        width: 35px;
        input{
            width: 30px;
            height: 40px;
        }
    }

  `;