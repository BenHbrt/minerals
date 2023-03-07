import './App.scss';
import { minerals, types } from './data/mineralData';
import SidebarObject from './components/SidebarObject';
import MineralInfo from './components/MineralInfo';
import { useState } from 'react'

function App() {

  const mineralsObj = minerals()
  const [displayMinerals, setDisplayMinerals] = useState([])

  const addMineral = (min) => {
    const newArray = displayMinerals.map((item) => {
      return item
    })
    let addMin = true
    newArray.forEach((item) => {
      if (item.name === min.name) {
        addMin = false
      }
    })
    if (addMin) {
      newArray.push(min)
    }
    setDisplayMinerals(newArray)
  }

  const closeMineral = (name) => {
    const newArray = displayMinerals.filter((mineral) => {
      if (mineral.name !== name) {
        return mineral
      }
    })
    setDisplayMinerals(newArray)
  }

  return (
    <div className="App">
      <h1>Minerals</h1>
      <div className="container">
        <div className="container_sidebar">
          {Object.keys(mineralsObj).map((type, i) => {
            return <SidebarObject name={type} data={mineralsObj[type]} key={i} func={addMineral}/>
          })}
        </div>
        <div className="container_display">
          {
            displayMinerals.map((mineral, i) => {
              return <MineralInfo key={i} mineral={mineral} func={closeMineral}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
