import React from 'react';
import logo from './logo.svg';
import './tweet.css';


class Tweet extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          seconds: 0,
          sc: "https://cataas.com/cat/says/"
        };
      }
    
    componentDidMount() {
        this.interval = setInterval(() => this.setState(state => ({seconds: this.state.seconds+1})), 10000);
    }

    render(){
        return (
            <div className='tweet'>
                <img src={this.state.sc + this.state.seconds+"?size=0"} className='tweet'></img>
            </div>)
    }


}

export default Tweet