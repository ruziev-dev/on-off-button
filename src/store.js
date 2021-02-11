import { createStore } from 'redux'

const initialState = {
    buttonState: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_BUTTON_STATE': {
            return {
                ...state,
                buttonState: !state.buttonState
            }
        }
        default:
            return state;
    }
}

export const store = createStore(reducer)
