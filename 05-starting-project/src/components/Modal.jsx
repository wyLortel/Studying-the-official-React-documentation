import {forwardRef , useImperativeHandle , useRef} from "react"
//다른 돔위치에 그려주는거 가능  모달은 모든 ui위에 떠야하기 때문에 독립된 존재 가상의 돔안에 잇지만 외쪽에 dom을 만들어 이동
//useImperativeHandle ref를 통해 자식 컴포넌트의 내부를 제어할수잇게 특정 기능만 노출시키는 훅
import {createPortal} from 'react-dom'
import Button from "./Button";


const Modal = forwardRef(function Modal({children , buttonCaption },ref){
    const dialog = useRef();
  
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        };
        //객체로 넣어서 open으로 키로 주는것 
    })

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog> ,document.getElementById('modal-root')
    )
});

export default Modal;



// useImperativeHandle은,
// 부모가 ref로 직접 못 다루던 자식 내부 기능을,
// 자식이 스스로 ‘공개 허용’하게 만들어주는 훅

//일반 컴포넌트 함수는 ref를 props로 못 받음 
