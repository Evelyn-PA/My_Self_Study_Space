import { useState } from "react"

export default function Content() {

        const [meme, setMeme] = useState({
            topText: "Me trying to fix my life",
            bottomText: "With my broken brain",
            imgURL:"https://i.imgflip.com/9wp95f.jpg " 
        })
        return (
            <main>
                <div className="form">

                    <form className="form-input">
                        <div className="form-box">
                            <label>
                                Top Text
                            </label>
                            <input type="text"
                                placeholder="Me trying to fix my life"
                                name="topText" />
                        </div>

                        <div className="form-box">
                            <label>
                                Bottom Text
                            </label>
                            <input
                                type="text"
                                placeholder="With my broken heart"
                                name="bottomText"
                            />
                        </div>


                    </form>
                    <button>Get me a new meme image</button>
                </div>

                <div className="meme">
                    <img src= {meme.imgURL}/>
                    <span className="top"> {meme.topText}</span>
                    <span className="bottom">{meme.bottomText}</span>
                </div>
            </main>
        )
    }