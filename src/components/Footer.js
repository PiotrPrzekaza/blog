import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <div className="site-footer">
        <h4 className="test-center">
            devHot
        </h4>
        <p className="text-center text-uppercase">Moje media społecznościowe</p>
        <div className="footer-social-links">
            <ul className="social-links-list">
                <li><a href="https://www.facebook.com/piotr.przekaza" target="_blank" rel="noopener noreferrer" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a></li>
                <li><a href="https://www.instagram.com/piotrprzekaza/" target="_blank" rel="noopener noreferrer" className="instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a></li>
                <li><a href="https://twitter.com/PrzekazaPiotr" target="_blank" rel="noopener noreferrer" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a></li>
                <li><a href="https://github.com/PiotrPrzekaza" target="_blank" rel="noopener noreferrer" className="github">
                    <FontAwesomeIcon icon={faGithub} />
                </a></li>
                <li><a href="https://www.linkedin.com/in/piotr-przekaza-9540b8172/" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a></li>
            </ul>
        </div>
    </div>
)

export default Footer