export default function Content() {
    return (
        <main>
            <div>
                <form>
                    <label>
                        Top Text
                        <input type="text"
                            placeholder="Me trying to fix my life"
                            name="topText" />
                    </label>
                    <lable>
                        Bottom Text
                        <input
                            type="text"
                            placeholder="With my broken brain"
                            name="bottomText"
                        />
                    </lable>
                </form>

                <button>Get me a new meme image</button>


            </div>
        </main>
    )
}