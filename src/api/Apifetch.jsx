import axios from 'axios'
import React, { useState } from 'react'



const Apifetch = async (api) => {


    const API = "https://api.tvmaze.com"


    try {


        const { data } = await axios.get(API+api)
        
        return (data)



    } catch (error) {

        return (error)


    }




}

export default Apifetch
