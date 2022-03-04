// function changeState(state, action){
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return {count: state.count + 1}
//     default:
//       return state;
//   }
// }

// let state = {count: 0}
// let action = {type: 'INCREASE_COUNT'}

// changeState(state, action)

//start state at 0
let state = { count: 0 };
//always pass in the initial state and the action
//create a switch case and increase the count by 1 if the action type is increase count
function changeState(state, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
//in the document body render the state count
function render() {
  document.body.textContent = state.count;
}

//after this dispatch the acton and then render
function dispatch(action) {
  state = changeState(state, action);
  render();
}

render();