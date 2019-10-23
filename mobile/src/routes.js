import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import Statement from '~/pages/Statement';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Statement,
  }),
);

export default Routes;
