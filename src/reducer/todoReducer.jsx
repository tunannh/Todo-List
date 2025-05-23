const init = []

const todoReducer = (state = init, action) => {
   let newState = [...state];
   let index = 0;
   switch (action.type) {
      case "CREATE":
         newState = [
            {
               id: Date.now(),
               content: action.content,
               completed: false,
            },
            ...state
         ]
         return newState;
      
      case "DONE":
         index = newState.findIndex(elem => elem.id === action.id);
         newState[index].completed = true;
         return newState;

      case "UNDONE":
         index = newState.findIndex(elem => elem.id === action.id);
         newState[index].completed = false;
         return newState;
         
      case "DELETE":
         newState = newState.filter((item) => item.id !== action.id);
         return newState;
      default:
         return state;
   }
}

export default todoReducer;