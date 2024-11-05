import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { AuthProvider } from "./context/AuthContext"
import { ToastProvider } from "./context/ToastContext"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App