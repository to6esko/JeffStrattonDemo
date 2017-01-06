import React from 'react';
import {Link} from 'react-router';
import Home from 'components/Home/home';
import BrowserUtil from 'lib/BrowserUtil';

export default class Standard extends React.Component{
    
    render() {
        const browserUtil = new BrowserUtil();

        var divStyles = { backgroundImage: 'url(' + browserUtil.convertImagePath('img/modelPagesOpt/standard2.jpg') + ')' };
        return (
            <div className="section-inner">
                <div>
                    <span className="standard"></span>
                    <span className="back" style={divStyles}></span>
                </div>
                <div className="modelHome">
                <Link to="#/home"><Home/></Link>
                </div>
                <div className="content">
                    <h3 className="price">The</h3>
                    <h3 className="price1">Standard Body</h3>
                    <p className="name">
                        This is the production model of my line <br />of violins.
                    </p>
                    <p className="name">
                        Also available with custom finishes.
                    </p>
                    <div className="text">
                        <p>Solid wood Body</p>
                        <p>Maple neck</p>
                        <p>Ebony finger board</p>
                        <p>Ebony pegs and chinrest</p>
                        <p>Solid brass "Stratton Violin" hardware</p>
                        <p>Your choice of 4 or 5 string</p>
                        <p>Barbera twin hybrid bridge</p>
                        <p>Custom colors and finishes on request</p>
                    </div>
                    <h3 className="price2"><p>4 String $2000.00 &nbsp;&nbsp;&nbsp;</p><p>5 String $2200.00</p></h3>
                </div>
            </div>    
        );
    }
}