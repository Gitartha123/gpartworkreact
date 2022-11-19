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
    const createUser = async (username, address, email, ph, password, cpassword,userphoto) => {
        const formData = new FormData();
        formData.append('userphoto', userphoto);
        formData.append('username', username);
        formData.append('address', address);
        formData.append('ph', ph);
        formData.append('password', password);
        formData.append('cpassword', cpassword);
        formData.append('email', email);

        const response = await getRegisterApi('/api/auth/createuser', 'POST', formData, "");
        return response;
      

        
        // axios.post('http://localhost:5000/api/auth/createuser',formData).then(res => {
        //     return res;
        //  })
        //  .catch(err => {
        //     console.log(err);
        //  });
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

     //Update user contact  data
     const updateContactdetails = async(data)=>{
        const  response = await getApi('/api/auth/updatecontactdetails','PUT',data,localStorage.getItem('token'));
        return response;
    }

    //Check user current password
    const checkCurrentpassword = async (data)=>{
        const response = await getApi('/api/auth/checkcurrentpassword','POST',data,localStorage.getItem('token'));
        return response;
    }
    return <UserAuthContext.Provider value={{ createUser, login, getUser, updateBasicdetails, updateContactdetails, checkCurrentpassword }}>
        {props.children}
    </UserAuthContext.Provider>
}

export default UserStates;
