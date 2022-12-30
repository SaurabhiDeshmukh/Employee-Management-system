import React from 'react'
import { useState,createContext } from 'react';

export const adddata = createContext("");
export const updatedata = createContext("")
export const deletedata = createContext("")

const ContextProvider = ({children}) => {

    const[udata,setUdata] = useState("");
    const[updata,setUpdata] = useState("");
    const[deleteData,setDeletedata] = useState("");

  return (
    <adddata.Provider value = {{udata,setUdata}}>
        <updatedata.Provider value={{updata,setUpdata}}>
            <deletedata.Provider value={{deleteData,setDeletedata}}>
            {children}
            </deletedata.Provider>
           
        </updatedata.Provider>

   </adddata.Provider>
  )
}

export default ContextProvider;
