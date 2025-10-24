import './Header.css';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// 배열 길이를 배타 상한으로 쓰는 버전
function genRandomInt(maxExclusive) {
  return Math.floor(Math.random() * maxExclusive);
}


export default function Header() {
  return (
    <header>
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(reactDescriptions.length)]} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}