import { AuthActionType } from './types'

export type AuthAction = { type: AuthActionType; payload: string | null }

export interface AuthState {
	user : string | null,
    authLoading : boolean,
    error : boolean
}

const {LOGIN_SUCCESS, 
LOGIN_FAILURE,
LOG_OUT } = AuthActionType

export const authReducer = (state: AuthState, action: AuthAction) => {
    
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload,
                authLoading: false,
                error : false
            }
        case LOGIN_FAILURE : 
            return { 
                user : null,
                authLoading : false,
                error : true
            }
        case LOG_OUT  : 
            return {
                user : null,
                authLoading : false,
                error : true
            }
		default:
			return state
	}
}

