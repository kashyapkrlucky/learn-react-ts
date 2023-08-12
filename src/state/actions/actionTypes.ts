
export interface Action {
    type: string;
    payload?: any;
}

export enum ActionType {
    SRC_REPO ='src_repo',
    SRC_REPO_SUCCESS ='src_repo_success',
    SRC_REPO_FAILURE ='src_repo_failure',
}