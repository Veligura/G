
const URL = 'https://api.gitter.im/v1/';


class Api {
    constructor(url){
      this.URL = url;
    }

    callApi(endpoint, token, options = {method: 'get'} ){

        const url = this.URL+endpoint;
            console.log(token, endpoint)
        return fetch(url,{
                ...options,
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }

        }).then(responce=>responce.json())
    }


    currentUser(token){

        return this.callApi('user', token)
    }

    currentUserRooms(token) {

        return this.callApi('rooms', token)
    }


}
const api = new Api(URL);

export default api