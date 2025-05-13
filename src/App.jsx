import './App.css'
import Card from './assets/component/card'
import data from '../public/data/data.json'
import { useState } from 'react'


function App() {
  const[timeframe,setTimeframe] = useState('daily')

  const toggleWeekly = () => {
    setTimeframe('weekly')
  }

  return (
    <>
    <div className='section1'>
      <div className='bigcard'>
        <button id="toggle" onClick={toggleWeekly}>Weekly</button>
      </div>

      <div className="card-container">
          {data.map((item, index) => (
              <Card key={index} donnee={item} timeframe={timeframe} />
          ))}
      </div>
      
      </div>
    </>
  )
}

export default App
