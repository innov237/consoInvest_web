

const initialeState= {
    cmds: [],
    items : 0
}
const reducer = (acc:any, val:any) => acc + parseInt(val.quantity);


 
const comandReducer=(state=initialeState, action)=>{
    switch (action.type) {

        case 'ADD_COMAND_ITEM' :

            let newState = state.cmds
 
            let findArticle = state.cmds.findIndex(e => e.item.id_pub == action.value.item.id_pub)

            if (findArticle != -1) {
                newState[findArticle].quantity += action.value.quantity
            }else{
                newState =  [...state.cmds, {item:action.value.item,quantity:action.value.quantity}]
            }

            return {
                ...state, 
                cmds:newState, 
                items: newState.reduce(reducer,0)
            }
            
        
       
        case 'REMOVE_COMAND_ITEM' :
            let newStateRemove = state.cmds.filter(data=>data.item.id!==action.value)
           
            return {
                    ...state, 
                    cmds:newStateRemove, 
                    items: newStateRemove.reduce(reducer,0)
            }
            
        
        case 'REMOVE-COMAND-MULTIPLE' :
            return state

        case 'RESET' :
            return {
                    ...state, 
                    cmds:[], 
                    items: 0
            }
            

        case 'UPDATE_QTE':

            let newStateUpdateQte = state.cmds.map(data=>{
                if(data.item.id === action.payload.item.id) {
                    
                    data.quantity = action.payload.qte
                    return data
                }

                return data
            })
            return {
                    ...state, 
                    cmds:newStateUpdateQte, 
                    items: newStateUpdateQte.reduce(reducer,0)
            }
        
        default :
            return state
    }
}

export default comandReducer