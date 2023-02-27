import React,{createContext,useState} from 'react'
const Appointmentcontext=createContext()

function AppointmentContextProvider({children}) {
const [selectedDate, setSelectedDate] = useState(null);
return (
   
    <Appointmentcontext.Provider value={{selectedDate,setSelectedDate}}>
    {children}
    </Appointmentcontext.Provider>
  )
}

export {AppointmentContextProvider,Appointmentcontext}