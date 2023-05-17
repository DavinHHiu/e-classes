import config from '~/config';

import Home from '~/pages/Home';
import Classes from '~/pages/Classes';

const publicRoutes = [
    { path: config.path.home, component: Home },
    { path: config.path.classes, component: Classes },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
