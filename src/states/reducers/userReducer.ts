import { UserActionType } from "../action-types";
import { UserAction } from "../actions"


const initialState:IUserState = {
    authLoading: true,
    isAuthenticated: false,
    user: {}
}


const reducer = (state:IUserState = initialState, action:UserAction) => {
    switch(action.type){
        case UserActionType.SET_AUTH:
            return {         
                authLoading: false,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user as IUser
            };
        case UserActionType.UPDATE_USER:
            return {
                ...state,
                user:action.payload.user as IUser
            }
        default:
            return state
    }
}

export default reducer;