

export default function UserInput({onChange , userInput}) {
   
  

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial">Initial Investment</label>
          <input type="number" id="initial" name="initial" value={userInput.initialInvestment} required onChange={(event)=>onChange("initialInvestment" , event.target.value)} />
        </div>

        <div>
          <label htmlFor="annual">Annual Investment</label>
          <input type="number" id="annual" name="annual" value={userInput.annualInvestment} required onChange={(event)=>onChange("annualInvestment" , event.target.value)} />
        </div>

        <div>
          <label htmlFor="return">Expected Return (%)</label>
          <input type="number" id="return" name="return" value={userInput.expectedReturn} required onChange={(event)=>onChange("expectedReturn" , event.target.value)} />
        </div>

        <div>
          <label htmlFor="duration">Duration (Years)</label>
          <input type="number" id="duration" name="duration" value={userInput.duration} required onChange={(event)=>onChange("duration" , event.target.value)} />
        </div>
      </div>
    </section>
  );
}
