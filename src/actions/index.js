export const FETCHING_INSURANCES = "FETCHING_INSURANCES";
export const REMOVE_INSURANCE = "REMOVE_INSURANCE";
export const ADD_INSURANCE = "ADD_INSURANCE";
export const RECEIVED_DATA = "RECEIVED_DATA";
export const ERROR_GETTING_INSURANCES = "ERROR_GETTING_INSURANCES";
export const RECEIVED_CATEGORIES = "RECEIVED_CATEGORIES";


import InsuranceService from '../middleware/InsuranceService'

export const fetchingInsurances = (): Object => {

  return {
    type: FETCHING_INSURANCES
  }
}

export const fetchInsurances = (error: boolean): Function => {

  return (dispatch) => {
    dispatch(fetchingInsurances());
    InsuranceService.fetchInsurances(error, dispatch);
  };
};

export const removeInsurance = (insurances: Array, insurance: Object): Function => {

  var removeIndex = insurances.findIndex(i => i.id === insurance.id);
  if (removeIndex > -1) {
    var newData = insurances.slice();
    newData.splice(removeIndex, 1);
  }

  return {
    type: REMOVE_INSURANCE,
    data: newData
  };
};

export const addInsurance = (insurance: Object): Object => {
  return {
    type: ADD_INSURANCE,
    data: insurance
  };
};

export const retrievedInsurances = (data: Object): Object => {
  return {
    type: RECEIVED_DATA,
    data
  };
};

export const errorOnReceivingInsurances = (): Object => {
  return {
    type: ERROR_GETTING_INSURANCES,
  };
};

export const fetchInsuranceCategories = (): Function => {
 
  return (dispatch) => {
    dispatch(fetchingInsurances());
    InsuranceService.fetchInsurancesCategory(dispatch);
  };
}

export const retrievedInsurancesCategories = (data: Object): Object => {
  return {
    type: RECEIVED_CATEGORIES,
   data: data.query.categorymembers
  };
};

