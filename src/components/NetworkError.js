const NetworkError = ( {contactInfo} ) => {
    return (
        <div className="error-div">
            <h2>An error occurred while fetching page content data</h2>
            <h2>Please report this bug at: {contactInfo}</h2>
        </div>
    );
}

export default NetworkError;