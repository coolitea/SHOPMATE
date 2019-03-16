import * as React from 'react';
import { Route } from 'react-router-dom';
import { routes } from 'lib/routes';

const App: React.FC = () => (
  <>
    {routes.map(({ path, page, exact }, i) => (
      <Route exact={exact} path={path} component={page} key={i} />
    ))}
  </>
)

export default App;
