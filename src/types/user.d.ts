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
    user?: IUser | null | undefined,
    authLoading?: boolean,
    isAuthenticated?: boolean,
    error?: boolean
}

interface ILoginResponse {
    message: string
}

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
  };