import { INDENT_ADD_REQUEST, INDENT_ADD_SUCCESS, INDENT_ADD_FAIL } from '../constants/indentConstants';

export const indentAddReducer = (state = {}, action) => {
    switch(action.type) {
        case INDENT_ADD_REQUEST: 
            return { loading: true };
        case INDENT_ADD_SUCCESS:
            return { loading: false, data: action.payload, success: true}
        case INDENT_ADD_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state;
    }
}