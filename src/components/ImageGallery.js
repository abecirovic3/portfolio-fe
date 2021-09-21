const ImageGallery = ( { images } ) => {
    return (
        <div className="photo-gallery">
            {images.map((img) => <img className="photo-gallery-img" key={img.id} src={img.imgUrl} alt="img" />)}
        </div>
    );
}

export default ImageGallery;