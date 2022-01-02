import { useState } from "react"

const AddText = ({ addNewText }) => {
    const [text, setText] = useState("")
    const [color, setColor] = useState("black")
    const [size, setSize] = useState(5)

    const textSubmit = (event) => {
        event.preventDefault()

        if (!text) {
            alert("Please enter some text!")
            return
        }

        addNewText({ text, color, size })
        setText("")
        setColor("black")
        setSize(5)
    }

    return (
        <form onSubmit={textSubmit}>
            <input
                type="text"
                placeholder="Enter text here"
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <label>Color</label>
            <input
                type="color"
                value={color}
                onChange={event => setColor(event.target.value)}
            />
            <label>Size</label>
            <input
                type="range"
                min="1"
                max="10"
                value={size}
                onChange={event => setSize(event.target.value)}
            />
            <input type="submit" value="Add Text" />
        </form>
    )
}

export default AddText
