const data = {status:true};
const  loginwithoutOrder = (state = data,action)=>{
    if(action.type === 'setLogin'){
        return {
            ...state,
            status:false
        }
    }
    else if (action.type === 'setLogout'){
        return {
            ...state,
            status:true
        }
    }
    return state;
}

export default loginwithoutOrder