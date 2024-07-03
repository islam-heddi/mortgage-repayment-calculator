
function Result(props){
    return(
        <div className='result'>
        <h1>Your result</h1>
        <p>Your results are shown below based on the information you provided. 
          To adjust the results, edit the form and click “calculate repayments” again.
        </p>
        <div>
          <p>Your monthly repayments</p>
          <h1> {props.repay}</h1>
        </div>
        <div>
          <p>Total you'll repay over the term</p>
          <h1> {props.total}</h1>
        </div>
      </div>
    )
}

export default Result