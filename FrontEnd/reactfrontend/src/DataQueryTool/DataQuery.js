import React from 'react';
import Header from './../FirstPage/Header';
import Footer from './../FirstPage/Footer';
import DataQueryBody from './DataQueryBody';

class DataQuery extends React.Component {
    render(){
        return (
                <div>
                    <Header/>
                    <DataQueryBody/>
                    <Footer/>
                </div>
        )
    }
}
export default DataQuery;