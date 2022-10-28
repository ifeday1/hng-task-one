import React from "react";
import Option from "../components/Option";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Slack } from "../assets/slack.svg";
import "./Main.css";

const Main = () => {
    return (
        <div className="main">
            <Option
                title="Twitter Link"
                link="https://twitter.com/IfeoluwaOladeni"
                id="twitter"
            />
            <Option
                title="Zuri Team"
                link="https://training.zuri.team/"
                id="btn_zuri"
            />
            <Option
                title="Zuri Books"
                link="https://books.zuri.team/"
                id="books"
            />
            <Option
                title="Python Books"
                link="https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E"
                id="book_python"
            />
            <Option
                title="Background Check for Coders"
                link="https://background.zuri.team/"
                id="pitch"
            />
            <Option
                title="Design Books"
                link="https://books.zuri.team/design-rules"
                id="book_design"
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
    );
};

export default Main;
