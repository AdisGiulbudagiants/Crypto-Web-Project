import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./screens/HomePage"
import MainPage from "./screens/MainPage"
import AboutMe from "./screens/AboutMe"
import MainLayout from "./components/MainLayout"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

//Нужно сделать отдельный компонент который будет выводиться если странице не найдена
//Нужно убрать компонент Loading впринципе, он бесполезен
