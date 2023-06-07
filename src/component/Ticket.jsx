import React from 'react'
import { styled } from 'styled-components'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';

const Ticket = () => {
  return (
    <Container>
      <ConfirmationNumberOutlinedIcon style={{ fontSize: "30px", color: "#d64b62" }} />

      <div>Book Ticket</div>
    </Container>
  )
}

export default Ticket

const Container = styled.div`

width: 150px;
height: 50px;
border: 2px solid #d64b62;
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 10px;
border-radius: 40px;
color: #d64b62;
cursor: pointer;
transition: 0.3s;
margin-bottom: 2px;

&:hover{

transform: scale(1.04);

  
}

`