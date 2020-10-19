import React from "react";

function NewsletterSection() {

    const NewsletterSectionStyles = {
        height: "490px",
        position: "relative",
        backgroundImage: "linear-gradient(45deg, #8b83f9 0%, #a165f3 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1",
        position: "relative",
        top: "-60px"
    }

    const HeaderStyles = {
        width: "980px",
        position: "relative"
    }

    const TitleStyles = {
        fontSize: "50px",
        letterSpacing: "1px",
        lineHeight: "26px",
        color: "#ffffff",
        fontWeight: "700",
        fontFamily: "Open Sans",
        textAlign: "center",
        padding: "100px 0",
        zIndex: "100"
    }

    const WatermarkStyles = {
        fontSize: "100px",
        letterSpacing: "2px",
        lineHeight: "26px",
        color: "#fefe",
        fontWeight: "900",
        fontFamily: "Roboto",
        textAlign: "center",
        textTransform: "uppercase",
        padding: "100px 0",
        zIndex: "1",
        opacity: "10%",
        position: "absolute",
        top: "0",
        left: "162px"
    }

    const FormStyles = {
        width: "847px",
        height: "72px",
        borderRadius: "35px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "row"
    }

    const InputStyles = {
        borderRadius: "35px",
        border: "none",
        outline: "none",
        flex: "1",
        paddingLeft: "30px",
        fontSize: "18px"
    }

    const BtnStyles = {
        width: "198px",
        height: "60px",
        border: "none",
        borderRadius: "30px",
        backgroundImage: "linear-gradient(28deg, #8b83f9 0%, #9b6bf5 100%)",
        cursor: "pointer",
        outline: "none",
        margin: "6px",
        fontSize: "18px",
        color: "#fff"
    }


    return (
        <div className="newsletter-section" style={NewsletterSectionStyles}>
            <div className="newsletter-section-header" style={HeaderStyles}>
                <h4 className="newstletter-section-title" style={TitleStyles}>Newsletter</h4>
                <p className="newsletter-section-watermark" style={WatermarkStyles}>Get notified</p>                
            </div>
            <form className="newsletter-section-form" style={FormStyles}>
                <input type="email" placeholder="Enter your email address..." className="newsletter-section-input" style={InputStyles}/>
                <button type="submit" className="newsletter-section-btn" style={BtnStyles}>Submit</button>        
            </form>
        </div>
    )
}

export default NewsletterSection;