const render = ($) => {
  // $('#test').html('Hello, render with jQuery');
  // What can be done todo here before rendering...
  return Promise.resolve();
};

((global) => {
  //purehtml is the corresponding micro-app name
  global["purehtml"] = {
    bootstrap: () => {
      console.log("purehtml bootstrap");
      return Promise.resolve();
    },
    mount: (props) => {
      console.log("purehtml mount00000000000", props);
      props.onGlobalStateChange((state, prev) => {
        console.log(state, prev);
      });
      return render($);
    },
    unmount: () => {
      console.log("purehtml unmount");
      return Promise.resolve();
    },
  };
})(window);
