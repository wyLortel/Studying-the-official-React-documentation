import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from './components/Nav';
import Index from './components';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme');
    if (saveTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true); // ✅ 상태도 일치시키기
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  };

  return (
    <div className='bg-white dark:bg-black text-black dark:text-white min-h-screen transition'>
      <Nav isDark={isDark} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;

