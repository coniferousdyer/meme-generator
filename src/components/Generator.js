import { useState, useEffect } from "react"
import Options from "./Options"
import Form from "./Form"
import Frame from "./Frame"

const Generator = () => {
    const [images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)

    // Fetch images from the API
    useEffect(() => {
        const getMemes = async () => {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setImages(
                data.data.memes.map(meme => ({
                    ...meme,
                    selected: false
                }))
            )
        }

        getMemes()
    }, [])

    // To handle image selection
    const handleImageClick = (image) => {
        setSelectedImage(image)
        toggleSelected(image.id)
    }

    const toggleSelected = id => {
        setImages(images.map(image => (image.id === id ? { ...image, selected: true } : { ...image, selected: false })))
    }

    return (
        <div className="generator">
            <Form />
            <Frame selectedImage={selectedImage} />
            <Options images={images} selectImage={handleImageClick} />
        </div>
    )
}

export default Generator
