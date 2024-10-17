import empty from '../assets/illustration-empty.svg'


export default function FirstResult(){


    return(
        <div className="firstResult">
                <img src={empty} alt="" />
                <h2>Results shown here</h2>
                <p>Complete the form and click Calculate Repayments to 
                    <br /> see what your monthly Repayments would be.
                </p>
            </div>
    )
}