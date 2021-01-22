const initialeState={
	key: "",
	results: []
}

export const ADD_KEY = (data) => ({ type: 'ADD_KEY', payload: data})

const SearchReducer=(state=initialeState, action)=> {
    switch (action.type) {
        case 'ADD_KEY' :
            return { ...state, key:action.payload.key, results: action.payload.data }
        default :
            return state
    }
}

export default SearchReducer