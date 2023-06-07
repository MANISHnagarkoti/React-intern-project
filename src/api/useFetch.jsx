import React, { useEffect, useState } from 'react'
import Apifetch from './Apifetch'


const useFetch = (api) => {

    const [data, ddatashow] = useState([])
    const [loading, lloading] = useState(true)
    const [error, eerror] = useState(false)


    useEffect(() => {


        Apifetch(api).then((e) => {

            ddatashow(e)
            lloading(false)



        }).catch((e) => eerror(e))

    }, [api])



    return ({

        data, loading, error

    })


}

export default useFetch
