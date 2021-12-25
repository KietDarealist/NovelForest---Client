import { UserActionType } from "../action-types";

interface SetAuthAction {
    type: UserActionType.SET_AUTH,
    payload: AuthPayload
}

interface UpdateUserAction{
    type: UserActionType.UPDATE_USER,
    payload: AuthPayload
}

export type UserAction = SetAuthAction | UpdateUserAction