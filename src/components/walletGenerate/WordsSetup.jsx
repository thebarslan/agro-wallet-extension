import React, { useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import Warning from "../common/Warning";

const WordsSetup = ({ onCanSteppableChange }) => {
   const [isCopied, setIsCopied] = useState(false);
   const handleCopy = () => {
      navigator.clipboard.writeText(words.words.join(" "));
      setIsCopied(true);
      onCanSteppableChange(true, "", words.words.join(" "));
   };
   const [words, setWords] = useState({
      words: [
         "shfa",
         "walsp",
         "abrdf",
         "pysts",
         "fults",
         "nhasa",
         "tywar",
         "pleaa",
         "dsats",
         "nasudad",
         "palwdsa",
         "ugrdgkf",
      ],
   });
   return (
      <div className="words-setup px-4 flex flex-col h-full justify-center relative">
         <div className="warning px-4 relative mb-6">
            <Warning text="Note that words to use them to login." />
         </div>
         <div className="title w-full flex justify-center items-center mb-4 mt-10">
            <h5 className="text-xl font-semibold text-white uppercase">
               COPY YOUR WORDS
            </h5>
         </div>
         <div className="words-card-shadow rounded-2xl px-6 py-6 text-white card-border-color relative text-color flex flex-wrap gap-2 bg-shadow-relative">
            {words.words.map((word, index) => (
               <p key={index} className="word-item font-medium">
                  {word}
               </p>
            ))}
         </div>
         <div className="copy-button w-full flex items-center justify-center mt-5">
            <button
               className={`w-4/5 py-[10px] rounded-3xl uppercase text-base text-white flex items-center justify-center gap-3 z-20 ${
                  isCopied ? `bg-green-500` : `bg-shadow-relative `
               }`}
               onClick={handleCopy}
            >
               {isCopied ? (
                  <>
                     <FaCheck />
                     <h5>Copied</h5>
                  </>
               ) : (
                  <>
                     <MdOutlineContentCopy className="h-[18px] w-auto" />
                     Copy
                  </>
               )}
            </button>
         </div>
      </div>
   );
};

export default WordsSetup;
