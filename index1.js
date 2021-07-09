const redux = require("redux");
const creatStore = redux.createStore;
const combineReducer = redux.combineReducers;
//action
const BUY_ICECREAM = "BUY_ICECREAM";
const BUY_CAKE = "BUY_CAKE";

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "this is first action",
  };
}

function buycake() {
  return {
    type: BUY_CAKE,
    info: "this is second action",
  };
}
//reducer

const initialCakeState = {
  noOfCake: 10,
};

const initialIceCreamState = {
  noOfIceCream: 20,
};

const CakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: CakeReducer,
  iceCream: iceCreamReducer,
});
const store = creatStore(rootReducer);

console.log("initial state: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update State", store.getState())
);

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
unsubscribe();
