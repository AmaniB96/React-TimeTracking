import './App.css'
import Card from './assets/component/card'
import BigCard from './assets/component/BigCard'
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
            <BigCard 
                timeframe={timeframe}
                toggleDaily={toggleDaily}
                toggleWeekly={toggleWeekly}
                toggleMonthly={toggleMonthly}
            />

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
