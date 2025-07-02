import { languages } from "../language"
import { nanoid } from "nanoid"

export default function Tags() {
    return (
        <div className="tags-container">
            {languages.map((dt) => (
                <Tag
                    key={nanoid()}
                    name={dt.name}
                    backgroundColor={dt.backgroundColor}
                    color={dt.color}
                />
            ))}
        </div>
    )
}

function Tag(props) {
    const style = {
        backgroundColor: props.backgroundColor,
        color: props.color
    }

    return (
            <p style={style} className="tags">{props.name}</p>
    )
}