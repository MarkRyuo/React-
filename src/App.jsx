import './App.css'
import Class_Card from './class_components/class_card.jsx'
import Counter from './functional_components/counter.jsx'
import Func_Card from './functional_components/func_card.jsx'

function App() {

  return (
    <>
      <div className='grid grid-cols-2 justify-items-center'>
          <Func_Card 
          image="https://i.pinimg.com/1200x/68/18/8d/68188d6e515e2196a2f2e506cc4e1a33.jpg" 
          title="Isaki Migari"
          text="Insomniacs After School"
          />

          <Class_Card 
          image="https://i.pinimg.com/736x/9e/fa/79/9efa79625639b129f08012a2a585a9c2.jpg" 
          title="Hiro Segawa" 
          text="A Couple of Cuckoos"/>
         
      </div>

    </>
  )
}

export default App
