import emptyBusiness from './assets/images/illustration-empty.svg'
function Result(props){

  const result = <>
  <h1>Your result</h1>
        <p>Your results are shown below based on the information you provided. 
          To adjust the results, edit the form and click “calculate repayments” again.
        </p>
        <div className="money">
          <div className="mcon">
          <p>Your monthly repayments</p>
          <h1>£ {props.repay}</h1>
        </div>
        <div className="mcon">
          <p>Total you'll repay over the term</p>
          <h1>£ {props.total}</h1>
        </div>
        </div>
  </>

  const empty = <>

    <img src={emptyBusiness} alt="empty business" />

    <h1>Results shown here</h1>

    <p>Complete the form and click “calculate repayments” to see what 
    your monthly repayments would be.</p>
  </>

    return(
        <div className='result'>
          {(props.total <= 0 && props.repay <= 0) ? empty : result}
      </div>
    )
}

export default Result