import * as types from '../actions/actionTypes';
export default function propertyInformation(state = [], action) {
  debugger;
  switch (action.type) {
    case types.PROPERTY_INFORMATION:
      return [...state, { ...action.propertyInfo }];
    default:
      return state;
  }
}