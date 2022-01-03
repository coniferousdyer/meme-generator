import { useState, useRef, useEffect } from 'react'
import { Rnd } from 'react-rnd'
import { FaTimes } from 'react-icons/fa';

const Text = ({ text, onDelete }) => {
    const [selected, setSelected] = useState(false)
    const ref = useRef(null)

    const highlightText = ref => {
        if (ref.current) {
            ref.current.style.border = '0.1vw solid cyan'
            setSelected(true)
        }
    }

    const unHighlightText = ref => {
        if (ref.current) {
            ref.current.style.border = '0.1vw solid transparent'
            setSelected(false)
        }
    }

    // To handle text selection
    useEffect(() => {
        const elementClick = (event) => {
            if (ref.current && !ref.current.contains(event.target))
                unHighlightText(ref)
            else
                highlightText(ref)
        }

        // Adding event listeners to highlight text
        document.addEventListener('mousedown', elementClick)
        document.addEventListener('click', elementClick)
        document.addEventListener('drag', elementClick)
    }, [ref])

    const style = {
        color: text.color,
        fontSize: `${text.size}vw`,
    }

    return (
        <Rnd>
            <div ref={ref} style={style}>{text.text}
                {selected ? <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(text.id)} /> : null}
            </div>
        </Rnd>
    )
}

export default Text
