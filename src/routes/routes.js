import config from '~/config';

import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Classes from '~/pages/Classes';
import AllClasses from '~/pages/AllClasses';
import Search from '~/pages/Search';
import ClassDetail from '~/pages/ClassDetail';
import Learning from '~/pages/Learning';

const publicRoutes = [
    { path: config.path.login, component: Login, layout: null },
    { path: config.path.home, component: Home },
    { path: config.path.classes, component: Classes },
    { path: config.path.myclasses, component: Classes },
    { path: config.path.allClasses, component: AllClasses },
    { path: config.path.search, component: Search },
    { path: config.path.course, component: ClassDetail },
    { path: config.path.learningNotification, component: Learning },
    { path: config.path.learningAssignment, component: Learning },
    { path: config.path.learningMember, component: Learning },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
