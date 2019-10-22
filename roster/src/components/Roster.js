import React from 'react'
import {connect} from 'react-redux'
import { selectPlayer } from '../actions';

class Roster extends React.Component {
    renderPlayers = () => {
        return this.props.players.map( (player) => {
            return(
                <div className="item">
                    <div className="right floated content">
                    <button 
                        className="ui button primary"
                        onClick={() => this.props.selectPlayer(player)}
                        >
                        Select
                    </button>
                </div>
                    <div className="content">{player.firstName}</div>
                    <div className="content">{player.lastName}</div>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="ui divided list">{this.renderPlayers()}</div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {players: state.players};
}
export default connect(mapStateToProps, {
    selectPlayer: selectPlayer 
})(Roster);