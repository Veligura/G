import {connect} from 'react-redux';
import Login from '../../components/Login/login';



function mapStateToProps({login}) {

    return login;
}




export default connect(mapStateToProps)(Login)


