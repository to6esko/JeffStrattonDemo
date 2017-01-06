import React from 'react';
import {Router, Route, Link,hashHistory} from 'react-router';

import Leault from './leault';
import Home from 'components/Home/home';
//import SlideShow from 'components/Home/pageSlider';
//import Sliders from 'components/Home/sliders';
import Vegas from 'components/Home/vegas';

export default class App extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div id="home">
                <div>
                    <Vegas/>
                </div>
                <div className="container">
                    <Home/>
                </div>
                <div className="containerLeault">
                    <Leault/>
                </div>
            </div>
        );
    }
}