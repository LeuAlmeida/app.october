import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Payments from '~/pages/Payments';
import Scheadules from '~/pages/Scheadules';
import Contract from '~/pages/Contract';
import Account from '~/pages/Account';
import Indicate from '~/pages/Account';
import MySchool from '~/pages/MySchool';
import Interest from '~/pages/Interest';
import Statement from '~/pages/Statement';

const Routes = createAppContainer(createSwitchNavigator({
  Main,
  Payments,
  Scheadules,
  Contract,
  Account,
  Indicate,
  MySchool,
  Interest,
  Statement
}));

export default Routes;
