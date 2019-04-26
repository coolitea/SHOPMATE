import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "lib/routes";
import { Helmet } from "react-helmet";

const App: React.FC = () => (
  <>
    <Helmet
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: "description",
          content: "Turing front-end e-commerce system code"
        }
      ]}
      title="ShopMate"
    />
    <Switch>
      {routes.map(({ path, page, exact }, i) => (
        <Route exact={exact} path={path} component={page} key={i} />
      ))}
    </Switch>
  </>
);

export default App;
