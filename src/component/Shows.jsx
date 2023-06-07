import React from 'react'
import useFetch from '../api/useFetch'
import axios from 'axios'
import { styled } from 'styled-components'
import Score from './Score'
import { Link } from 'react-router-dom'



const Shows = () => {


    const { data, laoding } = useFetch("/shows")


    console.log(data)

    return (
        <Container>





                {
                    data && data?.slice(0, 30).map((e) => {

                        return (

                            <Link key={e.id} to={`/detail/${e.id}`}>

                                <Card>

                                    <div className='img-wrapper'>
                                        <img src={e.image.medium} alt="" />

                                    </div>


                                    <h1>{e.name}</h1>




                                </Card>



                            </Link>

                        )


                    })
                }
   







        </Container>
    )
}

export default Shows


const Container = styled.div`

display: grid;
grid-template-columns: repeat(4,1fr) ;
justify-items: center;

height: auto;



@media(max-width:1000px){
    grid-template-columns: repeat(2,1fr) ;
}




`

const Card = styled.div`
width: 220px;
height: 390px;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
transition: 0.3s;
cursor: pointer;



@media(max-width:500px){
    width: 140px;
height: 270px;
}



h1{
    color: #bdb9b9;
    font-size: 16px;
}


.img-wrapper{

width: 100%;
height: 350px;
border-radius: 10px;
overflow: hidden;
box-shadow: rgba(22, 19, 19, 0.623) 0px 3px 8px;


@media(max-width:500px){
  
    height: 230px;
}


}





img{

    object-fit: cover;
    width: 100%;
height: 100%;
transition: 0.4s;
}




&:hover{

transform: scale(1.04);

}

`


