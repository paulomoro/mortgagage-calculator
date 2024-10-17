

export default function MortgageHeader (prop){


    return(
        <div className="headingForm">
            <h2>Mortgage Calculator</h2>
            <button onClick={prop.clearAll}>Clear All</button>
            </div>
    )
}