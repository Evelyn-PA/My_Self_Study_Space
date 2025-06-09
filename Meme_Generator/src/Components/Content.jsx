export default function Content() {
    return (
        <main>
            <div className="form">

                <form className="form-input">
                    <label>
                        Top Text
                    </label>
                    <input type="text"
                        placeholder="Me trying to fix my life"
                        name="topText" />


                    <label>
                        Bottom Text
                    </label>
                    <input
                        type="text"
                        placeholder="With my broken brain"
                        name="bottomText"
                    />

                </form>
                <button>Get me a new meme image</button>
            </div>

            <div className="meme">
                <img src="https://i.imgflip.com/9wp95f.jpg" title="made at imgflip.com" />
                <span className="top">Me trying to fix my life</span>
                <span className="bottom">With my broken brain</span>
            </div>
        </main>
    )
}