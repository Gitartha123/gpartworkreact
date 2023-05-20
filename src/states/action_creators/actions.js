export const passwordHideandSeek = (id)=>{
        return (dispatch)=>{
             dispatch({
                  type: "passwordcheck",
                  payload: id
             })
        }
}

export const cpasswordHideandSeek = (id)=>{
     return (dispatch)=>{
          dispatch({
               type:"cpasswordcheck",
               payload: id
          })
     }
}

export const Login = (data)=>{
     return (dispatch)=>{
          dispatch({
               type:"login",
               payload: data
          })
     }
}

export const Logout = ()=> {
     return (dispatch)=>{
          dispatch({
               type: "logout",
               payload: ""
          })
     }
}

export const setLogin = ()=>{
     return (dispatch)=>{
          dispatch({
               type:"setLogin",
               payload:""
          })
     }
}
export const setLogout = ()=>{
     return (dispatch)=>{
          dispatch({
               type:"setLogout",
               payload:""
          })
     }
}




 
