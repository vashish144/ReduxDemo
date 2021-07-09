//Action
// import { Reducer } from "redux";
// import { createStore } from "redux";
const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
//action handler
function buycake() {
  return {
    type: BUY_CAKE,
    info: "First reducer action",
  };
}
function buyicecream() {
  return {
    type: BUY_ICECREAM,
    info: "second reducer action",
  };
}

//initial state
const initialState = {
  numOfCake: 10,
  numOfIcecream: 20,
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //creating the copy of state by using spread operator
        numOfCake: state.numOfCake - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state, //creating the copy of state by using spread operator
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};

//creating store
const store = createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
store.dispatch(buycake());

unsubscribe();
