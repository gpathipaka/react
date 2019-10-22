import React, {Component} from 'react'
import Roster from './Roster'


class App extends Component {
    render() {
        return(
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column five wide">
                        <Roster />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;