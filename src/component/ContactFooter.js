import React from 'react'
import "./ContactFooter.css"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const ContactFooter = () => {
    return (
        <>

            <div className="footer" >

                {/* <p>footer</p> */}
                <div className="footer1">
                    <div> <a href="https://www.instagram.com/sumitrmali18__vlk/" target="_blank"><InstagramIcon className="hover" /> </a></div>
                    <div><a href="#" target="_blank"> <WhatsAppIcon className="hover" /></a></div>
                    <div><a href="https://www.facebook.com/sumit.mali.374" target="_blank"><FacebookIcon className="hover" /></a></div>
                    <div><a href="https://www.linkedin.com/in/sumit-mali-5963341a8" target="_blank"><LinkedInIcon className="hover" /></a></div>
                    <div><a href="https://github.com/malisumit86" target="_blank"><GitHubIcon className="hover" /></a></div>
                    <div><a href="#" target="_blank" ><TwitterIcon className="hover" /></a> </div>

                </div>
                <div className="footer1"> &copy; Copyright By Sumit Mali</div>
            </div>

        </>
    )
}

export default ContactFooter
