import React , {Component} from 'react';
import './RoomItem.css'

export default  class RoomItem extends Component{
    joinToRoom=()=>{
        this.props.join(this.props.room.id)
        console.log(this.props.room)
    }

    render (){return (
        <li onClick={this.joinToRoom} ><div> <img src={this.props.room.avatarUrl} alt=""/> </div> <div>{this.props.room.name}</div></li>
    )}
}
