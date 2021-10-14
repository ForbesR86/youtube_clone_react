import React from 'react';
import logotrans from '../../logotrans.png'
import SearchBar from '../SearchBar/SearchBar'


function Header(props) {
    return(
                <>
                    <div class="container-fluid">
                    <div class="row">
                        <div class="well span2">
                        <img src={logotrans} alt="Clone Tube" width="10%" height="10%" />
                        </div>

                        <div class="col-8">
                            <SearchBar />
                        </div>
                        <div class="col-2"></div>
                    </div>
                </div>
                <hr/>
                
                </>
            )
}

export default Header;