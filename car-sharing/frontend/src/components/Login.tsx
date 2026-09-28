import { useState, type SubmitEvent } from "react"
const LoginURL = "http://localhost:8080/api/auth/login"

export default function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        setError(null)
        setLoading(true)

        try {
            const res = await fetch(LoginURL, {             //holt sich LoginInfos über die LoginURL
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })

            if (!res.ok) throw new Error("Login fehlgeschlagen")    //wenn es keine Response gibt erscheint der Error

            const data = await res.json()   //speichert die Responsedaten
            localStorage.setItem("token", data.token)      //speichert die Daten
        } catch {
            setError("Falsche Logindaten")     //wenn try nicht funktioniert hat soll der Error ausgegeben werden
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            {error && <p>{error}</p>}
            <button type="submit" disabled={loading}>
                {loading ? "Du wirst eingelogged ...": "Login"}
            </button>
        </form>
    )
}