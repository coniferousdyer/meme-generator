const Options = ({ images, selectImage }) => {
    return (
        <div className="options">
            {images.map(image => (
                <img
                    key={image.id}
                    src={image.url}
                    alt={image.name}
                    className={`option-img ${image.selected ? "selected" : ""}`}
                    onClick={() => selectImage(image) }
                />
            ))}
        </div>
    )
}

export default Options
