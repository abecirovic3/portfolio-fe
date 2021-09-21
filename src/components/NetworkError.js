const NetworkError = ( { contactInfo } ) => {

    return (
        <div className="error-div">
            <h2>Couldn't load data, please report bug at: {contactInfo}</h2>
        </div>
    );
}

export default NetworkError;