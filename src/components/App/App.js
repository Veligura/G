import React, {Component} from 'react';

/**
 * Main component
 */
export default class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="container">
                    {this.props.children}
                </div>

            </div>
        );
    }
}