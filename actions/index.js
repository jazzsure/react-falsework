 /*
 *  @descript common actions
 */

import * as mainActions from './main';
let actions = {
    mainActions
};


// Validate Action Uniqueness
( function() {

  let actionIndex = {};

  for ( let key in actions ) {
    let prefix = key
        , currentActions = actions[ key ]
        ;
    for ( let innerKey in currentActions ) {
      let longKey = prefix + '-' + innerKey;
      if ( innerKey == 'default' ) {
        continue;
      }
      // console.log(longKey);
      if ( !actionIndex[ innerKey ] ) {
        actionIndex[ innerKey ] = longKey;
      }
      else {
        throw new Error(
          'Duplicated action creators: '
            + actionIndex [ innerKey ]
            + ', '
            + longKey
        );
      }
    }
  }

} )();



module.exports = actions;

