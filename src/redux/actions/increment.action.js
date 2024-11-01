import { INCREMENT_ACTION } from '../redux.index';

export const IncrementAction = () => {
    try {
        return {
            type: INCREMENT_ACTION,
        };
    } catch (error) {
        return {
            type: 'ERROR',
            payload: 'ERROR',
        };
    }
};
