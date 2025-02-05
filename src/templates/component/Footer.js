import React, { memo } from "react";
import { Link } from "react-router-dom";

import github from "../../static/images/GithubLogo.png";
import blog from "../../static/images/TstoryLogo.png"; 
import youtube from "../../static/images/YoutubeLogo.png";

const socialLinks = [
    {
        url: "https://github.com/tuy112",
        img: github,
        alt: "깃허브", 
        text: "GITHUB"
    },
    {
        url: "https://jh-healing-place.tistory.com/",
        img: blog,
        alt: "티스토리", 
        text: "BLOG"
    },
    {
        url: "https://www.youtube.com/channel/UCIUZejYbHXZOHhwUokcRBUQ",
        img: youtube,
        alt: "유튜브",
        text: "YOUTUBE"
    }
];

const Footer = memo(() => {
    return (
        <footer id="footer">
            <div className="inner">
                <h3>CONTACT ME</h3>
                <ul className="links">
                    {socialLinks.map(({ url, img, alt, text }) => (
                        <li key={text}>
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <img src={img} alt={alt} />
                                <em>{text}</em>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="always">
                    <p>Do your Best, Then Good Result will be following you :&#41;</p>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;