import React, { createContext, useContext,useState } from 'react'

const modalcontext=createContext()

 function Modalcontextprovider({children}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
    <modalcontext.Provider value={{show,setShow,handleClose,handleShow}}>
    {children}
    </modalcontext.Provider>
  )
}

export {modalcontext,Modalcontextprovider}