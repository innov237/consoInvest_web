const initialList=[]

const comandReducer=(state=initialList, action)=>{
    switch (action.type) {
        case 'ADD_COMAND_ITEM' :
            let exist={id:null, find: false}
            let newState=state
            newState.map((data, i)=>{
                if(data.item.id===action.value.item.id) exist={id: i, find: true}
            })
            if(exist.find) {
                newState[exist.id].quantity+=action.value.quantity
                return newState
            }
            return [...newState, action.value];

        case 'REMOVE_COMAND_ITEM' :
            newState=state.filter(data=>data.item.id!==action.value)
            return newState
        
        case 'REMOVE-COMAND-MULTIPLE' :
            return newState

        case 'RESET' :
            return []
        
        default :
            return state
    }
}

export default comandReducer