import { useRef, useState, useEffect } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  // 🔥 타이머 만료 시점에 모달 띄우기
  useEffect(() => {
    if (timerExpired) {
      dialog.current.showModal();
    }
  }, [timerExpired]);

  function handleStart() {
    setTimerExpired(false);
    setTimerStarted(true);

    timer.current = setTimeout(() => {
      setTimerExpired(true); // useEffect가 모달 띄움
      setTimerStarted(false);
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <>
      {timerExpired && (
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      )}

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running ⏱️" : "Timer inactive 💤"}
        </p>
      </section>
    </>
  );
}

