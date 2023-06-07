import React from 'react'
import { styled } from 'styled-components'

const Btn = () => {
  return (
    <Conatiner>
      Let's Start
    </Conatiner>
  )
}

export default Btn

const Conatiner = styled.div`
background: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
width: 150px;
height: 50px;
border-radius: 20px;
margin-top: 30px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
font-size:18px;
transition: 0.2s;



&:hover{

transform: translateY(-5px);

}

`