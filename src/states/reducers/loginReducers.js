const loginDetails = { status: false, id: "", name: "", ph: "",userphoto:"", userstatus:"",role:0,address:"",email:"" };
const loginReducers = (state = loginDetails, action) => {
    if (action.type === 'login') {
        if (action.payload.status === true) {
            return {
                ...state,
                status: true,
                id: action.payload.data._id,
                name: action.payload.data.username,
                ph: action.payload.data.ph,
                userphoto:action.payload.data.userphoto,
                userstatus:action.payload.data.status,
                role:action.payload.data.role,
                address: action.payload.data.address,
                email:action.payload.data.email
            }
        }
        else {
            return {
                ...state,
                status: false,
                id: "",
                name: "",
                ph: "",
                userphoto:"",
                userstatus:"",
                role:0,
                address:"",
                email:""
            }
        }
    }

    else if (action.type === 'logout') {
        localStorage.removeItem('token');
        return {
            ...state,
            status: false,
            id: "",
            name: "",
            ph: "",
            userphoto:"",
            userstatus:"",
            role:0,
            address:"",
            email:""
        }
    }
    return state;
}

export default loginReducers;