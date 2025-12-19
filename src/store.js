export const initialStore=()=>{
  return{
    
   people: [],
   favoritos: [],
   
   
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){


   
    default:
      throw Error('Unknown action.');
  }    
}
