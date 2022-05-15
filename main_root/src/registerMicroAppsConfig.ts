const loader = (loading: boolean) => {
  // Here you can get whether the sub-application is loaded successfully,
  // which can be used to trigger the global loading
  console.log('global loading===', loading);
};

export const Microconfig = [
  //name: the name of the microapp,
  //entry: The entrance to the micro application,
  //container: A selector or Element instance for the microapp's container node,
  //activeRule: Activate the micro-app's rule (which can be matched to the micro-app's route),
  //loader: state of loading the microapp type is funciton return true | false,
  {
    name: 'vue2',
    entry: 'http://localhost:8001',
    container: '#subContainer',
    activeRule: '/vue2',
    loader,
  },
  {
    name: 'vue3',
    entry: 'http://localhost:8002',
    container: '#subContainer',
    activeRule: '/vue3',
    loader,
  },
  {
    name: 'react',
    entry: 'http://localhost:8003',
    container: '#subContainer',
    activeRule: '/react',
    loader,
  },
  {
    name: 'umi',
    entry: 'http://localhost:8004',
    container: '#subContainer',
    activeRule: '/umi',
    loader,
  },
  {
    name: 'purehtml',
    entry: 'http://127.0.0.1:8005',
    container: '#subContainer',
    activeRule: '/purehtml',
    loader,
  },
  //angular
  {
    name: 'angular',
    entry: 'http://127.0.0.1:8006',
    container: '#subContainer',
    activeRule: '/angular',
    loader,
  },
];
