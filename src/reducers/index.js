import React from 'react-native'

const {
  ListView
} = React;

import { combineReducers } from "redux";
import * as types from "../actions";

const defaultState = {
  isLoading: false,
  insurances: [],
  categories: []
}

const insuranceReducer = (state = defaultState, action) => {
  switch (action.type) {

    case types.REMOVE_INSURANCE:

      return {
        ...state,
        isLoading: false,
        insurances: action.data
      };

    case types.ADD_INSURANCE:

      return {
        ...state,
        isLoading: false,
        insurances: state.insurances.concat(action.data)
      }

    case types.RECEIVED_DATA:
      return {
        ...state,
        isLoading: false,
        insurances: action.data
      };

    case types.RECEIVED_CATEGORIES:
      return {
        ...state,
        categories: action.data
      };

    case types.FETCHING_INSURANCES:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  insuranceData: insuranceReducer
});

export default rootReducer;
