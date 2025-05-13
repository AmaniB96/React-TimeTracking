import './App.css'
import Card from './assets/component/card'
import data from '../public/data/data.json'



function App() {

  return (
    <div className="card-container">
        {data.map((item, index) => (
            <Card key={index} title={item.title}/>
        ))}

    </div>
  )
}

export default App
