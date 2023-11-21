import { useState } from "react"

function Input ({setUser}) {
    const [username, setUsername] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = encodeURI(`https://api.github.com/users/${username}`)
        const response = await fetch(url)
        const data = await response.json()
        setUsername('')
        setUser(data)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={username} onChange={(e) => setUsername(e.target.value) } placeholder="username" />
                <input type="submit" />
            </form>
            <p>username: {username} </p>
        </div>
    )
}

export default Input