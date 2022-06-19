import Favicon from "../favicon.svg";
import Component from "./Functor";
const compose2 = (f) => (g) => (x) => f(g(x));

const Button = (props) => (props.isHidden ? null : <button {...props} />);
const id = (x) => x;

const IdLaw1 = Component(Button).map(id).run;
const IdLaw2 = Component(Button).run;
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
      <ButtonComponent>IdLaw</ButtonComponent>
      <IdLaw1>IdLaw</IdLaw1>
      <IdLaw2>IdLaw</IdLaw2>
      <Button isHidden>IdLaw</Button>
      <IdLaw1 isHidden>IdLaw</IdLaw1>
      <IdLaw2 isHidden>IdLaw</IdLaw2>
      <CompositionLaw1>ComposeLaw</CompositionLaw1>
      <CompositionLaw2>ComposeLaw</CompositionLaw2>
      <CompositionLaw1 isHidden>ComposeLaw</CompositionLaw1>
      <CompositionLaw2 isHidden>ComposeLaw</CompositionLaw2>
    </>
  );
};

export default FunctorLaw;
