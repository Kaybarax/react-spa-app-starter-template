//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React from 'react';
import './app/theme/app-styles.scss';
import 'bulma';
import {Provider} from 'mobx-react';
import AppEntry from './app/app-entry';
import rootStore from './app/stores';

export default class App extends React.Component {
  render() {
    console.warn = () => {
    }; // hide unnecessary warning logs
    console.error = () => {
    }; // hide inconsequential error logs
    return (
        <Provider
            appStores={rootStore.appStores}
            appStore={rootStore.appStores.app}
            routerStore={rootStore.routerStore}
            authStore={rootStore.authStore}
        >
          <AppEntry/>
        </Provider>
    );
  }
}
