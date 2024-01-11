import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 199px;
    height: 334px;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    padding: 15px;
    align-items: start;
    justify-content: center;
    position: absolute;
    background-color: #80a7bb;
    left: 0;
    opacity: 35%;
    transition: 300ms ease-in all;
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


  &:hover {
    opacity: 1;
    
   
  }
  



   

  `;
