import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';
import Leault from 'components/leault';

export default class Contact extends React.Component{
    render() {
        let divStyle = { backgroundImage: 'url(' + 'img/pagesOpt/contactLinksLowRes.jpg' + ')' };
        let instaramImg = { backgroundImage: 'url(' + 'img/icons/Instagram-icon.png' + ')', width: 25, height: 25 };
        let faceBookImg = { backgroundImage: 'url(' + 'img/icons/facebook-icon.png' + ')', width: 25, height: 25 };
        let pinterestImg = { backgroundImage: 'url(' + 'img/icons/pinterest-icon.png' + ')', width: 25, height: 25 };
        let youtubeImg = { backgroundImage: 'url(' + 'img/icons/youtube-icon.png' + ')', width: 25,height:25};
        return (
            <div>
                <div className="section-inner">
                        <span className="contact" style={divStyle}></span>
                    <div className="contactHome">
                        <Link to="#/home"><Home /></Link>
                    </div>
                    <div className="contacktLeault">
                        <Leault />
                    </div>
                    
                    <div className="contactList">
                        <div className="links">
                            <h3>Links</h3>
                        <p><a href="http://www.kdbasses.com/" target="_blank">KD Basses</a></p>
                            <p> <a href="http://www.jampedals.com/" target="_blank">Jam Pedals</a></p>
                            <p><a href="http://www.kantorguitars.com/" target="_blank">Kantor Guitars</a></p>
                            <p><a href="http://www.barberatransducers.com/" target="_blank">Barbera Transducer</a></p>
                            <p><a href="http://svisound.com/index.php?lang=en" target="_blank">SviSound</a></p>
                        </div>
                        <div className="dealers">
                            <h3>Dealers</h3>
                        <p><a href="http://www.electricviolinshop.com/skull.html" target="_blank">Electric Violin Shop</a></p>
                        <p>USA</p>
                            <p><a href="http://www.kurosawaviolin.com/evn_bass/skull_vn/index.html" target="_blank">T.Kurosawa & Co</a></p>
                            <p>Japan</p>
                        </div>
                        <div className="contacts">
                            <h3>Contact</h3>
                            <p>Phone: 760-444-4161</p>
                            <p>Jeff Stratton</p>
                            <p> Email:</p>
                            <p>strattonviolin@gmail.com</p>
                            <p>jeff@strattonviolin.com</p>
                        </div>
                        <div className="social">
                            <h3>Social</h3>
                            <p><a href="https://www.facebook.com/Stratton-Violin-356861030998166/" style={faceBookImg} className="socialFaceBook" target="_blank">FaceBook</a></p>
                            <p><a href="https://www.instagram.com/strattonviolin/?hl=en" style={instaramImg} className="socialInstagram" target="_blank">Instagram</a></p>
                            <p><a href="https://www.pinterest.com/pin/458030224579731449/" style={pinterestImg} className="socialPinterest" target="_blank">Pinterest</a></p>
                            <p><a href="https://www.youtube.com/user/strattonviolin/videos" style={youtubeImg} className="socialYoutube" target="_blank">You Tube</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}