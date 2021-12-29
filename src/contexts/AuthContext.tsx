import  axios  from "axios"
import React, { createContext, useEffect, useReducer, ReactChildren, ReactChild, Dispatch, ReactNode } from "react"
import { apiUrl } from "../components/contants/constant"
import {  authReducer, AuthState } from "../reducers/authReducer"
import {AuthActionType} from '../reducers/types'
interface Props { 
    children :  ReactNode
}

interface AuthContextDefault { 
	authInfo : AuthState,
	login : (account:string, password :string) => void
}


const authDefault : AuthState = { 
    user :  null,
    authLoading : false,
    error : false
}

const {LOGIN_SUCCESS,LOGIN_FAILURE,LOG_OUT} = AuthActionType

export const AuthContext = createContext<AuthContextDefault>(
	{
		authInfo : authDefault,
		login : () => {}
	})

const AuthContextProvider = ({ children }: Props) => {
	const [authInfo, dispatch] = useReducer(authReducer, authDefault)



	const login = async (account:string,password:string) => { 
		try{
			const res = await axios.post(`${apiUrl}/auth/login`,{account,password})
			console.log(res.data)
			if (res.data.success) { 
				dispatch({
					type : LOGIN_SUCCESS,
					payload : account
				})
				console.log(account)
				
			}
			else {
				dispatch({
					type : LOGIN_FAILURE,
					payload : null
				})
			}

			
		}
		catch(err){
			console.log(err)
		}
	}

	const authContextData = {
		authInfo,
		login
	}

	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider