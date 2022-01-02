const Frame = ({ selectedImage }) => {
    return (
        <div className="frame">
            {selectedImage ? <img src={selectedImage.url} alt="Please select a template" /> : <p>Please select a template</p>}
        </div>
    )
}

export default Frame
