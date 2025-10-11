import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
























// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );

//   return (
//     <ul>{listItems}</ul>
//   );
// }










// const user = {
//   name: '치이카와',
//   ImageUrl : "https://i.namu.wiki/i/geGngQMnvmK2g3wuKU4O1uNs8Ix1HXQULk9PrnT57lHOlU4AxL9qsNCYXOOY9DIqPWtXnphq8G6NzCcvzv-ppQ.webp",
//   imageSize:90,
// };


// export default function Profile() {
//   return(
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.name}
//         alt={"photo of" + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       >
//       </img>
//     </>
//   )
// }



//조건부 랜더링
// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }

// return (
//   <div>
//     {content}
//   </div>
// );



//이렇게 하면 더 간단히
// <div>
//   {isLoggedIn ? <AdminPanel /> : <LoginForm />}
// </div>



// function App() {
//   return (
//     <div className="App">
//       <h1>안녕! 나는 리액트야!</h1>
//     </div>
//   );
// }

// export default App;
