import { Rnd } from 'react-rnd'

const Text = ({ text }) => {
    const style = {
        color: text.color,
        fontSize: `${text.size}vw`,
    }

    return (
        <Rnd>
            <div style={style}>{text.text}</div>
        </Rnd>
    )
}

export default Text
