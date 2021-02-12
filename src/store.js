import { createStore } from 'redux'

const initialState = {
    isButtonOn: null,
    isLoading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BUTTON_STATE': {
            return {
                ...state,
                isButtonOn: action.isButtonOn
            }
        }
        case 'CHANGE_BUTTON_STATE': {
            return {
                ...state,
                isButtonOn: !state.isButtonOn
            }
        }
        case 'CHANGE_LOADING_STATE': {
            return {
                ...state,
                isLoading: !state.isLoading
            }
        }
        default:
            return state;
    }
}




export const store = createStore(reducer)