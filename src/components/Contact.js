const Contact = ( { data } ) => {

    let logo = {
        default: "img"
    };

    try {
        if (data.imgUrl.includes("http"))
            logo.default = data.imgUrl;
        else
            logo = require(`../img/icons/${data.imgUrl}`);
    } catch (e) {
        console.log(e);
    }

    return (
        <div className="contact" onClick={() => {
            if (data.url)
                window.open(data.url, '_blank');
        }}>
            <img className="div-sep" src={logo.default} alt={"logo"} />
            <p className="div-sep">{data.tag}</p>
        </div>
    );
}

export default Contact;