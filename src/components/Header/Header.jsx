import React from 'react';
import logotrans from '../../logotrans.png'


function Header(props) {
    return(
        <div className="row row-space">
            <div className="col-md-12" style={{ padding:0}}>
                <div className="titlebar-nav">
                <img src={logotrans} alt="Clone Tube" width="10%" height="10%"/><h1>Clone Tube React</h1>
                </div>
            </div>
        </div>
            )
}

export default Header;