import './App.css'
import Counter from './functional_components/counter.jsx'
import Func_Card from './functional_components/func_card.jsx'

function App() {

  return (
    <>
      <div className='grid grid-cols-2 justify-items-center'>
          <Func_Card 
          image="https://i.pinimg.com/736x/fc/b3/7b/fcb37b0d9a614477f84cbd7f6866fb8c.jpg" 
          title="Psychopath 01"
          text="The quick brown fox jumps over the lazy dog!"
          />

          <Func_Card 
          image="https://i.pinimg.com/1200x/de/f6/8a/def68aebf65ca924190ae2589c1d960d.jpg"
          title="Psychopath 02"
          text="The quick brown fox jumps over the lazy dog!"
          />
      </div>

      <div>
        <Counter />
      </div>
    </>
  )
}

export default App
