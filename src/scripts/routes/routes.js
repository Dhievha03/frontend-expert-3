import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
import Home from '../views/pages/home';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
