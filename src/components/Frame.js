import Text from "./Text"

const Frame = ({ selectedImage, texts, onDelete }) => {
    return (
        <div className="frame">
            {
                selectedImage ?
                    <img src={selectedImage.url} alt="Please select a template" /> :
                    <div className="empty-template">
                        <p>Please select a template</p>
                    </div>
            }
            {texts.map(text => (
                <Text key={text.id} text={text} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Frame
