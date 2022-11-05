import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <head>
        <title>Dub_jay</title>
        <link rel='icon' href='/favicon.ico' />
      </head>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <hr className='h-[10px] w-[80%]' />
      <footer className='flex lg:flex-row flex-col h-24 md:w-[80%] items-start md:items-center justify-between md:gap-0 gap-4 w-[60%]'>
        <img src='/logo.png' alt='' />
        <span className='text-[#667085]'>
          HNG Internship 9 Frontend Task
        </span>
        <img src='I4G.png' />
      </footer>
    </div>
  );
}

export default App;
