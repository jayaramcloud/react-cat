import React from 'react';
import logo from './logo.svg';
import './centerSection.css';
import Tweet from './tweet';

class CenterSection extends React.Component{
    
    render(){
        return (
            <div className='centerSection'>
                <Tweet startTimeInSeconds="300" text="test"/>
            </div>)
    }


}

export default CenterSection