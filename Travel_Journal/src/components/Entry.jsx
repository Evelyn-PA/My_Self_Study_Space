export default function Entry() {
    return (
        <>
            <div className="photos">
                <img src="\Images\Finland - Helsinki.jpg" alt="Finland" />
            </div>
            <div className="content">
                <div className="head">
                    <img src="\Images\marker.svg" alt="location-marker" className="icon" />
                    <h3>Finland</h3>
                    <a href="https://www.google.com/maps/place/Helsinki/@60.1100963,24.689046,10z/data=!3m1!4b1!4m6!3m5!1s0x46920bc796210691:0xcd4ebd843be2f763!8m2!3d60.
                    1698557!4d24.9383791!16zL20vMDNraG4?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" target="_blank">View on Google Maps</a>
                </div>

                <h1>Helsinki</h1>
                <p style={{ fontWeight: "bold" }}> 22 Apr, 2025 - 22 May, 2025</p>
                <p>A crisp, stylish travel journal capturing days spent in Helsinki, where Nordic design meets old-world charm.
                    From sauna sessions by the sea to strolls through snowy streets and modern cafés, this journal holds notes, sketches,
                    and moments from Finland’s cool capital.</p>
            </div>
        </>
    )
}