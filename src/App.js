import './App.css';
import { useEffect, useState } from 'react'
import MoleContainer from './components/MoleContainers'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />)
    }
    return (
      <div>
        { hills }
      </div>
    )
  }
  const [isStart, setIsStart] = useState(false)
  function handleGameStart() {
    if(isStart) {
      alert('Game starting!')
    } else{
      console.log('Game is not starting!')
    }
  }

  useEffect(() => {
    handleGameStart()
  }, [isStart])
  
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()}
      <button onClick={() => setIsStart(true)} style={{wisth:"800px"}}>START</button>
    </div>
  );
}
export default App;