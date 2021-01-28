const initialeState={
	key: "",
	results: [],
    item: null
}

export const ADD_KEY = (data) => ({ type: 'ADD_KEY', payload: data})
export const ITEM_ACTION = (data) => ({ type: 'ITEM_ACTION', payload: data})

const SearchReducer=(state=initialeState, action)=> {
    switch (action.type) {
        case 'ADD_KEY' :
            return { ...state, key:action.payload.key, results: action.payload.data }

        case 'ITEM_ACTION' :
            return { ...state, item:action.payload}
            
        default :
            return state
    }
}

export default SearchReducer