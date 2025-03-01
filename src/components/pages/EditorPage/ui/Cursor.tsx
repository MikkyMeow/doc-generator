import useLS from "hooks/useLS"
import { useGlobalStore } from "store/useGlobalStore"

export const Cursor = () => {
    const { cursor, setCursor } = useGlobalStore();

    return (
        <input style={{
            outline: 'none',
            border: 'none',
        }} value={cursor} onChange={(e) => setCursor(e.target.value)} />
    )
}