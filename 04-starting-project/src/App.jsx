import Player from './components/Player.jsx';
import TimerChallnege from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div className="challenge">
        <TimerChallnege title="Easy" targetTime={1}/>
        <TimerChallnege title="Not Easy" targetTime={5}/>
        <TimerChallnege title="Getting tough" targetTime={10}/>
        <TimerChallnege title="Pros only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
