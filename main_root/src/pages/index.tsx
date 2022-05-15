import LayoutPage from '@/layout/index';
import 'zone.js/dist/zone';
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  addGlobalUncaughtErrorHandler,
  initGlobalState,
  MicroAppStateActions,
} from 'qiankun';
import { Microconfig } from '@/registerMicroAppsConfig';

/**
 * Register a Microapp
 */
registerMicroApps(Microconfig, {
  // qiankun Lifecycle Hooks - Before Microapps Load
  beforeLoad: (app: any) => {
    console.log('before load', app.name);
    return Promise.resolve();
  },
  // qiankun Lifecycle hooks - after the microapp is mounted
  afterMount: (app: any) => {
    console.log('after mount', app.name);
    return Promise.resolve();
  },
});

/**
 * start qiankun
 */
// start();
// There are many other configuration Options
start({
  prefetch: true, // enable preload
  sandbox: {
    experimentalStyleIsolation: true, //   optional, whether to open the js sandbox, default is true.
  },
});

/**
 * Set the micro-app that is entered by default after the main application is started
 * ActiveRule corresponding to the sub-application
 */
// setDefaultMountApp('/purehtml');

// Add global exception catch
addGlobalUncaughtErrorHandler((handler) => {
  console.log('exception catch ====', handler);
});

// global state
const state = {
  id: 'main_application',
};
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: the state after the change; prev the state before the change
  console.log('state====', state, 'prev====', prev);
});

actions.setGlobalState({
  id: 'main_app',
});

export default function IndexPage({ children }: any) {
  return (
    <LayoutPage>
      <div>{children}</div>
      <div id="subContainer"></div>
    </LayoutPage>
  );
}
