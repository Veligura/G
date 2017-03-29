import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import {getUserRooms} from '../../store/modules/rooms';
import Header from '../../components/Room/Header/Header';
import RoomList from '../../components/Room/RoomsList/RoomList';
import ChatRoom from '../../components/Room/ChatRoom/ChatRoom';



 class App extends Component {

    render() {
        console.log(this)
        return (

            <div className="app">
                <Header/>
                <div className="chatContainer">
                    <RoomList rooms={this.props.rooms} dispatch={this.props.dispatch} ></RoomList>
                    <ChatRoom></ChatRoom>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps={
     getUserRooms
}



function mapStateToPprops(props){

    return props;
}



export default connect(mapStateToPprops)(App);

