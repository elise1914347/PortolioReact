import React from "react";
import Typical from 'react-typical'
import "./Profile.css"

export default function Profile(){
    return(
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                        <a href="https://web.facebook.com/marie.elise.3994">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-google-plus-square"></i>
                        </a>
                        <a href="https://www.instagram.com/elise__450/">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/watch?v=FfxkBWJNihg&list=RDMM&index=8">
                            <i className="fa fa-youtube-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                        </div>
                    </div>   
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello,I'M <span className="high lighted-text">Elise</span>
                        </span> 
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Software Developer ",
                                500,
                                "WebDesign dev",
                                500,
                                "Full Stack Developer",
                                500,
                                "React/react Native dev",
                                500,
                                "Mern Developer",
                                500

                            ]}
                            />

                        </h1>
                        <span className="profile-role-tagLine">
                            Knack of building applications with frontEnd And Backend Operations.
                        </span>
                    </span>
                </div>
                <div className="profile-optins">
                    <button className="btn primary-btn">
                        {""}
                        Hire Me {""}
                    </button>
                    <a href="#">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>

        </div>
    )
}
