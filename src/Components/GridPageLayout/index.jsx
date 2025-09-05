import { useState } from "react";
import StarRating from "../StarRating";
import TicTacToe from "../TicTacToe";
import "./index.css";
import Modal from "../Modal";

const GridPageLayout = ({
    children,
    menuList,
    footerList
}) => {
    const [open, setOpen] = useState(false);
    const toggleModal = () => setOpen(!open);

    return (
        <div className="container">
            <div className="nav-bar"></div>
            <div className="menu-bar"></div>
            <div className="content-bar">
                <div>{children}</div>
                <StarRating totalStar={5} />
                <TicTacToe />
                <button onClick={toggleModal}>Open Modal</button>
                <Modal toggleModal={toggleModal} open={open} />
            </div>
            <div className="footer-bar"></div>
        </div>
    )
}

export default GridPageLayout;