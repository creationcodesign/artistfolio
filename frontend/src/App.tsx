import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
