const passwordstate = { ispassword: true, iscpassword: true };
const passwordReducers = (state = passwordstate, action) => {
    var pw = document.getElementById(action.payload);
    switch (action.type) {
        case "passwordcheck":
            switch (pw.type) {
                case "text":
                    pw.type = 'password';
                    return {
                        ...state,
                        ispassword: true,
                    };

                default:
                    pw.type = "text";
                    return {
                        ...state,
                        ispassword: false,
                    };
            }

        case "cpasswordcheck":
            switch (pw.type) {
                case "text":
                    pw.type = 'password';
                    return {
                        ...state,
                        iscpassword: true,
                    };

                default:
                    pw.type = "text";
                    return {
                        ...state,
                        iscpassword: false,
                    };
            }
        default:
            return state;
    }
}


export default passwordReducers;