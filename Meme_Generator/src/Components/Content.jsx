import { useState } from "react"
import { useEffect } from "react"

export default function Content() {

    const [meme, setMeme] = useState({
        topText: "Me trying to fix my life",
        bottomText: "With my broken heart",
        imgURL: "https://i.imgflip.com/9wp95f.jpg "
    })

    const [allMemes, setAllmemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllmemes(data.data.memes))
    }, [])

    //get a random image 
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        allMemes[randomNumber]
        const newMemeUrl = allMemes[randomNumber].url 
        setMeme(prevMeme => ({
            ...prevMeme,
            imgURL: newMemeUrl
        }))
    }


    function handleChange(event) {
        const { value, name } = event.currentTarget
        setMeme(prevText => ({
            ...prevText,
            [name]: value
        }))
    }
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
                            name="topText"
                            onChange={handleChange}
                            value={meme.topText}
                        />
                    </div>

                    <div className="form-box">
                        <label>
                            Bottom Text
                        </label>
                        <input
                            type="text"
                            placeholder="With my broken heart"
                            name="bottomText"
                            onChange={handleChange}
                            value={meme.bottomText}
                        />
                    </div>


                </form>
                <button onClick={getMemeImage}>Get me a new meme image</button>
            </div>

            <div className="meme">
                <img src={meme.imgURL} />
                <span className="top"> {meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}