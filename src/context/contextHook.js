import { useState, useEffect, useContext, createContext, React } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

import {
  getDataFromDB,
  getAllSets,
  sendDataInBatch,
  addDataToDB,
  getQuestions,
} from "../firebase/firebase-utils";

import { AES, enc } from "crypto-js";

const DataContext = createContext();

const DataProvider = (props) => {
  const [testType, setTestType] = useState("grammar");
  const [level, setLevel] = useState("A1");

  const [setOfQuestions, setQuestions] = useSessionStorage("data", null);
  const [userProgress, setUserProgress] = useSessionStorage("user", null);

  const [testStatus, setTestStatus] = useState("startStage");
  const [testQuestionCount, setTestQuestionCount] = useState(0);

  //max questions will change based on the testType;
  const [maxQuestions, setMaxQuestions] = useState(10);

  // (A1,A2,B1,B2,C1);
  // Grammar - 49 questions - Approximately 10 questions per level
  // Reading - 27 questions - Approximately 5 questions per level
  // Listening - 24 questions - Approximately 5 questions per level

  // fetching 10 A1 grammar questions once the app starts
  // if we have the questions already saved on session storage, we will use them.
  useEffect(() => {
    if (!setOfQuestions) {
      console.log("fetching the questions to the database");
      if (testType === "grammar") {
        getQuestions("grammarQuestions", "A1", maxQuestions).then(
          (questions) => {
            // stringfying and encrypting the object before saving to the section storage
            const encryptedQuestions = encryptData(questions);
            setQuestions(encryptedQuestions);
          }
        );
      }
    }
    // getAllSets(testType, level).then(setList => {
    // 	console.log(setList);
    // 	setAllSets(setList);
    // 	//getting a random set of questions inside the available sets
    // 	const randomNumber = Math.floor(
    // 		Math.random() * (setList.length - 1 + 1) + 1
    // 	);
    // 	console.log(randomNumber);
    // 	//calling the function to get the actual set of questions once we have the
    // 	// list of available sets
    // 	getDataFromDB(testType, level, `set${randomNumber}`);
    // });
  }, [level]);

  useEffect(() => {
    console.log(userProgress);
  }, [userProgress]);

  //functions to encrypt and decrypt data
  function encryptData(data) {
    const encryptedData = AES.encrypt(
      JSON.stringify(data),
      `${process.env.REACT_APP_CRYPTO_KEY}`
    ).toString();

    return encryptedData;
  }

  function decryptData(data) {
    const bytes = AES.decrypt(data, `${process.env.REACT_APP_CRYPTO_KEY}`);
    return JSON.parse(bytes.toString(enc.Utf8));
  }

  // this function is used to access each individually question from session storage and decrypt it.
  function decryptQuestion(questionNumber) {
    const decryptedData = decryptData(setOfQuestions);
    const question = decryptedData[questionNumber];
    return question;
  }

  // this function will be used to create the user progress object, track their correct answers,
  // encrypt it and save to session storage.
  // the validation of the correct answer needs to be done inside the component, this function takes two arguments
  // the questionID and a boolean that indicates if the questions was answered correctly or not.
  function testTakerProgress(questionID, isTheAnswerCorrect) {
    //create a new object and encrypt it
    const userProgressObj = {};
    userProgressObj[questionID] = isTheAnswerCorrect;

    //if we have an user progress object already created
    if (userProgress) {
      let currentProgress = decryptData(userProgress);
      console.log(currentProgress);

      //if we have the questionId already saved, we will not save the user progress
      if (currentProgress.some((question) => question[questionID])) {
        console.log(`The question ${questionID} has already been saved`);
        return;
      }

      currentProgress = [userProgressObj, ...currentProgress];
      setUserProgress(encryptData(currentProgress));
      console.log({ currentProgress });
    } else {
      //we don't have an user progress created
      let progressArray = [];
      progressArray.push(userProgressObj);
      setUserProgress(encryptData(progressArray));
    }
  }

  return (
    <DataContext.Provider
      value={{
        setLevel,
        setOfQuestions,
        decryptQuestion,
        testTakerProgress,
        testStatus,
        setTestStatus,
        testQuestionCount,
        setTestQuestionCount,
        maxQuestions,
      }}
      {...props}
    />
  );
};

function useAppContext() {
  const context = useContext(DataContext);
  if (!context) throw new Error("Not inside the Provider");
  return context;
}

export { useAppContext, DataProvider };
