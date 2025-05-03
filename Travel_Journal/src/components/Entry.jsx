export default function Entry(props) {
    return (
        <div className="entry">
            <div className="photos">
                <img src={props.img} />
            </div>
            <div className="content">
                <div className="head">
                    <img src="\Images\marker.svg" alt="location-marker" className="icon" />
                    <h3>{props.title}</h3>
                    <a href={props.link} target="_blank">View on Google Maps</a>
                </div>

                <h1>{props.name}</h1>
                <p style={{ fontWeight: "bold" }}>22 Apr, 2025 - 22 May, 2025</p>
                <p>{props.content}</p>
            </div>
        </div>
    )
}