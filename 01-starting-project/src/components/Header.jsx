import image1 from "../assets/investment-calculator-logo.png"

export default function Header(){
    return(
      <header id="header">
        <img src={image1} alt="logo" />
        <h1>React Investment Calculator</h1>
      </header>
    )
}