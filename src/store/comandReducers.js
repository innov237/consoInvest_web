const initialList=[]

const comandReducer=(state=initialList, action)=>{
    switch (action.type) {
        case 'ADD_COMAND_ITEM' :
            console.log("le cas add")
            return [...state, action.value]
        case 'REMOVE_COMAND_ITEM' :
            const newState=state.filter(data=>data.item.id!==action.value)
            return newState
        default :
            return state
    }
}

export default comandReducer