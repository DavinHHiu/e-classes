import config from '~/config';

import Home from '~/pages/Home';
import Classes from '~/pages/Classes';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: config.path.home, component: Home },
    { path: config.path.classes, component: Classes },
    { path: config.path.search, component: Search, layout: 'NoSearchLayout' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
