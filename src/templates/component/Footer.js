import React from "react";
import { Link } from "react-router-dom";

import github from "../../static/images/GithubLogo.png";
import blog from "../../static/images/TstoryLogo.png";
import youtube from "../../static/images/YoutubeLogo.png";

function Footer() {
    return (
        <footer id="footer">
            <div className="inner">
                <h3>CONTACT ME</h3>
                <ul className="links">
                    <li>
                        <Link to="https://github.com/tuy112">
                            <img src={github} alt="깃허브" />
                            <em>GITHUB</em>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://jh-healing-place.tistory.com/">
                            <img src={blog} alt="티스토리" />
                            <em>BLOG</em>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com/channel/UCIUZejYbHXZOHhwUokcRBUQ">
                            <img src={youtube} alt="유튜브" />
                            <em>YOUTUBE</em>
                        </Link>
                    </li>
                </ul>
                <div className="always">
                    <p>Do your Best, Then Good Result will be following you :&#41;</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;