import React,{useState} from 'react'
import calculatorPicture from './assets/images/icon-calculator.svg'
function Calc() {
  const [amount,setAmount] = useState(0)
  const [term,setTerm] = useState(0)
  const [rate,setRate] = useState(0)
  const [type,setType] = useState("repayment")
  const [selection,setSelection] = useState("repayment")
  ///const [repayment,setRepayment] = useState(0);
  ///const [total,setTotal] = useState(0);
  
  const HandleAmount = (e) => {
    setAmount(e.target.value)
  }

  const HandleTerm = (e) => {
    setTerm(e.target.value)
  }

  const HandleRate = (e) => {
    setRate(e.target.value)
  }
  const HandleType = (e) => {
    setType(e.target.value)
    setSelection(type)
  }

  const HandleSelect = (t) => {
    setSelection(t)
    setType(selection)
  }

  const HandleClear = () => {
    setTerm(0)
    setRate(0)
    setAmount(0)
  }

  const Calculate = () => {
    const Tmonthly = (rate / 100)/ 12
    const number_of_payment = 12 * term
    const mortgage =  amount * ((Tmonthly * Math.pow(1 + Tmonthly,number_of_payment))/(Math.pow(1 + Tmonthly,number_of_payment)-1))
    const total_amount_paid = mortgage * number_of_payment
    setRepay(mortgage)
    setTotal(total_amount_paid)
  }
    return(
    <div className="calc">
        <div className="head">
          <h1>Mortgage calculator</h1>
          <p className='clr' onClick={HandleClear}>Clear All</p>
        </div>
        <p>Mortgage amount</p>
        <input type="text" value={amount} onChange={(e) => HandleAmount(e)}/>
        <div className='tr'>
          <div>
            <p>Mortgage term</p>
            <input type="text" value={term} onChange={(e) => HandleTerm(e)}/>
          </div>
          <div>
            <p>interest rate</p>
            <input type="text" value={rate} onChange={(e) => HandleRate(e)}/>
          </div>
        </div>
        <p>Mortgage type</p>
        <div className='selec' onClick={() => HandleSelect("repayment")}>
          <input type="radio" className='rse' name="type" value="repayment"
                checked={type === "repayment"}
                onChange={HandleType}
          /> Repayment
        </div>
        <div className='selec'onClick={() => HandleSelect("Interest Only")}>
          <input type="radio" className='rse' name="type" value="Interest Only"
                    checked={type === "Interest Only"}
                    onChange={HandleType}
            /> Interest Only
        </div>
        <button onClick={Calculate}><img src={calculatorPicture} /> Calculate Repayment</button>
    </div>
    )
}

export default Calc