import { Component, h } from '@stencil/core';
import { Router } from '../..';
import { Route, match } from 'stencil-router-v2';

// import { ThemeModel } from '@genexus/chameleon-controls-library';
// import { bundleToHashMappings } from '../../assets/mercury-bundles/bundle-to-hash-mappings';

// const mercuryIconsBundle: ThemeModel = [
//   {
//     name: 'mercury/base/icons',
//     url: '/assets/css/' + `${bundleToHashMappings['base/icons']}.css`,
//   },
// ];

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        {/* <ch-theme model={mercuryIconsBundle}></ch-theme> */}
        <header>
          <h1 onClick={() => Router.push('/')}>Stencil App Starter</h1>
        </header>

        <main>
          <Router.Switch>
            <Route path="/">
              <custom-dialog />
            </Route>
            <Route path={match('/profile/:name')} render={({ name }) => <app-profile name={name} />} />
          </Router.Switch>
        </main>
      </div>
    );
  }
}
