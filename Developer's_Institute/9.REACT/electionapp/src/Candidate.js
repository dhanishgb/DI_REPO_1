import './Candidate.css';
import React from 'react';

class Candidate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0 // Initial votes set to 0
        };
    }

    increaseVote = () => {
        this.setState({ votes: this.state.votes + 1 });
    };

    decreaseVote = () => {
        if (this.state.votes <= 0) {
            return;
        }
        this.setState({ votes: this.state.votes - 1 });
    };

    render() {
        return (
            <li
                style={{
                    fontSize: this.state.votes + 10,
                    color: this.state.votes > 10 ? 'red' : 'blue'
                }}
            >
                {this.props.name} from {this.props.party} has {this.state.votes} votes
                <button onClick={this.increaseVote}>Increase Vote</button>
                <button onClick={this.decreaseVote}>Decrease Vote</button>
            </li>
        );
    }
}

export default Candidate;

