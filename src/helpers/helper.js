'use strict';

import React from 'react-native'
import Image from '../themes/Images'

var {
  StyleSheet
} = React;

var insuranceType = {
  CAR: 'car',
  HEALTH: 'health',
  HOUSE: 'house'
};

class Helper {

  getImagefromType(insurance: Object): { uri: ?string } {

    switch (insurance.type) {
      case insuranceType.CAR:
        return Image.car;
      case insuranceType.HEALTH:
        return Image.health;
      case insuranceType.HOUSE:
        return Image.house;
      default:
        return Image.placeholder;
    }

    return '';
  }

  totalAnualPrice(insurances: Array): { total: string } {

    var total = 0;
    var currency = '';
    for (let index = 0; index < insurances.length; index++) {
      total = total + insurances[index].prize;
      currency = insurances[index].currency;
    }

    return total.toString() + ' ' + currency;
  }

  categoryNameFromString(category: string): { newName: string } {

    return category.replace('Category:', '');
  }

  typeFromCategory(category: object): { type: string} {

    var title = category.title.replace('Category:', '');
    var type = title.replace(' insurance', '');
    
    return type.toLowerCase()
  }

}

export default new Helper();


