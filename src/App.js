import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)


        this.state = {
            city: '',
            teams: {
                'chicago': 'Bulls',
                'seattle': 'Trail Blazers',
                'new york': 'Knicks'
            }
        }
        this.updateMsg = this.updateMsg.bind(this)
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <h1>What's your favorite city?</h1>
                <div>
                    <input type='text' id="cityText" onKeyUp={this.updateMsg}/>
                </div>

                <div id="updateMsgDiv">
                    {this.message}
                </div>


            </div>
        );
    }

    updateMsg(e) {
        this.setState({city: e.target.value.toLowerCase()})

    }

    get message() {
        if (this.state.city === '')
            return 'Go ahead, type in a city'
        const team = this.state.teams[this.state.city]
        return team ? (<div>{`Go ${team}!`}</div>) : (<div>{`${this.state.city}? Never heard of it`}</div>)
    }
}

export default App;
