import { useEffect, useRef, useState } from "react";
import "./App.css";



function App() {

  const OTP_DIGITS_COUNT = 5;

  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill(""));

  const refArr = useRef([]);

  useEffect(()=>{
    refArr.current[0]?.focus();
  },[])

  const handleOnChange = (value,index) => {
    if(isNaN(value)) return;
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index]= value.slice(-1);
    setInputArr(newArr);
    newValue&&refArr.current[index+1]?.focus();
  }

  const handleOnkeyDown = (e,index) => {
    console.log(e.key);
    if(!e.target.value && e.key==="Backspace"){
      refArr.current[index-1]?.focus();
    }
  }

  return (
    <div className="App">
      <h1>Validate OTP</h1>
      <div>
        {
          inputArr.map((value,index)=>{
            return(
              <input
              className="otp-input"
                key={index}
                type="text"
                value={inputArr[index]}
                ref={(input) => (refArr.current[index] = input)}
                onChange={(e)=>handleOnChange(e.target.value,index)}
                onKeyDown={(e)=>handleOnkeyDown(e,index)}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App