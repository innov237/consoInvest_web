const initialeState={
	user: null,
}

export const LOGIN_ACTION = (data) => ({ type: 'LOGIN_ACTION', payload: data})

const SearchReducer=(state=initialeState, action)=> {
    switch (action.type) {
        case 'LOGIN_ACTION' :
            return { ...state, user:action.payload}
        default :
            return state
    }
}

export default SearchReducer