import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./screens/HomePage"
import MainPage from "./screens/MainPage"
import AboutMe from "./screens/AboutMe"
import MainLayout from "./components/MainLayout"
import "./App.css"
import NotFound from "./screens/NotFound"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
