import querystring from 'query-string';
import openPopup from './popup';

const client_id = "87e58c8fc4350e66f0ce39b115d6dcfca07d1d18";
const client_secret = "54fe3dcbbfaf9fea81e60c922040e4b67e75b257";
const redirect_uri = "http://localhost:3000/#";
const  url = "https://gitter.im/login/oauth/authorize"


const code = /[?code=]/;

const listenForCredentials = (popup, resolve, reject) => {

    let hash;
    try {
        hash = popup.location.search.match(code) ? popup.location.search : ''

    } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
            /* eslint-disable no-console */
            console.error(err)
            /* eslint-enable no-console */
        }
    }

    if (hash) {
        popup.close();
        const response = querystring.parse(hash);
        resolve(response);
    } else if (popup.closed) {
        reject('Authentication was cancelled.')
    } else {
        setTimeout(() => listenForCredentials(popup, resolve, reject), 100)
    }

}

const authorize = () => {

    const query = querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        redirect_uri: redirect_uri
    });

    const popup = openPopup(url + '?' + query, 'oauth2')


    return new Promise((resolve, reject) => {


        new Promise((res, resj) => listenForCredentials(popup, res, resj)).then(({code}) => {

            const params = {
                'client_id': client_id,
                'client_secret': client_secret,
                'code': code,
                'redirect_uri': redirect_uri,
                'grant_type': "authorization_code"
            };

            const requestData = Object.keys(params).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
            }).join('&');


            return fetch('http://cors-anywhere.herokuapp.com/https://gitter.im/login/oauth/token', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json"
                },
                body: requestData
            })
        }).then((responce) => responce.json()).then(result => resolve(result.access_token)).catch((e) => reject(e));

    });


}


export default authorize