import {UserActionType} from "../action-types/index";
import { AnyAction, Dispatch } from "redux";
import { UserAction } from "../actions";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../../data/constants";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { IniState } from "..";





//Authenticated user
export const loadUser =  () => async (dispatch:Dispatch<UserAction>) => {
    try {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
        }
        const response = await axios.get(`${apiUrl}/auth`);
        console.log(response.data.user);
            await dispatch({
                type: UserActionType.SET_AUTH, 
                payload: {isAuthenticated: true, user: response.data.user as IUser} 
            })
        
    } catch (error) {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
        setAuthToken("");
        await dispatch({
            type: UserActionType.SET_AUTH, 
            payload: {isAuthenticated: false, user: null} 
        })
        
    }
}

//Login user
export const loginUser = async(userForm:IUser) => {
    try {
        const response = await axios.post(`${apiUrl}/login`, userForm);
        if (response.data.success){
            localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                response.data.accessToken
            )
            await loadUser();
        }
        return response.data;
    } catch (error:any) {
        if (error) return error.response.data;
        else return { success: false, message: error.message as string }

    }
}

//Register
export const registerUser = async (userForm:IUser) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/register`, userForm);
        if (response.data.success){
            localStorage.setItem(
                LOCAL_STORAGE_TOKEN_NAME,
                response.data.accessToken
            )
            
        }
        await loadUser();
        return response.data;
    } catch (error:any) {
        if (error.response.data) return error.response.data;
        else return { success: false, message: error.message as string};
        
    }
}

//logout
export const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    return (dispatch:Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.SET_AUTH, 
            payload: {isAuthenticated: false, user: null} 
        })
    }
}

//Update user
export const updateUser = async (request:IUser) => {
    try {
        const response = await axios.put(`${apiUrl}/auth`, request);
        if (response.data.success){
            return (dispatch:Dispatch<UserAction>) => {
                dispatch({
                    type: UserActionType.SET_AUTH, 
                    payload: {isAuthenticated: false, user: null} 
                })
            }
        }
        await loadUser();
        return response.data.user;
    } catch (error:any) {
        console.log(error.message);
    }
}



export default loadUser;