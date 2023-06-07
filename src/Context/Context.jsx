import React, { useReducer } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

const Data = createContext()


const fetchfromlocal = () => {


    const info = localStorage.getItem("info")

    if (info) {


        return JSON.parse(localStorage.getItem("info"))

    } else {

        return {

      Name : "",
      Genres:"",
      Lan:"",
      Status:""


        }

    }



}


const initialvalue = fetchfromlocal()

const Context = ({ children }) => {






    const reducer = (state, action) => {
        switch (action.type) {
            case "Add":

                return {

                    ...state, Name: action.paylaod.name , Genres : action.paylaod.genres ,  Status : action.paylaod.status , Lan : action.paylaod.lan
                }

            default:
                return state;
        }
    };




    const [state, dispatch] = useReducer(reducer, initialvalue)


    const addData = (value) => {

        dispatch({ type: "Add", paylaod: value });

    }






    return (
        <Data.Provider value={{ addData, state }}>

            {children}

        </Data.Provider>
    )

}







export { Context, Data } 