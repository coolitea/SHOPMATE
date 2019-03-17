import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'lib/routes';
import { Helmet } from 'react-helmet';

const App: React.FC = () => (
  <>
    <Helmet>
      <title>ShopMate</title>
      <meta
        name="description"
        content="Turing front-end e-commerce system code"
      />
      <meta property="fb:app_id" content="203040656938507" />
      <meta property="og:image" content="https://images.velog.io/velog.png" />
    </Helmet>
    <Switch>
      {routes.map(({ path, page, exact }, i) => (
        <Route exact={exact} path={path} component={page} key={i} />
      ))}
    </Switch>
  </>
)

export default App;
