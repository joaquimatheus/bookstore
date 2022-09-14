import React, { useState } from "react";
import "../styles/sidebar.css";

export default function SidebarHeader() {
    const [ isExpended, setExpendedState] = useState(false);
    const menuItems = [
        {
            text: "Dashboard",
            icon: 'icons/grid.svg',
        },
        {
            text: "Manage Products",
            icon: 'icons/pie-chart.svg',
        },
        {
            text: "Orders",
            icon: 'icons/shopping-cart.svg'
        },
    ];

    return (
        <header>
            <nav className={isExpended ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
                <div className="nav-upper">
                    <div className="nav-heading">
                        { isExpended && (
                            <div className="nav-brand">
                                <img src="/icons/Logo.svg" alt="logo icon" />
                                <h2>Bookstore</h2>
                            </div>
                        )}
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
                    <div className="nav-menu">
                        {menuItems.map(({text, icon}) => 
                        <a className={isExpended ? "menu-item" : "menu-item menu-item-NX"} href={"#" + icon}>
                                <img src={icon} alt="" />
                                {isExpended && <p>{text}</p>}
                                {!isExpended && <div className="tooltip">{text}</div>}
                            </a> 
                        )}
                    </div>
                </div>
                <div className="nav-footer">
                    { isExpended && (
                        <div className="nav-details">
                            <img src="icons/admin-avatar.svg" alt="adm" />
                            <div className="nav-footer-info">
                                <p className="nav-footer-user-name">Zaken7</p>
                                <p className="nav-footer-user-position">Store Admin</p>
                            </div>
                            <img id="logout" className="logout-icon" src="icons/logout.svg" alt="" />
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
