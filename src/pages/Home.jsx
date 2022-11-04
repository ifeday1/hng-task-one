import React from "react";
import Option from "../components/Option";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Slack } from "../assets/slack.svg";
import "./Home.css";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import Footer from "../components/Footer";


const Main = () => {
    return (
        <div>
            <Profile />

            <div className="main">
                <Option
                    title="Twitter Link"
                    to="https://twitter.com/IfeoluwaOladeni"
                    id="twitter__link"
                />
                <Option
                    title="Zuri Team"
                    to="https://training.zuri.team/"
                    id="btn__zuri"
                />
                <Option
                    title="Zuri Books"
                    link="https://books.zuri.team/"
                    id="books"
                />
                <Option
                    title="Python Books"
                    to="https://books.zuri.team/python-for-beginners?ref_id=Ifeday"
                    id="book__python"
                />
                <Option
                    title="Background Check for Coders"
                    to="https://background.zuri.team/"
                    id="pitch"
                />
                <Option
                    title="Design Books"
                    link="https://books.zuri.team/design-rules"
                    id="book__design"
                />
                <Option
                    title="Contact"
                    to="/contact"
                    id="contact"
                />



                <div className="social-media">
                    <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U">
                        <Slack />
                    </a>

                    <a href="https://github.com/ifeday1">
                        <Github />
                    </a>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
