import { INCREMENT_ACTION } from '../redux.index';

const initialState = {
    count: 0,
};

export const IncrementReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_ACTION:
            return {
                ...state,
                count: state.count + 1,
            };
        default:
            return state;
    }
};
