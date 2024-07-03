import React, {useState} from 'react'
import Calc from './Calc' 
import Result from './Result'
function App() {
  const [repay,setRepay] = useState(0)
  const [total,setTotal] = useState(0)
  
  return (
    <main>
      <Calc />
      <Result repay={repay} total={total}/>
    </main>
  )
}

export default App
