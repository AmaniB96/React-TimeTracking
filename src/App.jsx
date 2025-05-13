import './App.css'
import Card from './assets/component/card'
import data from '../public/data/data.json'
import { useState } from 'react'


function App() {
  const[timeframe,setTimeframe] = useState('daily')

  const toggleDaily = () => {
    setTimeframe('daily')
  }

  const toggleWeekly = () => {
    setTimeframe('weekly')
  }

  const toggleMonthly = () => {
    setTimeframe('monthly')
  }

  return (
    <>
    <div className='section1'>
      <div className='profile-cont'>
      <div className='bigcardhead'>
          <img className='pp' src="../src/assets/images/image-jeremy.png" alt="" />
          <div className='text'>
             <span className='sp'>Report for</span>
            <p>Jeremy Robson</p>
          </div>
      </div>

         <div className='bigcard'>
        <a id="toggle" onClick={toggleDaily}>Daily</a>
        <a id="toggle" onClick={toggleWeekly}>Weekly</a>
        <a id="toggle" onClick={toggleMonthly}>Monthly</a>
      </div>
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
