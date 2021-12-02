import { useEffect, useState } from "react"

export function Home() {
    const [search, setSearch] = useState<string>('')
    const [yesNo, setYesNo] = useState<string>('')

    useEffect(() => {
        if (!search) return
        const to = setTimeout(() => {
            fetchYesNo()
        }, 300)

        return () => { clearTimeout(to) }
    }, [search])

    const handleChange = (ev: any) => {
        setSearch(ev.target.value)
    }

    const fetchYesNo = () => {
        fetch('https://yesno.wtf/api')
            .then(response => response.json())
            .then(data => {
                setYesNo(data.answer)
            })
    }

    return (
        <div className="main-container home-container">
            <input type="text"
                value={search}
                onChange={(ev) => {
                    handleChange(ev)
                }} />
            <h1>{yesNo}</h1>
        </div>
    )
}