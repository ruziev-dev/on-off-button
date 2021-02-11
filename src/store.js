import { createStore } from 'redux'

const initialState = {
    isButtonOn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_BUTTON_STATE': {
            return {
                ...state,
                isButtonOn: !state.isButtonOn
            }
        }
        default:
            return state;
    }
}

export const store = createStore(reducer)
