const AboutMe = ( { aboutMeText } ) => {
    return (
        <>
            <h1>About me</h1>
            <h2>{aboutMeText.content}</h2>
            <hr />
        </>
    );
}

export default AboutMe;