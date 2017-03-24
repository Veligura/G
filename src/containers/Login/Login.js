import {connect} from 'react-redux';
import Login from '../../components/Login/login';
import { loginRequest } from '../../store/modules/login';



const mapDispatchToProps = {

   loginRequest

};

function mapStateToProps({login}) {

    return login;
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


