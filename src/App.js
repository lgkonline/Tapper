import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        parts: [
            require("./images/homer/1_homer.png"),
            require("./images/homer/2_homer.png"),
            require("./images/homer/3_homer.png"),
            require("./images/homer/4_homer.png")
        ],
        current: 0
    };

    componentWillMount() {
        this.onClick = this.onClick.bind(this);
        this.replay = this.replay.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        const next = this.state.current + 1;
        if (this.state.parts[next]) {
            this.setState({ current: next });
        }
    }

    replay() {
        this.setState({ current: 0 });
    }

    render() {
        return (
            <div className="App">
                <div>
                    <img src={this.state.parts[this.state.current]} alt="Homer" onClick={this.onClick} />

                    <button className="btn" disabled={this.state.current === 0} onClick={this.replay}>
                        <span className="icon-loop2" />
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
