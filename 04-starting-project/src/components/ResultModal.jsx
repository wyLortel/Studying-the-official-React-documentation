import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({ targetTime, result }, ref) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>{result === "lost" ? " You Lost!" : " You Won!"}</h2>
      <p>
        목표 시간은 <strong>{targetTime}</strong>초였습니다.
      </p>
      <form method="dialog">
        <button>닫기</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
     