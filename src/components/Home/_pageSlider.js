//Not in use

import React from 'react';

let images = [
    {
        img:'pageSliders/opt1.jpg'
    },
    {
        img:'pageSliders/opt2.jpg'
    },
    {
        img:'pageSliders/opt3.jpg'
    },
    {
        img:'pageSliders/opt4.jpg'
    },
    {
        img:'pageSliders/opt5.jpg'
    },
    {
        img:'pageSliders/opt6.jpg'
    },
    {
        img:'pageSliders/opt7.jpg'
    },
    {
        img:'pageSliders/opt8.jpg'
    },
    {
        img:'pageSliders/opt9.jpg'
    }
]

export default class SlideShow extends React.Component{
    constructor() {
        super();
        this.state = {
            links: images,
            operator: "PLUS",
            pointer: 0
        };
    }
    
    componentDidMount() {
        var self = this;
        setInterval(function () {
            var pointer = self.state.pointer;
            var operator = self.state.operator;

            if (pointer === self.state.links.length - 1) {
                operator = "MINUS";
            } else if (pointer <= 0) {
                operator = "PLUS";
            }
            operator === "PLUS" ? pointer++ : pointer--;

            console.log("operator " + operator);
            console.log("pointer " + pointer);
            self.setState({ operator: operator, pointer: pointer });
        },5000);
    }
    
    render() {
        var pointedImage = this.state.links[this.state.pointer];
        console.log("pointedImage " + pointedImage.img);
        console.log("pointer " + this.state.pointer);
        var imageStyle = {
            color: 'white',
            backgroundImage: 'url(' + pointedImage.img + ')',
            WebkitTransition: 'all', 
            msTransition: 'all'
        };
        return (<span style={imageStyle}></span>);
    }
}


