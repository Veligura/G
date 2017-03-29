export const GET_USER_ROOMS = "ROOMS/GET_LIST_ROOMS";
const GET_USER_ROOMS_RECEIVED = "ROOMS/GET_USER_ROOMS_RECEIVED";
const GET_USER_ROOMS_FAILED = "ROOMS/GET_USER_ROOMS_FAILED";
const CHANGE_ROOM = "ROOMS/CHANGE_ROOM";


const initialState = {
    currentRoom: null,
    rooms: []
};


export default function (state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case GET_USER_ROOMS_RECEIVED:
            return {...state, rooms:action.payload};

        default:
            return state;
    }
};


export function getUserRooms () {
    return {type: GET_USER_ROOMS }
}

export function getUserRoomsReceived  (rooms) {
    return {type: GET_USER_ROOMS_RECEIVED, payload: rooms}
};