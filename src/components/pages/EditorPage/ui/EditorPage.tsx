import { Paper } from "components/widgets/Paper"
import { useEffect } from "react"
import { Cursor } from "./Cursor"
import { useGlobalStore } from "store/useGlobalStore"

export const EditorPage = () => {
    const { content, setContent, cursor, setCursor } = useGlobalStore();

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            const content = JSON.parse(localStorage.getItem('content')!) || [];
            const cursor = JSON.parse(localStorage.getItem('cursor')!) || '';
            setContent([...content, { text: cursor }])
            setCursor('')
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [])


    return (
        <div>
            <h2>EditorPage</h2>
            <hr />
            <Paper>
                {content && content.map(el => (
                    <p key={Math.random()}>{el.text}</p>
                ))}
                <Cursor />
            </Paper>
        </div>

    )
}