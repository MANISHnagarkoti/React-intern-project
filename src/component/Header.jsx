import React, { useEffect } from 'react'
import useFetch from '../api/useFetch'
import Spinner from './Loader'
import { styled } from 'styled-components'
import Btn from './Btn'


const Header = () => {



    const { loading, data, error } = useFetch(`/shows/56/images`)





    const Random = () => {
        const filter = data.filter((e) => e.type === "background")
        const dd = filter[Math.floor(Math.random() * filter.length - 1)]?.resolutions?.original?.url
        return dd
    }




    if (loading === true) {

        return (

            <LoaderWrapper>
                <Spinner />
            </LoaderWrapper>
        )

    }




    return (


        <Conatiner img={Random()}>

            <div className='blur'>



                <h1> Teli T.V </h1>
                <p>Welcome to our website for free Shows </p>

                <Btn />




            </div>








        </Conatiner>

    )
}

export default Header



const LoaderWrapper = styled.div`
    
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`


// {{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}

const Conatiner = styled.div`
position: relative;
width: 100%;
height: 600px;
background-image: url(   ${({ img }) => img}       )  ;
background-repeat: no-repeat;
background-position:top center;
background-size: cover;
@media(max-width:700px){
    height: 350px;
}


h1{

font-size: 200px;
font-family: 'Josefin Sans', sans-serif;

@media(max-width:700px){
font-size: 100px;
}


}

p{

font-size: 25px;

}

.blur{
position: absolute;
top: 0px;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(16,29,32,0.38699229691876746) 100%);
color: white;
flex-direction: column;


p{


    @media(max-width:500px){
  font-size: 16px;
}

}


}
`