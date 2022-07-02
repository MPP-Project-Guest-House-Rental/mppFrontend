import * as types  from './actionTypes';
export default function addAddressInformation(addressInfo) {
  // debugger;
  return { type: types.ADDRESS_INFORMATION, addressInfo };
}