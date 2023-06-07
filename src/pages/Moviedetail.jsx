import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../api/useFetch'
import { styled } from 'styled-components'
import Loader from "../component/Loader"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Ticket from '../component/Ticket'
import { Data } from '../Context/Context'
import { useContext } from 'react'

const Moviedetail = () => {

    const { movie_id } = useParams()

    const { data, loading } = useFetch(`/shows/${movie_id}`)
    const { data: imgess } = useFetch(`/shows/${movie_id}/images`)


    const { addData, state } = useContext(Data)



  


    const filter = () => {



        const data = imgess.filter((e) => e.type === "background")

        return data[0]?.resolutions?.original.url



    }












    if (loading === true) {

        return (

            <LoaderWrapper>
                <Loader />
            </LoaderWrapper>
        )

    }



    return (
        <Container img={filter()}>





            <div className='blur'>



            </div>




            <div className='detail-wrapper'>


                <div className='img-wrapper'>

                    <img src={data?.image.original} alt="" />

                </div>


                <div className='info-wrapper'>

                    <h3>{data.name}  </h3>





                    <div className='genre-wrapper'> {data.genres.map((e , i ) => {

                        return (

                            <div key={i} className='genre'>{e}</div>


                        )


                    })}   </div>



                    <div className='btn-wrapper'>

                        <  Playbtn style={{ fontSize: "55px" }} />

                        <Link to={"/ticket"} onClick={() => {


                            addData({ name: data.name, genres: data.genres.join(","), lan: data.language, status: data.status })

                        

                        }}>

                            <Ticket />

                        </Link>


                    </div>




                    <div className='overview'>

                        <div className='tagline'>Overview</div>

                        <div>

                            {data.summary.replace("<p>", "").replace("</p>", "").replace("<b>", "").replace("</b>", "")}

                        </div>









                    </div>






















                    <div className='extrainfo'>

                        <div className='info-one'>

                            <div className='info-one-one'>   <div>Staus:</div>     <div className='info'>{data.status}</div>              </div>


                            <div className='info-one-one'>   <div>Premiered:</div>    <div className='info'>{data.premiered}</div>      </div>


                            <div className='info-one-one'>    <div>Language:</div>  <div className='info'>{data.language}</div>          </div>




                        </div>

                        <div className='info-two'>



                            <div className='info-two-one'>  <div>Rating:</div>   <div className='info'>{data.rating.average}</div>   </div>



                        </div>


                    </div>




                </div>





            </div>





        </Container >
    )
}

export default Moviedetail




const Playbtn = styled(PlayCircleOutlineIcon)`
    
transition: 0.4s;
color:#d64b62;
cursor: pointer;
/* margin-top: 20px; */


&:hover{

    color:#be4055;

}

`



const LoaderWrapper = styled.div`
    
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`


// {{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}

const Container = styled.div`
    
width: 100%;

    background: url(${({ img }) => img}) ;
    background-repeat: none;
    background-size: cover;
    background-position: top center;
position: relative;


.blur{

position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(16,29,32,0.38699229691876746) 100%);
backdrop-filter: blur(30px);

}



.detail-wrapper{

margin: auto;
max-width: 1110px;
min-height: 600px;
justify-content: space-between;
display: flex;
padding-top: 40px;
position: relative;
z-index: 1;


@media(max-width:970px){

    min-height: auto;
    



}


.img-wrapper{

width: 400px;
height: 100%;



@media(max-width:970px){
width: 100%;
display: flex;
justify-content: center;
}


img{

    width: 280px;
    height: 400px;
}



}




.info-wrapper{

/* border: 1px solid red; */
width: 800px;
color: white;


@media(max-width:970px){
width: 100%;
margin-top: 40px;
}


h3{

font-size: 60px;

}


.genre-wrapper{
display: flex;
grid-gap: 10px;
margin-top: 20px;


.genre{
    width: auto;
    padding: 5px;
    background-color: #d64b62;
    border-radius: 5px;
    height: auto;
    font-size: 12px;
}

}



}




.btn-wrapper{

display: flex;
align-items: flex-end;
justify-content: space-between;
width: 230px;
margin-top: 20px;
}





.extrainfo{


margin-top: 30px;
font-size: 19px;
max-width: 600px;


@media(max-width:970px){





}





.info-one{

    display: flex;
justify-content: space-between;
border-bottom:1px solid #8080808d;
padding-bottom: 10px;
/* background-color: #8080808d; */

.info-one-one{

    display: flex;

    .info{

color: grey;
margin-left: 10px;
@media(max-width:970px){

margin-left: 0px;
}

    }


    @media(max-width:970px){
flex-direction: column;
margin-left: 0px;
}


    
}


}



.info-two{
border-bottom:1px solid #8080808d;
padding-bottom: 10px;
margin-top: 30px;

.info-two-one{

display: flex;


.info{

color: grey;
margin-left: 10px;


    }
    

}


}



}




.overview{

  line-height:30px ;
min-height: 100px;
margin-top: 20px;
color: grey;

.tagline{

    font-size: 30px;
    margin-bottom: 20px;
    color: white;
}

}


@media(max-width:970px){


    flex-direction: column;
width: 95%;



}








}
`