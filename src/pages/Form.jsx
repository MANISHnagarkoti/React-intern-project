import React, { useEffect } from 'react'
import Register from '../component/Register'
import { Data } from '../Context/Context'
import { useContext } from 'react'

const Form = () => {

    const {state } = useContext(Data)

    useEffect(() => {

        const addlocalstorage = () => {

            localStorage.setItem("info", JSON.stringify(state))

        }



        addlocalstorage()


    }, [])



    return (
        <>
            <Register />





        </>

    )
}

export default Form
