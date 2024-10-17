import MortgageForm from './Components/MortgageForm'
import './App.css'
import FormResult from './Components/FormResult'
import { useState } from 'react'
import FirstResult from './Components/FirstResult'
import SecondResult from './Components/SecondResult'

export default function MortgageCalculatorWrapper(){

    const [resultPage, setResultPage] = useState(<FirstResult/>)

  const [formData, setFormData] = useState({
    mortgageAmount: "",
    mortgageTerm: "", 
    interestRate: "",
    mortgageType: ""
  })

  const resetForm = ()=>{
        setFormData({
            mortgageAmount: "",
            mortgageTerm: "", 
            interestRate: "",
            mortgageType: ""
        })
  }

  

  function CalculateMortgage (mortgageAmount, interestRate, mortgageTerm) {
    const totalNumberOfPayments = mortgageTerm * 12 
    const monthlyInterestRate = interestRate/12

    const monthlyPayment = 
    (mortgageAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalNumberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalNumberOfPayments) - 1);

    const totalRepayment = monthlyPayment * totalNumberOfPayments;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2)
    };
  } 

    const mortgageType = formData.mortgageType
    const mortgageAmount = Number(formData.mortgageAmount)
    const mortgageTerm = Number(formData.mortgageTerm)
    const interestRate = Number(formData.interestRate)/100


  function validateInput(e){
    if((formData.mortgageAmount || formData.mortgageTerm || formData.interestRate) === ""){
      e.preventDefault()
    } 

  }


  function handleChange(event){
    const {name,value} = event.target;
    setFormData( prevData => ({
            ...prevData,
            [name] : value
    }))
}


  function handleSubmit(e){
      e.preventDefault();
      const monthlyPayment = CalculateMortgage(mortgageAmount, interestRate, mortgageTerm)
      if(mortgageType === "Repayment"){
        validateInput(e)
        setResultPage(<SecondResult 
          monthlyPayment  = {monthlyPayment.monthlyPayment}
          totalRepayment = {monthlyPayment.totalRepayment}
        />) 
      }  
  }


  function clearAll(){
        resetForm()
        setResultPage(<FirstResult/>)
  }

  return (
   <div className='mainApp'>
    <MortgageForm
      formData = {formData}
      handleChange = {handleChange}
      handleSubmit ={handleSubmit}
      clearAll = {clearAll}
    />

    <FormResult 
    resultPage  = {resultPage}
    handleSubmit = {handleSubmit}
    />
   </div>
    
  )
}
