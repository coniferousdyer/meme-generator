import { useState, useEffect } from "react"
import html2canvas from 'html2canvas';
import Options from "./Options"
import AddText from "./AddText"
import Frame from "./Frame"

const Generator = () => {
    const [images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)
    const [texts, setTexts] = useState([])

    // Download the image
    const handleDownloadImage = () => {
        html2canvas(document.querySelector(".frame"), { allowTaint: true, useCORS: true }).then(canvas => {
            const link = document.createElement('a')
            link.href = canvas.toDataURL()
            link.download = 'meme.png'
            link.click()
        });
    }

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

    const addNewText = text => {
        const id = texts.length + 1
        setTexts([...texts, { id, ...text }])
    }

    const deleteText = id => {
        setTexts(texts.filter(text => text.id !== id))
    }

    const toggleSelected = id => {
        setImages(images.map(image => (image.id === id ? { ...image, selected: true } : { ...image, selected: false })))
    }

    return (
        <div className="generator">
            <AddText addNewText={addNewText} />
            <Frame selectedImage={selectedImage} texts={texts} onDelete={deleteText} />
            <button id="download-button" onClick={handleDownloadImage}>Download</button>
            <Options images={images} selectImage={handleImageClick} />
        </div>
    )
}

export default Generator
