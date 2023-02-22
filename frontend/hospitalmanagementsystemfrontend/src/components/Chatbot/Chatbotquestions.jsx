import React,{useState} from "react"
import {background, Button} from "@chakra-ui/react"
import {Container} from "@mui/material/"
import { Box } from "@chakra-ui/react";


const predefinedQuestionsAndAnswers = {
    "What is your name?": "My name is Chatbot",
    "Who created you":"I am created by anurag",
    "What can you do?": "I can answer your questions.",
    "How I Can schedule an Appointment":"If you are a new user , then you first have to signup and after signing up , you can navigate to appointment section and can select department,doctor and date.Hope that answers your question",
  "Where to see all of my appointment":"for to see you appointments, first login and then go to dashboard you will be able to see all of yours appointments, Hope that answers your questions.",
  "How i can contact to the hospital":"you can contact us on +91xxxxxxxx"
   
    // Add more predefined questions and responses as needed
  };
 
  function getChatbotResponse(input) {
    for (const question in questionsAndAnswers) {
      if (input.toLowerCase() === question.toLowerCase()) {
        return questionsAndAnswers[question];
      }
    }
    // If the input doesn't match any of the defined questions, return a default response
    return "I'm sorry, I don't understand. Please ask me another question.";
  } 
function PredefinedQuestions() {
    const [selectedQuestion, setSelectedQuestion] = useState("");
    const [response, setResponse] = useState("");
  
    function handleQuestionSelect(event) {
      const question = event.target.value;
      setSelectedQuestion(question);
      setResponse(predefinedQuestionsAndAnswers[question]);
    }
  
    return (
      <div className="upperbody" style={{padding:"10%"}}>
      <div>
      <Container sx={{boxShadow:2,width:"100%",position:"sticky"}}    className="chatbot" value={selectedQuestion} >
      {Object.keys(predefinedQuestionsAndAnswers).map((question) => (
        <Button _hover={{backgroundColor:"green.100",color:"black"}} mt={10} mx={3} onClick={handleQuestionSelect} variant={"outline"}  color="InactiveCaptionText" key={question} value={question}>
          {question}
        </Button>
      ))}
      
      {response && <Box fontFamily={"cursive"} mt={10}>Chatbot: {response}</Box>}
    </Container>
      </div>

      </div>
    );
  }
  export {PredefinedQuestions,getChatbotResponse}
