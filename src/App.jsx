import Component from "./utils/Functor.jsx";
import Favicon from "./favicon.svg";
const compose2 = (f) => (g) => (x) => f(g(x));
const Button = (props) => <button {...props} />;

const wrapWithDiv = (node) => <div>{node}</div>;
const withFavicon = (node) => (
  <div>
    <img src={Favicon} alt="" width={40} height={40} />
    {node}
  </div>
);
const defaultProps = (props) => ({
  onClick: () => alert("Hello world"),
  children: "Click me",
  ...props,
});
const fixedProps = (props) => ({
  ...props,
  title: "I am a button",
});
const spaces2Rem = (props) => ({
  ...props,
  children: <div className="mt-4">{props.children}</div>,
});

const WrappedWithDiv = Component(Button)
  .map(compose2(wrapWithDiv)(withFavicon))
  .contramap(spaces2Rem)
  .contramap(compose2(defaultProps)(fixedProps)).run;

const App = () => {
  return <WrappedWithDiv>Hello world</WrappedWithDiv>;
};

export default App;
