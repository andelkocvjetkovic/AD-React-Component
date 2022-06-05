const compose2 = (f) => (g) => (x) => f(g(x));

const Component = (run) => ({
  run,
  //map:: Component (a -> b) ~> (b -> c) -> Component (a -> c)
  map: (g) => Component(compose2(g)(run)),
  //contramap :: Component (b -> c) ~> (a -> b) -> Component(a -> c)
  contramap: (g) => Component(compose2(run)(g)),
});

export default Component;
