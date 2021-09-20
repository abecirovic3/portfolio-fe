import Technology from "./Technology";

const Technologies = () => {
    return (
        <>
            <h1>Technologies I worked with</h1>
            <h3>With listing all of these technologies I just want to say that I have a basic understanding of all of them,
                and that I'm open to working with any and getting more skilled at them when needed.</h3>

            {/*we shall loop through all the technologies which we fetch from the be */}
            {/*but for now let's make it static*/}

            <Technology data={
                {
                    name: "C",
                    description: "First language I used in collage was C back in 2018. Working with C for one semester taught me a lot, from simple command line input output, over manipulating strings character by character, to working with a little bit more complex data with structures. Later I used C for simple embeded applications.",
                    skill: 30,
                    imgUrl: "c.png"
                }
            }/>
        </>
    );
}

export default Technologies;