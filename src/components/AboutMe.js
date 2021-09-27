const AboutMe = ( { aboutMeText } ) => {
    return (
        <>
            <h1>About me</h1>
            { !aboutMeText || aboutMeText.content === "static" ?
            <h2>Hello, my name is Ajdin Bečirović and I am 23. I'm currently finishing my BoEE degree.
                I'm a passionate Linux user and I've worked with many different technologies throughout
                my time at college. I'm a team player and I'm always willing to learn more and get better
                at what I already know. I’ve worked really hard in these 3 years at college, but am aware
                that I still have a mountain to climb when it comes down to working on real projects.
                For now I want to work on some of my own projects and finish my degree, but I'm hoping
                that the future will bring some job or internship opportunities.</h2>
            : aboutMeText.map(t => (
                    <h2 key={t.id}>{t.content}</h2>
                )) }
            <hr />
        </>
    );
}

export default AboutMe;