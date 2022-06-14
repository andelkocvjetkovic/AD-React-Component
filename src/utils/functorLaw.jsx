import Favicon from "../favicon.svg";
import Component from "./Functor";
const compose2 = (f) => (g) => (x) => f(g(x));

const Button = (props) => (props.isHidden ? null : <button {...props} />);
const id = (x) => x;

const IdLaw1 = Component(Button).map(id).run;
const IdLaw2 = Component(id(Button)).run;
const ButtonComponent = Component(Button).run;

const wrapWithDiv = (node) => <div>{node}</div>;
const withFavicon = (node) => (
  <div>
    <img src={Favicon} alt="" width={40} height={40} />
    {node}
  </div>
);

const CompositionLaw1 = Component(Button).map(wrapWithDiv).map(withFavicon).run;
const CompositionLaw2 = Component(Button).map(
  compose2(withFavicon)(wrapWithDiv)
).run;

const FunctorLaw = () => {
  return (
    <>
      <ButtonComponent>Hello</ButtonComponent>
      <IdLaw1>Hello</IdLaw1>
      <IdLaw2>Hello</IdLaw2>
      <Button isHidden>Hello</Button>
      <IdLaw1 isHidden>Hello</IdLaw1>
      <IdLaw2 isHidden>Hello</IdLaw2>
      <CompositionLaw1>World</CompositionLaw1>
      <CompositionLaw2>World</CompositionLaw2>
      <CompositionLaw1 isHidden>World</CompositionLaw1>
      <CompositionLaw2 isHidden>World</CompositionLaw2>
    </>
  );
};

export default FunctorLaw;
