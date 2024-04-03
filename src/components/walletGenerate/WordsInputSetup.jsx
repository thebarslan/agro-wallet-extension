import React, { useEffect, useState } from "react";
import Warning from "../common/Warning";

const WordsInputSetup = ({ onCanSteppableChange, words }) => {
   const [inputValue, setInputValue] = useState("");
   const handleWordDifference = () => {
      if (inputValue === words) {
         onCanSteppableChange(true);
      } else {
         onCanSteppableChange(false, "Words do not match");
      }
   };
   useEffect(() => {
      handleWordDifference();
   }, [inputValue]);
   return (
      <div className="words-input px-4 h-full relative justify-center flex flex-col">
         <div className="warning px-4 relative mb-20">
            <Warning text="Paste your words to verify" />
         </div>
         <div className="title w-full flex justify-center items-center mb-4">
            <h5 className="text-xl font-semibold text-white uppercase">
               PASTE YOUR WORDS
            </h5>
         </div>
         <div className="input-container w-full h-16 rounded-xl">
            <input
               type="text"
               className="w-full h-full rounded-xl px-4 outline-none text-green-600"
               onChange={(e) => setInputValue(e.target.value)}
               placeholder="Paste your words here"
               value={inputValue}
            />
         </div>
      </div>
   );
};

export default WordsInputSetup;
