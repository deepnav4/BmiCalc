import { useState } from 'react'
import './App.css'

function App(){
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('')


  let calcBmi = (e) => {
    e.preventDefault()
    if(weight === 0 || height === 0){
      alert(' Please enter your weight and height ')
    }
    else{
      let bmi = weight / (height * height)*703;
      setBmi(bmi.toFixed(1));

      if(bmi<25){
        setMessage(' You are UnderWeight ')
      }
      else if(bmi>=25 && bmi<30 ){
        setMessage(' You are Healthy ')
      }
      else{
        setMessage(' You are OverWeight ')
      }
    }
  }


  let reload= () => {
    window.location.reload()
  }

  return(
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (ibs)</label>
            <input type='number' placeholder='Enter Weight Value' value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>

          <div>
            <label>Height (in)</label>
            <input type='number' placeholder='Enter Height Value' value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>

          <div className='btns'>
            <button type='submit' className='btn' >Calculate BMI</button>
            <button type='submit' className='btn btn-outline' onClick={reload}>Reload</button>
          </div>

          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
