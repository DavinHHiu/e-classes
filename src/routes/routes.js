import config from '~/config';

import Home from '~/pages/Home';
import Classes from '~/pages/Classes';
import Search from '~/pages/Search';
import ClassDetail from '~/pages/ClassDetail/ClassDetail';
import Learning from '~/pages/Learning/Learning';

const publicRoutes = [
    { path: config.path.home, component: Home },
    { path: config.path.classes, component: Classes },
    { path: config.path.search, component: Search, layout: 'NoSearchLayout' },
    { path: config.path.course, component: ClassDetail },
    { path: config.path.learningNotification, component: Learning },
    { path: config.path.learningAssignment, component: Learning },
    { path: config.path.learningMember, component: Learning },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
