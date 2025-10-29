import React from "react";

export default function SelectedProject({ project }) {

    //new Date('2025-10-28') 이런식으로 객체 생성 ; // 'object'
    //.toLocaleDateString() — 날짜를 문자열로 포맷(format) 하는 메서드 Date 객체 전용 메서드
    //“미국식(en-US)으로, 연·월·일을 이런 형식으로 보여줘!”

  const formattedDate = new Date(project.dueDate).toLocaleDateString("ko-KR", {
    year: "numeric", // 연도를 4자리로 (2025)
    month: "short", // 월을 짧게 (Oct)
    day: "numeric",// 일을 숫자로 (28)
  });

  return (
    <div className='w-[35rem] mt-16'>
      <header className='pb-4 mb-4 border-b-2 border-stone-300'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-stone-600 mb-2'>
            {project.title}
          </h1>
          <button className='text-stone-600 hover:text-stone-950'>
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.descripin}</p>
      </header>
    </div>
  );
}
