import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../states";
import { ApiContext } from "./Apicontext";

export const UserAuthContext = createContext();

export const UserStates = (props) => {

    const context = useContext(ApiContext);
    const { getApi,getRegisterApi } = context;
    const dispatch = useDispatch();
    const { Login } = bindActionCreators(actionCreators, dispatch)
    const history = useNavigate();
    useEffect(() => {
        const getCsrftoken = async()=>{
            var apihost = process.env.REACT_APP_API_URL;
            const {data}= await axios.get(`${apihost}/getcsrf`);
            axios.defaults.headers.post['X-CSRF-Token'] = data.getCsrftoken;
        }

        getCsrftoken();
        async function userData() {
            const res = await getUser();
            Login(res);
        }

        if (localStorage.getItem('token')) {
            userData();
        }
        else {
            history('/');
        }
    }, [])

    //Sign up
    const createUser = async (username,  email,  password, cpassword) => {

        const response = await getApi('/api/auth/createuser', 'POST', { username:username, email: email, password: password, cpassword:cpassword }, "");
        return response;
      
    }

    //Login 
    const login = async (email, password) => {
        const response = await getApi('/api/auth/userlogin', 'POST', { email: email, password: password }, "");
        return response;
    }

    //Get User Data
    const getUser = async () => {
        const response = await getApi('/api/auth/getuser', 'POST', {}, localStorage.getItem('token'));
        return response;
    }

    //Update user basic data
    const updateBasicdetails = async(data)=>{
        const  response = await getApi('/api/auth/updatebasicdetails','PUT',data,localStorage.getItem('token'));
        return response;
    }

     //Change profile picture
     const changeprofilepic = async(data)=>{
        const formData = new FormData();
        formData.append('userphoto', data.userphoto);
        const response = await getRegisterApi('/api/auth/changeprofilepic', 'POST', formData, localStorage.getItem('token'));
        return response;
    }

    //Change password
    const changePassword = async (data)=>{
        const response = await getApi('/api/auth/changepassword','POST',data,localStorage.getItem('token'));
        return response;
    }
    return <UserAuthContext.Provider value={{ createUser, login, getUser, updateBasicdetails, changeprofilepic, changePassword }}>
        {props.children}
    </UserAuthContext.Provider>
}

export default UserStates;
