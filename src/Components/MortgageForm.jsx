
import MortgageHeader from './MortgageHeaders'
import PropTypes from 'prop-types';


export default function MortgageForm({formData,handleSubmit,handleChange, clearAll}){

        


    return(

        <div className="mortgageForm" >
            <MortgageHeader 
                clearAll = {clearAll}
            />
            <form action="" className="form" onSubmit={handleSubmit}>
                <label htmlFor="mortgageAmount" className="m-Amount"> Mortgage Amount </label>
                <br />
                <input 
                id="mortgageAmount" 
                type="number" 
                name="mortgageAmount"
                onChange={handleChange} 
                value={formData.mortgageAmount}
                />

                <div className="term-rate">
                    <div>
                    <label htmlFor="mortgageTerm" className="rates"> Mortgage Term  </label>
                    <br />
                    <input type="number" 
                    name="mortgageTerm" 
                    onChange={handleChange} 
                    value={formData.mortgageTerm}
                    id="mortgageTerm" />
                    </div>

                    <div>
                    <label htmlFor="interestRate" className="rates">Interest Rate </label>
                    <br />
                    <input type="number" 
                    name="interestRate" 
                    onChange={handleChange} 
                    value={formData.interestRate}
                    id="interestRate" />
                    </div>
                </div>

                <label htmlFor="" className="radios"> Mortgage Type </label> 
                <div className="labelRadios">
                    <input type="radio" 
                    name="mortgageType"
                     id="repayment"
                     value="Repayment"
                     checked={formData.mortgageType === "Repayment"}
                     onChange={handleChange}/>
                    <label htmlFor="repayment" className="labelRadio"> Repayment </label> 
                 </div>

                <div className="labelRadios">
                    <input type="radio" 
                     name="mortgageType"
                     id="interest"
                     value="Interest Only"
                     checked={formData.mortgageType === "Interest Only"}
                     onChange={handleChange} />
                    <label htmlFor="interest" className="labelRadio"> Interest Only</label>
                </div>

                <button>Calculate Repayments</button>
            </form>

        </div>
    )
}

MortgageForm.propTypes = {
    formData: PropTypes.shape({
      mortgageAmount: PropTypes.PropTypes.string.isRequired,
      mortgageTerm: PropTypes.PropTypes.string.isRequired,
      interestRate: PropTypes.PropTypes.string.isRequired,
      mortgageType: PropTypes.PropTypes.string.isRequired
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    clearAll: PropTypes.func.isRequired
  };
