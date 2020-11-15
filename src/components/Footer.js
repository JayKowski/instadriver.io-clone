import React from 'react';
import footerLinks from '../data/footerLinks';
import socialMediaLinks from '../data/socialMediaLinks';
import FooterLinkDiv from './FooterLinkDiv';
import SocialMedia from'./SocialMedia';
import '../stylesheets/Footer.css'

function Footer() {
    console.log(footerLinks)
    return (
        <div className="footer">
            <img alt="" src="https://instadriver.co/img/footerlogo.svg" />
            <div className="footer-links-container">
                {
                    footerLinks.map( links => (
                        <FooterLinkDiv data={links} />
                    ))
                }
                <ul className="social-med-links">
                    <h4>Social Media</h4>
                    {
                        socialMediaLinks.map( link => (
                            <SocialMedia data={link} />
                        ))
                    }
                </ul>
                <div className = "footer-links">
                    <h4 >Contact Info</h4>
                    <a className="link" href="#root" >saysomething@instadriver.co </a>
                </div>
            </div>
        </div>
    )
}
export default Footer;