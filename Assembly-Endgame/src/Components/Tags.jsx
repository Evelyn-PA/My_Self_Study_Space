export default function Tag(props){
    return(
        <div>
            <p style={{ backgroundColor: props.backgroundColor, color: props.color }}> {props.name}</p>
        </div>
    )
}