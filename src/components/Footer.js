import Contact from "./Contact";
import { useState, useEffect} from "react";
import NetworkError from "./NetworkError";
import { useLocation} from "react-router-dom";

const Footer = () => {
    const [contactInfo, setContactInfo] = useState([]);
    const [networkError, setNetworkError] = useState(false);

    const location = useLocation();
    const marginTop = location.pathname === "/contact" ? "20px" : "auto";

    useEffect(() => {
        fetch('http://localhost:5000/contact/all')
            .then(response => {
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");
                return response.json();
            })
            .then(data => setContactInfo(JSON.parse(data)))
            .catch(err => {
                setNetworkError(true);
            });

    }, []);

    return (
        <div id="footer" className="footer" style={ { marginTop: marginTop } }>
            <h1 id="contact-me">Contact me</h1>
            <h3>Feel free to contact me, I'm currently looking for job or internship opportunities</h3>
            { networkError ? <NetworkError contactInfo="ajdinrs.becirovic@gmail.com" /> :
                <div className={"contact-container"}>
                    {contactInfo.map((contact) => (
                        <Contact key={contact.id} data={contact} />
                    ))}
                </div>
            }
        </div>
    );
}

export default Footer;