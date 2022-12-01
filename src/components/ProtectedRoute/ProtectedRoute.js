import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() => (props.loggedIn ? <Component {...props} /> : <Redirect to='/' />)}
    </Route>
  );
};

export default ProtectedRoute;

// ProtectedRoute — защита маршрутов, у которых нет аутентификации.
