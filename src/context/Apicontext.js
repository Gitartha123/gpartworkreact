import { createContext } from "react";
export const ApiContext = createContext();

export const Api = (props) => {

    var apihost = process.env.REACT_APP_API_URL;


    /// for content type application/json
    const getApi = async (url, method, data, authtoken) => {
        if (method === 'POST' || method === 'PUT') {
            var response = await fetch(`${apihost}${url}`, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "auth-token": authtoken,
                },
                body: JSON.stringify(data)
            })
        }
        else {
            var response = await fetch(`${apihost}${url}`, {
                method: method,
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                    "auth-token": authtoken,
                }
            })
        }

        const json = response.json();
        return json;
    }

    ////
    //// /// for content type multipart/formdata
    const getRegisterApi = async (url, method, data, authtoken) => {
        if (method === 'POST' || method === 'PUT') {
            var response = await fetch(`${apihost}${url}`, {
                method: method,
                headers: {
                    "auth-token": authtoken,
                },
                body: data
            })
        }
        else {
            var response = await fetch(`${apihost}${url}`, {
                method: method,
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                    "auth-token": authtoken,
                }
            })
        }



        const json_data = response.json();
        return json_data;
    }
    return <ApiContext.Provider value={{ getApi, getRegisterApi }}>
        {props.children}
    </ApiContext.Provider>
}

export default Api;

