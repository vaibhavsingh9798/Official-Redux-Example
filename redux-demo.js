const {createStore} = require('redux')


const counterRducer = (state={counter:0},action) =>{
      switch(action.type){
        case 'INC':{
         return {counter : state.counter+5}
        }
      break;
      case 'DEC':{
        return {counter : state.counter - 1}
      }
      break;
      }
}


const store = createStore(counterRducer)

const counterSubscriber = () =>{
const updatedState = store.getState();
console.log('update',updatedState)
}

store.subscribe(counterSubscriber)

store.dispatch({type:'INC'})
store.dispatch({type:'INC'})
store.dispatch({type:'DEC'})

// OUTPUT
// update { counter: 5 }
// update { counter: 10 }
// update { counter: 9 }