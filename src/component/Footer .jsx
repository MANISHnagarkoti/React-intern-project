import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { styled } from 'styled-components';

const Footer = () => {
    return (
        <Conatiner>


            <h1>Stay tune for More</h1>


            <div className='icon-wrapper'>     <   TwitterIcon  className='icon' />   <  InstagramIcon  className='icon'/>   <  YouTubeIcon  className='icon'/>  <  RedditIcon  className='icon'/>   <  PinterestIcon  className='icon'/> </div>



        </Conatiner>
    )
}

export default Footer
const Conatiner = styled.div`
text-align: center;
color: white;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;


h1{

    font-family: 'Josefin Sans', sans-serif;
}

.icon-wrapper{

margin-top: 20px;
width: 200px;
display: flex;
justify-content: space-between;


.icon{

    color:#da2f68 ;
    cursor: pointer;
}
}
`
