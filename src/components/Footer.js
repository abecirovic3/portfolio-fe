import Contact from "./Contact";

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <h1 id="contact-me">Contact me</h1>
            <h3>Feel free to contact me, I'm currently looking for job or intership opportunities</h3>

            {/*we shall loop through all the contact info blocks which we fetch from the be */}
            {/*but for now let's make it static*/}
            <div className={"contact-container"}>
                <Contact data={
                    {
                        tag: "+387 61/039-208",
                        url: "",
                        imgUrl: "telephone.png"
                    }
                }/>
            </div>
        </div>
    );
}

export default Footer;