import './style/global.css'
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'

// import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16"> 
        <Header />
        <SummaryTable />
      </div>
    </div>
    
  )
}



// 2 Conceitos mais importantes do React:
// Componente: É tudo que é Reaproveitar / isolar
// Propriedade: Uma informação enviada para modificar um componente visual ou comportamentalmente

//no tailwind tudo é multiplicado por 4