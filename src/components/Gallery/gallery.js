import React from 'react';
import { Link } from 'react-router';
import Home from 'components/Home/home';
import BrowserUtil from 'lib/BrowserUtil';
import Util from 'lib/Util';

let images = [];            
for (let i of Util.range(7)) {
    images.push({
        src: `img/galleryOpt/galery${i + 1}.jpg`
    });
}

  /*      
const images = [
    {
        src: 'img/galleryOpt/galery1.jpg'
    },
    {
        src: 'img/galleryOpt/galery2.jpg'
    },
    {
        src: 'img/galleryOpt/galery3.jpg'
    },
    {
        src: 'img/galleryOpt/galery4.jpg'
    },
    {
        src: 'img/galleryOpt/galery5.jpg'
    },
    {
        src: 'img/galleryOpt/galery6.jpg'
    },
    {
        src: 'img/galleryOpt/galery7.jpg'
    }
]
*/        
export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images
        };
    }

    componentDidMount() {
        var pic = document.getElementsByClassName('myImg');
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById("img01");
     
        for (var i = 0, len = pic.length; i < len; i++) {
            pic[i].addEventListener("click", function () {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        }
        
        var span = document.getElementsByClassName("close")[0];
        span.addEventListener('click', function () {
            modal.style.display = "none";
        });

    }
    render() {
        const browserUtil = new BrowserUtil();
        const picture = this.state.images.map((pic, i) => {
            //const imageSrc = browserUtil.convertImagePath(pic.src);

            return (
                <div className="image" key={i}>
                    <img className="myImg" key={i} src={pic.src} />
                    <div id="myModal" className="modal">
                        <span className="close">×</span>
                        <img className="modal-content" id="img01" key={i} src={pic.src} />
                    </div>
                </div>
            )
        });
        var divStyle = { backgroundImage: 'url(' + browserUtil.convertImagePath('img/pagesOpt/gallery.jpg') + ')' };
        return (
            <div className="gallery-content">
                <div>
                    <span className="gallery" style={divStyle}></span>
                    <div className="galleryHome">
                        <Link to="#/home"><Home /></Link>
                        <h3>Gallery</h3>
                    </div>
                </div>
                <div className="gallery-clearfix">
                    <div className="galleryImages">
                        <div >
                            {picture}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



/*
export default class Gallery extends React.Component {
    render() {
        var divStyle = { backgroundImage: 'url(' + 'img/pagesOpt/gallery.jpg' + ')' };
        return (
            <div className="gallery-content">
                <div className="section-inner">
                    <span className="gallery" style={divStyle}></span>
                    <div className="galleryHome">
                        <Link to="#/home"><Home /></Link>
                        <h3>Gallery</h3>
                    </div>
                </div>
                <div className="gallery-clearfix">
                    <div className="galleryImages">
                            <div className="image">
                                <img src="img/galleryOpt/back2.jpg" alt="" />
                            </div>

                        <div className="image">
                            <img src="img/galleryOpt/galery3.jpg" alt="" />

                        </div>
                        <div className="image">
                            <img src="img/galleryOpt/galery2.jpg" alt="" />

                        </div>
                        <div className="image">
                            <img src="img/galleryOpt/galery5.jpg" alt="" />

                        </div>
                        <div className="image">
                            <img src="img/galleryOpt/deal2.jpg" alt="" />

                        </div>
                        <div className="image">
                            <img src="img/galleryOpt/galery1.jpg" alt="" />

                        </div>
                        <div className="image">
                            <img src="img/galleryOpt/galery4.jpg" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
*/