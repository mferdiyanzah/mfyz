import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import style from './App.module.css'

function App() {
  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
