//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React from 'react';
import {inject, observer} from "mobx-react";
import SafeComponentWrapper from "../../safe-component-wrapper";
import NavigationHeader from "../../shared-components-and-modules/navigation-header";
import {Helmet} from "react-helmet";
import {TITLE} from "../../app-config";
import appNavigation from "../../routing-and-navigation/app-navigation";
import {PAGE2EXAMPLE_VIEW_ROUTE} from "../../routing-and-navigation/views-routes-declarations";

@inject('authStore', 'appStore', 'routerStore')
@observer
class Page1Example extends React.Component {
  constructor(props) {
    super(props);
    this.loginStore = this.props.authStore.login;
    this.appStore = this.props.appStore;
    this.authStore = this.props.authStore;
    this.routerStore = this.props.routerStore;
  }

  static routeName = 'home';
  static routePathPattern = '/home';

  _continueToPage2 = (e) => {
    e.preventDefault();
    appNavigation.navigateToPage2Example(this.routerStore);
  }

  render() {
    return (
        <SafeComponentWrapper>
          <Helmet>
            <title>{TITLE + ' | Page 1'}</title>
          </Helmet>
          <NavigationHeader
              routerStore={this.routerStore}
              authStore={this.authStore} activity={this}
          />

          <div className={'flex-row-container'}>
            <div className={'flex-container-child-item center-align-content'}>
              <h5 className="title is-5">Page 1 Example : Let's start here!</h5>
            </div>
          </div>

          <div className={'flex-row-container'}>
            <div className={'flex-container-child-item center-align-content'}>
              <p style={{textAlign: 'left'}}>
                Hey there. So you have an SPA web app that you want to build with React Js.<br/>
                And you need to come up with an app-wide, system design setup. That is, system breakdown to&nbsp;
                individual bits and pieces like, routing and navigation, controllers, app's global&nbsp;
                state management, and sharing components' state information;&nbsp;
                configuring security access for your pages, as to which are publicly accessible, and which&nbsp;
                a user must be logged in and authenticated to access; and even different&nbsp;
                types of access based on roles.<br/>
                Well, this self-guiding design employed here in this,&nbsp;
                "<em>React Js SPA Web App with Login Starter Template Framework Design</em>"&nbsp;
                has got you covered.<br/><br/>
                <a href={PAGE2EXAMPLE_VIEW_ROUTE.routeName} onClick={e => this._continueToPage2(e)}>
                  Continue to Page 2 Example to learn more...
                </a>
              </p>
            </div>
          </div>

        </SafeComponentWrapper>
    );
  }
}

export default Page1Example;
