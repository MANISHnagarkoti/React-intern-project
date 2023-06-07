import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body{

  background-color: rgba(2,0,36,1);
overflow-x: hidden;


}

  *{
 
    margin: 0;

    padding: 0;
   
    font-family: 'Poppins', sans-serif;

    box-sizing: border-box;

    text-decoration: none;

    outline: none;

    font-weight: 400;
  }

  ::-webkit-scrollbar-thumb{
  
  background-color: rgb(60, 60, 60,0.7);
  


  }

  /* ::-webkit-scrollbar-track {

background-color: black;

}

::-webkit-scrollbar-thumb {

background-color: rgb(60, 60, 60, 0.7);



}

::-webkit-scrollbar {

width: 0px;
}
 */













`;



export default GlobalStyle;