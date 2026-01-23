import HomePage from "@/pages/home"
import Navbar from "@/components/navbar"
import { Route, Routes,  } from "react-router-dom"
import Footer from "@/components/footer"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App