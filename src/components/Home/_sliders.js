//Not in use

import React from 'react';

let images = [
    {
        img:'img/pageSliders/1.jpg'
    },
    {
        img:'img/pageSliders/2.jpg'
    },
    {
        img:'img/pageSliders/3.jpg'
    },
    {
        img:'img/pageSliders/4.jpg'
    },
    {
        img:'img/pageSliders/5.jpg'
    },
    {
        img:'img/pageSliders/6.jpg'
    },
    {
        img:'img/pageSliders/7.jpg'
    },
    {
        img:'img/pageSliders/8.jpg'
    },
    {
        img:'img/pageSliders/9.jpg'
    }
]

export default class Sliders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: images,
            myIndex: 0
        };
    }
    countInterval() {
        var i,
            self = this,
            myIndex = self.state.myIndex,
            counter = self.state.links;
        
            for (i = 0; i < counter.length-1; i++) {
                counter = counter[i];
            }
            myIndex++;
            if (myIndex > self.state.links.length - 1) {
                myIndex = 0;
            }
            self.setState({ links: self.state.links, myIndex });
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.countInterval();
        }, 6000); 
    }
    componentWillUnmount() {
        clearInterval(this.interval);
  }
    
    render() {
        var pointedImage = this.state.links[this.state.myIndex];
        var imageStyle = {
            backgroundImage: 'url(' + pointedImage.img + ')',
            WebkitTransition: 'all',
            msTransition: 'all'
        };
        return (
            <div className="slide-content">
            <div className="slideShow">
                <span style={imageStyle}></span>    
            </div>
                </div>
        );
    }
}