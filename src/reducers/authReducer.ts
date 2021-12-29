export enum Types {
    Login_success = 'LOGIN_SUCCESS',
    Login_failure = 'LOGIN_FAILURE',
    Log_out = 'LOG_OUT',
  }


type authPayload = {
    [Types.Login_success] : { 
        user : IUserState
    }
    [Types.Login_failure] : { 
        user : null
    }
    [Types.Log_out] : {
        user : null
    }
}

export type authAction = ActionMap<authPayload>[keyof ActionMap<authPayload>]


export const authReducer = (state : IUserState,action :authAction ) => {
    switch(action.type){
        case Types.Login_success : 
            return { 
                user : action.payload,
                authLoading: false,
                error : false
            }
        case Types.Login_failure : 
            return { 
                user : null,
                authLoading : false,
                error : true
            }
        case Types.Log_out : 
            return {
                user : null,
                authLoading : false,
                error : true
            }
        default :
            return state
    }
}


// https://elisealcala.com/context-use-reducer-typescript/