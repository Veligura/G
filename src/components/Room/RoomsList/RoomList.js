import React, { Component } from 'react';
import RoomItem from './RoomItem';
import './RoomList.css'

import {getUserRooms} from '../../../store/modules/rooms'

export default class RoomList extends Component {
    componentWillMount() {
        this.props.dispatch(getUserRooms())
    }


    joinToRoom = (target) => {
        console.log(target)
    }


    render() {

        return (
            <div className="roomList">
                <div className='title'>
                    List of rooms
                    <ul>
                        {this.props.rooms.rooms.filter((room) => room.githubType === "REPO").map((room) => <RoomItem
                            join={this.joinToRoom} key={room.id} room={room}/>
                        )}
                    </ul>
                    <ul>
                        {this.props.rooms.rooms.filter((room) => room.githubType === "ONETOONE").map((room) => <RoomItem
                            join={this.joinToRoom} key={room.id} room={room}/>
                        )}
                    </ul>


                </div>
            </div>
        )
    }
}
