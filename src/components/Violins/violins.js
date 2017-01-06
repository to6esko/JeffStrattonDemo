import React from 'react';
import {Link,hashHistory} from 'react-router';
import Gypsy from 'components/Violins/gypsy';
import Standard from 'components/Violins/standard';
import KirilPetrov from 'components/Violins/kirilPetrov';
import SemiCustom from 'components/Violins/semiCustom';
import RobertKantor from 'components/Violins/robertKantor';

export default class Violins extends React.Component{
    render() {
        return (
            <div className="violins">
                <h3>Violins</h3>
                <ul className="violins_content">
                <li><Link to="/violins/semiCustom">Semi Custom</Link></li>
                    <li><Link to="/violins/standard">Standard</Link></li>
                    <li><Link to="/violins/gypsy">Gypsy</Link></li>
                    <li><Link to="/violins/kirilPetrov">Kiril Petrov</Link></li>
                    <li><Link to="/violins/robertKantor">Robert Kantor</Link></li>
                </ul>
            </div>
        );
    }
}