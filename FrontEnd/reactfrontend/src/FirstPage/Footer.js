import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
class Footer extends React.Component {

    render(){
        return (
            <div className='text-center cont'>
                <div class="box1">
                <p style={{ color: 'black'}}>These Data are Not Live</p>
                </div>
            </div>
        )
    }
    
}
export default Footer;