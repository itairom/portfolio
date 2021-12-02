import { useState } from "react"

export function Conditional() {

    const [isDark, setIsDark] = useState(false)

    return (
        <div className={isDark ? 'dark' : 'light'}>
            <button onClick={() => { setIsDark(!isDark) }} >toggle</button>
            Test
        </div>
    )
}