import React, { useState } from "react";
import WhiteSpace from "../components/common/WhiteSpace";
import PasswordSetup from "../components/walletGenerate/PasswordSetup";
import UsernameSetup from "../components/walletGenerate/UsernameSetup";
import { FaCheck } from "react-icons/fa";
import WordsSetup from "../components/walletGenerate/WordsSetup";
import WordsInputSetup from "../components/walletGenerate/WordsInputSetup";
import { useNavigate } from "react-router-dom";
import BackArrow from "../components/common/BackArrow";

const WalletGenerate = () => {
   const navigate = useNavigate();

   const [words, setWords] = useState("");

   const [step, setStep] = useState(0);
   const [canSteppable, setCanSteppable] = useState(false);

   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");

   const [buttonActive, setButtonActive] = useState(false);

   const handleStepChange = () => {
      if (!canSteppable) {
         setError(true);
         return;
      }
      setStep(step + 1);
      setCanSteppable(false);
      setButtonActive(false);
   };

   const handleCanSteppableChange = (value, errorMsg, _words) => {
      setCanSteppable(value);
      setErrorMessage(errorMsg);
      if (_words) {
         setWords(_words);
      }
      if (value) {
         setButtonActive(true);
      } else {
         setButtonActive(false);
      }
   };
   const navigateToDashboard = () => {
      navigate("/dashboard");
   };
   return (
      <div className="wallet-generate h-full flex flex-col">
         <BackArrow path="/" pageName="Create Wallet" />
         <WhiteSpace>
            <div className="wallet-generate-container h-full flex flex-col justify-center gap-4 w-full">
               <div className="step-viewer-container w-full mt-4 py-4 rounded-xl bg-shadow-relative">
                  <div className="step-viewer flex px-6 gap-0 font-semibold items-center">
                     <div
                        className={`step w-12 h-12 rounded-full  flex items-center justify-center flex-shrink-0 
                        ${
                           step >= 0
                              ? `bg-green-700 text-white`
                              : `text-green-700 bg-white`
                        } } `}
                     >
                        {step > 0 ? <FaCheck /> : 1}
                     </div>
                     <div
                        className={`step-line w-full h-[2px] ${
                           step >= 1 ? `bg-green-700` : ` bg-white`
                        }`}
                     ></div>
                     <div
                        className={`step w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0  ${
                           step >= 1
                              ? `bg-green-700 text-white`
                              : `text-green-700 bg-white`
                        } } `}
                     >
                        {step > 1 ? <FaCheck /> : 2}
                     </div>
                     <div
                        className={`step-line w-full h-[2px] ${
                           step >= 2 ? `bg-green-700` : ` bg-white`
                        }`}
                     ></div>
                     <div
                        className={`step w-12 h-12 rounded-full  flex items-center justify-center flex-shrink-0  ${
                           step >= 2
                              ? `bg-green-700 text-white`
                              : `text-green-700 bg-white`
                        } } `}
                     >
                        {step > 2 ? <FaCheck /> : 3}
                     </div>
                     <div
                        className={`step-line w-full h-[2px] ${
                           step >= 3 ? `bg-green-700` : ` bg-white`
                        }`}
                     ></div>
                     <div
                        className={`step w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0  ${
                           step >= 3
                              ? `bg-green-700 text-white`
                              : `text-green-700 bg-white`
                        } } `}
                     >
                        {step > 3 ? <FaCheck /> : 4}
                     </div>
                  </div>
               </div>
               <div
                  className={`steps-container h-full flex  ${
                     step === 2 ? `mt-0` : `mt-0`
                  }`}
               >
                  <div className="step-container h-full flex flex-col w-full ">
                     <div className="steps bg-shadow-relative py-4 h-full flex flex-col justify-center w-full">
                        {step == 0 && (
                           <UsernameSetup
                              onCanSteppableChange={handleCanSteppableChange}
                           />
                        )}
                        {step == 1 && (
                           <PasswordSetup
                              onCanSteppableChange={handleCanSteppableChange}
                           />
                        )}
                        {step == 2 && (
                           <WordsSetup
                              onCanSteppableChange={handleCanSteppableChange}
                           />
                        )}
                        {step == 3 && (
                           <WordsInputSetup
                              onCanSteppableChange={handleCanSteppableChange}
                              words={words}
                           />
                        )}
                     </div>
                     {error && (
                        <div className="error-container w-full flex items-center justify-center pt-4 text-red-400">
                           <h5>{errorMessage}</h5>
                        </div>
                     )}

                     <div className="button-container w-full flex-1 flex flex-col justify-end mt-4 z-20">
                        <button
                           className="w-full bg-green-600 py-3 mb-8 rounded-lg text-white text-sm uppercase disabled:opacity-50"
                           onClick={
                              step === 3
                                 ? navigateToDashboard
                                 : handleStepChange
                           }
                           disabled={!buttonActive}
                        >
                           {step === 3 ? (
                              <h5>CREATE WALLET</h5>
                           ) : (
                              <h5>NEXT STEP</h5>
                           )}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </WhiteSpace>
      </div>
   );
};

export default WalletGenerate;
