import * as types from '../actions/actionTypes';
export default function addressInformation(state = [], action) {
  debugger;
  switch (action.type) {
    case types.ADDRESS_INFORMATION:
      return [...state, { ...action.addressInfo }];
    default:
      return state;
  }
}