
import { errorOnReceivingInsurances, retrievedInsurances, retrievedInsurancesCategories } from '../actions/index'

insurances = require('../data/Insurances');


class InsuranceService {

    fetchInsurances(error: boolean, dispatch: any) {

        if (error) {
            dispatch(errorOnReceivingInsurances());
        } else {
            dispatch(retrievedInsurances(insurances));
        }

        return null;
    }

    fetchInsurancesCategory(dispatch: any) {
      
        var url = 'https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Types_of_insurance&cmtype=subcat&format=json&origin=*';
        fetch(url)
            .then((response) => response.json())
            .catch((error) => {
                dispatch(errorOnReceivingInsurances());
            })
            .then((responseData) => {
                dispatch(retrievedInsurancesCategories(responseData));
            });
            
        return null;
    }
}

export default new InsuranceService();