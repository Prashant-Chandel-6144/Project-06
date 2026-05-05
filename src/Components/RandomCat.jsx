function RandomCat({ id, name, description, image, url }) {
    return (
        <div>

            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{description}</p>
            <button className="small-btn" onClick={() => window.open(url, '_blank')}>
                Visit Website
            </button>
        </div>
    );
}

export default RandomCat;