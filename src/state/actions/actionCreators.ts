import axios from "axios";
import { ActionType } from "./actionTypes"

export const srcRepo = (term: string): any => {
    return async (dispatch: any) => {
        dispatch({
            type: ActionType.SRC_REPO,
        });
        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: { text: term }
            });

            dispatch({
                type: ActionType.SRC_REPO_SUCCESS,
                payload: data.objects
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.SRC_REPO_FAILURE,
                payload: error.message
            });
        }
    }
}