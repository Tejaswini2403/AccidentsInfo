import React from 'react';
import Header from './FirstPage/Header';
import Footer from './FirstPage/Footer';
import Body from './FirstPage/Body';

class MainPage extends React.Component {
    render(){
        return (
                <div>
                    <Header/>
                    <Body/>
                    <Footer/>
                </div>
        )
    }
}
export default MainPage;