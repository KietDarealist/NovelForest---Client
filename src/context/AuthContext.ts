import React, { createContext, useEffect, useReducer, ReactChildren, ReactChild, Dispatch } from "react"
import { authAction, authReducer } from "../reducers/authReducer"

interface Props { 
    children : ReactChild | ReactChildren
}

const initialState = { 
    user :  null,
    authLoading : false,
    error : false

}

  const AuthContext = createContext<{
     state: IUserState, 
     dispatch : Dispatch<authAction> 
}>({
    state : initialState,
    dispatch: () => null

})

// const mainReducer = (user : IUserState,action : authAction) => ({
//     user : authReducer(user,action)
// })

//  const AuthContextProVider = ({children}: Props) => { 
//     const [state,dispatch] = useReducer(mainReducer,initialState)
    
//     useEffect(() => { 
//         localStorage.setItem("user",JSON.stringify(state.user))
//     },[state.user])

//     return (
//         <AuthContext.Provider value={{state, dispatch}}>
//           {children}
//         </AuthContext.Provider>
//       )
// }

//  const AuthContext = createContext<IUserState>(initialState)