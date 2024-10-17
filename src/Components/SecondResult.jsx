


export default function SecondResult(prop){


    return(
        <div className="secondResult">
            <div className="secondResultNote">
            <h2>Your Results</h2>
            <p>Your results are shown below based on the information <br />
                you provided. To adjusts the results edit the form and <br />
                click Calculate Repayment again. </p>
            </div>
            

                <div className="resultContainer">
                    <div className="amounts">
                        <p>Your Monthly Repayments</p>
                        <h1>${prop.monthlyPayment}</h1>
                    </div>
                    <span className="line"></span>
                    <div className="interest">
                        <p>Total you will repay over the term</p>
                        <h3>${prop.totalRepayment}</h3>
                    </div>
                </div>
           
        </div>
    )
}