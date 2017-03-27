import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import RoomList from '../../components/RoomsList/RoomList';
import ChatRoom from '../../components/ChatRoom/ChatRoom';



 class App extends Component {

    render() {
        return (
            <div className="app">
              <RoomList></RoomList>
                <ChatRoom></ChatRoom>
            </div>
        );
    }
}





function mapStatetoprops(props){

    return props;
}


export default connect(mapStatetoprops)(App);

