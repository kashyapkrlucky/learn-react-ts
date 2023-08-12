import { Action, ActionType } from "../actions/actionTypes";

interface repoState {
    loading: boolean;
    error: '';
    data?: any[];
}
const initialState: repoState = {
    loading: false,
    error: '',
    data: []
}

const reducer = (state: repoState = initialState, action: Action): repoState => {
    switch (action.type) {
        case ActionType.SRC_REPO:
            return { loading: true, error: '', data: [] }
        case ActionType.SRC_REPO_SUCCESS:
            return { loading: false, error: '', data: action.payload }
        case ActionType.SRC_REPO_FAILURE:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export default reducer;