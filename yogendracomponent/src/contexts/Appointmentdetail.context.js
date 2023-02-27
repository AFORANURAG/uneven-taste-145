import React,{createContext,useState} from 'react'
const AppointmentcontextDetail=createContext()

function AppointmentDetailContextProvider({children}) {
const [userinfo,setInfo]=useState([{email:"",departmentId:"",doctorId:"",name:"",fees:1,img:""}])

return (
    <AppointmentcontextDetail.Provider value={{userinfo,setInfo}}>
    {children}
    </AppointmentcontextDetail.Provider>
  )
}

export {AppointmentDetailContextProvider,AppointmentcontextDetail}