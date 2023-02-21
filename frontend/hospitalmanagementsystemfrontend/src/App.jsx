
import React from "react"
import {Box} from "@chakra-ui/react"
import {Route,Routes} from "react-router-dom"
function App() {
  return (
   <Box>
   <Routes>
   <Route path="/" element={<Home/>}/>
   </Routes>
   </Box>
  )
}

export default App
