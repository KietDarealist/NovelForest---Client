interface IUser{
    name?: string,
    account?: string,
    password?: string,
    avatar?:string,
    verify?: boolean
};


interface AuthPayload {
    user: IUser | null
    isAuthenticated: boolean
}


interface IUserState{
    authLoading?: boolean,
    isAuthenticated?: boolean,
    user?: IUser
}

interface ILoginResponse {
    message: string
}