import { TextField } from "@mui/material"
import useLS from "hooks/useLS";

export const EditorPage = () => {
    const [name, setName] = useLS<string>("name", "");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    return (
        <div>
            <h2>EditorPage</h2>
            <h4>name: {name}</h4>
            <TextField
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Введите ваше имя"
            />
        </div>

    )
}