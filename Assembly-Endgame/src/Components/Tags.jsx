export default function Tag(props){
    const style={
        backgroundColor: props.backgroundColor,
        color: props.color
    }
    return(
        <div>
            <p style={style} className="tags"> {props.name}</p>
        </div>
    )
}