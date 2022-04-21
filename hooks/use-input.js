import { useState } from "react";
import { useRef } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueRef = useRef(null);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;
  
  // if (valueIsValid && !hasError){
  //   ref={valueRef};
  // }
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
      setEnteredValue('');
      setIsTouched(false);
  };

  return{
      value: enteredValue,
      isValid: valueIsValid,
      hasError,
      valueRef,
      valueChangeHandler,
      inputBlurHandler,
      reset
  };
};

export default useInput;
