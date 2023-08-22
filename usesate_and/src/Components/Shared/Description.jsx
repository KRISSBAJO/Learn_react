import React from "react";

const Description = () => {

    const myStyle = {
        color: "#212121",              // A deeper shade of red for the text
        backgroundColor: "#ffffff",    // Pure white background for better clarity
        padding: "20px",               // Increased padding for more spacing
        fontFamily: "'Arial', sans-serif", // Use Arial, but provide a fallback
        borderRadius: "10px",          // Rounded corners
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",  // Subtle box shadow for depth
        border: "1px solid #d1d1d1",   // A subtle border to define the boundary
        lineHeight: "1.5",             // Increased line height for readability
        fontSize: "16px",              // Standard font size for better readability
        letterSpacing: "0.5px",       // Slight letter spacing for a polished look
        textAlign: "center",          // Center aligned text
        transition: "background-color 0.3s ease" // Smooth transition on hover
        
    };
    
    
    const text = "LogoXP Music Store,\n We aim to delight you in every way !!";

    return (
        <p style={myStyle}>
            {text.split('\n').map((str, index) => 
                <React.Fragment key={index}>
                    {str}
                    {index !== text.split('\n').length - 1 && <br />}
                </React.Fragment>
            )}
        </p>
    );
}

export default Description;


