import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import Statement from '~/pages/Statement';
import Account from '~/pages/Account';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Statement,
    Account,
  }),
);

export default Routes;
