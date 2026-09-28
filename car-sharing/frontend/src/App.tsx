import './App.css'
import Login from "./components/Login"
import { useAuth } from "./context/AuthContext"


function App() {
    const { token } = useAuth()

    return token ? <Dashboard /> : <Login />
}

export default App
