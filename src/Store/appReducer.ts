const appReducer = (state:any, action:any) =>{
    switch(action.type){
        case 'CHANGE_DIALOG_STATE':
            return{
                ...state,
                dialog:!state.dialog
            } 
        case 'CHANGE_OBJECT_ID':
            return {
                ...state,
                objectId:action.payload
            } 
        case 'UPDATE_EMPLOYEES':
            return{
                ...state,
                updateEmployees:!state.updateEmployees
            } 
        case 'CHANGE_SAVE_BUTTON_STATE':
            return {
                ...state,
                saveButtonState:action.payload
            }           
        default :{
            return state;
        }       
    }
}

export default appReducer;