import './style/global.css'
import { Habit } from "./components/Habit"




function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={10} />
      <Habit  completed={20}/>
      <Habit  completed={30}/>
    </div>
    
  )
}

export default App


// 2 Conceitos mais importantes do React:
// Componente: É tudo que é Reaproveitar / isolar
// Propriedade: Uma informação enviada para modificar um componente visual ou comportamentalmente
