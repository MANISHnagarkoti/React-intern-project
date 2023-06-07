import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Navbar = () => {
    return (
        <Container>
           <img src="/logo.png" alt="" />  <Link to={"/"} > <div className='title'>Home</div> </Link>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
width: 100%;
padding: 10px 30px;
height: 60px;
color:  white;
display: flex;
align-items: center;
justify-content: space-between;



img{

width: 100px;

}


.title{

color: #da2f68;
cursor: pointer;
border: 1px solid #da2f68;
padding: 10px;
width: 70px;
border-radius: 20px;
display: flex;
justify-content: center;

}


`