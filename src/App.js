import {useState} from 'react';
import './App.css';

 function App() {
     const[value, setValue]=useState("");

     const handleClick=(e)=>{
      setValue((prev)=>prev+e.target.value);
    };
     const clearDisplay=()=>{
      setValue("");
     };

     const handleDelete=()=>{
      setValue((prev)=>prev.slice(0,-1));
     };

     const handlePercent=()=>{
      setValue((value/100).toString());
     }

    

     const handleEqual=()=>{
      try{
        setValue(eval(value).toString());
      }catch{
        setValue("Error");
      }

     };


  return(
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
          <h2>iOS Calculator</h2>
          <input type="text" value={value}/>
         </div>
         <div>
          <button type="button" value="AC" className="operators" onClick={clearDisplay}>AC</button>
          <button type="button" value="DE" className="operators" onClick={handleDelete}>DE</button>
          <button type="button" value="%" className="operators" onClick={handlePercent}>%</button>
          <button type="button" value="+" className="operators" onClick={handleClick}>+</button> 
         </div>
         <div>
          <button type="button" value="7" onClick={handleClick}>7</button>
          <button type="button" value="8" onClick={handleClick}>8</button>
          <button type="button" value="9" onClick={handleClick}>9</button>
          <button type="button" value="*" className="operators" onClick={handleClick}>X</button> 
         </div>
         <div>
          <button type="button" value="4" onClick={handleClick}>4</button>
          <button type="button" value="5"  onClick={handleClick}>5</button>
          <button type="button" value="6" onClick={handleClick}>6</button>
          <button type="button" value="-" className="operators" onClick={handleClick}>-</button>
         </div>
         <div>
          <button type="button" value="1" onClick={handleClick}>1</button>
          <button type="button" value="2" onClick={handleClick}>2</button>
          <button type="button" value="3" onClick={handleClick}>3</button>
          <button type="button" value="/" className="operators" onClick={handleClick}>/</button> 

         </div>
         <div>
          <button type="button" value="00" onClick={handleClick}>00</button>
          <button type="button" value="0" onClick={handleClick}>0</button>
          <button type="button" value="." className="operators" onClick={handleClick}>.</button>
          <button type="button" value="=" className="equalbtn" onClick={handleEqual}> =</button>
         </div>
        </form>

      </div>

    </div>
  )
}

export default App;
