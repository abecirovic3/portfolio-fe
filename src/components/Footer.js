import Contact from "./Contact";
import { useLocation} from "react-router-dom";

const Footer = ({ contactInfo }) => {
    const location = useLocation();
    const marginTop = location.pathname === "/contact" ? "20px" : "auto";

    return (
        <div id="footer" className="footer" style={ { marginTop: marginTop } }>
            <h1 id="contact-me">Contact me</h1>
            <h3>Feel free to contact me, I'm currently looking for job or internship opportunities</h3>
            { <div className={"contact-container"}>
                    {contactInfo.map((contact) => (
                        <Contact key={contact.id} data={contact} />
                    ))}
                </div>
            }
        </div>
    );
}

export default Footer;