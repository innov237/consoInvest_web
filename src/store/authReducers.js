const initialeState={
    user: null,
    shop:null,
    init: false
}

export const LOGIN_ACTION = (data) => ({ type: 'LOGIN_ACTION', payload: data})
export const SHOP_ACTION = (data) => ({ type: 'SHOP_ACTION', payload: data})
export const INIT_ACTION = (data) => ({ type: 'INIT_ACTION'})

const SearchReducer=(state=initialeState, action)=> {
    switch (action.type) {
        case 'LOGIN_ACTION' :
            return { ...state, user:action.payload}
        case 'SHOP_ACTION' :
            return { ...state, shop:action.payload, init:true}

        case 'INIT_ACTION' :
            return { ...state, init:true}
        
        default :
            return state
    }
}

export default SearchReducer