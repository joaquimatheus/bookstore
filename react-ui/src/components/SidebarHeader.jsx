import React, { useState } from "react";
import "../styles/sidebar.css";

export default function SidebarHeader() {
    const [ isExpended, setExpendedState] = useState(false);

    return (
        <header>
            <nav className={isExpended ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
                <div className="nav-upper">
                    <div className="nav-heading">
                        <div className="nav-brand">
                            <img src="/icons/Logo.svg" alt="logo icon" />
                            <h2>Bookstore</h2>
                        </div>
                        <button
                            className={
                                isExpended
                                    ? "toggle-button toggle-button-in"
                                    : "toggle-button toggle-button-out"
                            }

                            onClick={ () => setExpendedState(!isExpended) }
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
