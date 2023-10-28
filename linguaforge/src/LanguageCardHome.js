import React from "react";
import './LanguageCardHome.css'

function LanguageCard({ title, children }) {
    return (
        <div className="Card">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
}

export default LanguageCard;
