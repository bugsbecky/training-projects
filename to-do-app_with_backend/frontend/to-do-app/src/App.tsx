import { useState } from 'react'
import './App.css'

const TODOS_URL = 'http://localhost:8080/api/todos'

function App() {
  const [title, setTitle] = useState('')

  async function handelAddbtn() {
    const response = await fetch(TODOS_URL, {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ title }), 
    })
    console.log(response)
    const responseJson = await response.json()
    console.log(responseJson)
    setTitle('')
  }

  return (
    <>
      <input 
        placeholder="input To-do's"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handelAddbtn}>add</button>
    </>
  )
}

export default App
