import React from 'react';
import {StaticRouter} from 'react-router'
import {matchPath} from "react-router-dom";
import {Provider} from 'react-redux'
import CreateStore from '../store/index.js'
import Router from '../router.js';
import routes from '../routes';


async function fetchPromise(req, store) {
  const dataRequirements =
    routes
      .filter(route => matchPath(req.url, route)) // filter matching paths
      .map(route => route.component) // map to components
      .filter(comp => comp.serverFetch) // check if components have data requirement
      .map(comp => store.dispatch(comp.serverFetch())); // dispatch data requirement

  console.log(dataRequirements);

  await Promise.all(dataRequirements);
}

function ServerRender(req, initStore) {
  let store = CreateStore(JSON.parse(initStore.store));

  console.log("server store:" + store);

  return (props, context) => {
    fetchPromise(req, store);
    return (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Router/>
        </StaticRouter>
      </Provider>
    )
  }
}

export default ServerRender;
