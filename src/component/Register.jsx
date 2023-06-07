import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"
import { Data } from '../Context/Context'
import { useContext } from 'react'


const Register = () => {


    const { state } = useContext(Data)







    const [value, setvalue] = useState({

        name: state.Name,
        genres: state.Genres,
        status: state.Status,
        lan: state.Lan


    })




    // useEffect(() => {

    //     setvalue({

    //         ...value, name: state.Name



    //     })



    // }, [])



    const change = (e) => {
        setvalue(
            {
                ...value,
                [e.target.name]: e.target.value
            }
        )
    }

    const submit = async (e) => {

        e.preventDefault()

        const { name, } = value

        if (name.length < 1 || name === " ") {

            alert("please enter name")

        }



        alert("all fine")




    }



    return (


        <Container>

            <div className='title'>

                Welcome Please Login

            </div>



            <LoginForm >

                <div className='input'>

                    <label htmlFor="email">Flim name</label>

                    <div className='inputCon'>
                        <input onChange={change} type="text" value={value.name} name="name" id="email" placeholder='Enter Name' />
                    </div>

                </div>


                <div className='input'>

                    <label htmlFor="genres">Genre</label>

                    <div className='inputCon'>
                        <input value={value.genres} onChange={change} type="text" name="genres" id="genres" placeholder='Enter Email' />
                    </div>

                </div>



                <div className='input'>

                    <label htmlFor="status">Status</label>

                    <div className='inputCon'>
                        <input value={value.status} onChange={change} type="text" name="status" id="status" placeholder='Enter Email' />
                    </div>

                </div>



                <div className='input'>

                    <label htmlFor="lan">Language</label>

                    <div className='inputCon'>
                        <input value={value.lan} onChange={change} type="text" name="lan" id="lan" placeholder='Enter Email' />
                    </div>

                </div>



                <Button onClick={submit}>Next</Button>




            </LoginForm>




        </Container>
    )
}


const Container = styled.div`
  

width: 100%;
min-height: 800px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


.title{
    color: white;
    font-weight: 600;
}

`



const LoginForm = styled.form`
  

width: 400px;
min-height: 350px;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
border-radius: 10px;
/* border: 1px solid grey; */
margin-top: 30px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 40px;
background-color: white;


@media(max-width:500px){
width: 330px;
}



.input{
  /* border: 1px solid red; */
  width: 80%;
 
display: flex;
justify-content: space-between;
flex-direction: column;
margin-top: 40px;

label{
font-size: 13px;
font-weight: 600;
}

.inputCon{


display: flex;
margin-top: 10px;
border: 1px solid transparent;
border-radius: 5px;
padding: 2px;
height: 40px;

input{
height: 100%;
width: 100%;
border: none;
font-size: 20px;
}




&:hover{

  border: 1px solid grey;


}


}





}

`

const Button = styled.button`
  

width: 150px;
height: 40px;
font-size: 17px;
cursor: pointer;
margin-top: 30px;
color: white;
background:linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
border: none;
border-radius: 5px;
`


export default Register
