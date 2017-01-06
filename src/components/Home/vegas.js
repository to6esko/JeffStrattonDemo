import React from 'react';
import vegas from 'vegas';
import Util from 'lib/Util';

let images = [];            
for (let i of Util.range(9)) {
    images.push({
        src: `img/pageSlidersOpt/${i + 1}.jpg`
    });
}

  /*      
const images = [
    {
        src: 'img/pageSlidersOpt/1.jpg'
    },
    {
        src: 'img/pageSlidersOpt/2.jpg'
    },
    {
        src: 'img/pageSlidersOpt/3.jpg'
    },
    {
        src: 'img/pageSlidersOpt/4.jpg'
    },
    {
        src: 'img/pageSlidersOpt/5.jpg'
    },
    {
        src: 'img/pageSlidersOpt/6.jpg'
    },
    {
        src: 'img/pageSlidersOpt/7.jpg'
    },
    {
        src: 'img/pageSlidersOpt/8.jpg'
    },
    {
        src: 'img/pageSlidersOpt/9.jpg'
    }
]
*/
export default class Vegas extends React.Component{
    componentDidMount() {

        $('body').vegas({
            slides: images,
            animation: 'kenburns'
            //transition: 'zoomIn'        
        });
    }
    render() {
        return (<span></span>);
    }
}

/*
//Not in use for Low Res
export default class Vegas extends React.Component{
    componentDidMount() {  
        const browserUtil = new BrowserUtil();

        let images = [];
            
        for (let i of Array(9).keys()) {
            images.push({
                src: `img/pageSlidersOpt/${i + 1}.jpg`
            });
        }

        const convertedImages = images.map(image => {
            image.src = browserUtil.convertImagePath(image.src);

            return image;
        });        

        $('body').vegas({
            slides: convertedImages,
            animation: 'kenburns'
            //transition: 'zoomIn'        
        });
    }
    
    render() {
        return (<span></span>);
    }
}
*/