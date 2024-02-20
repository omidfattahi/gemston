// this component is use for h1 title it has some inputs
// title its name of our title
// class for giving style
function Regular_h1_title_component(p: { title: string; class?: string }) {
  return <h1 className={p.class}>{p.title}</h1>;
}
export default Regular_h1_title_component;

// this component is use for h2 title it has some inputs
// title its name of our title
// class for giving style
export const Regular_h2_title_component = (p: {
  title: string;
  class?: string;
}) => {
  return <h2 className={p.class}>{p.title}</h2>;
};

// this component is use for h3 title it has some inputs
// title its name of our title
// class for giving style
export const Regular_h3_title_component = (p: {
  title: string;
  class?: string;
}) => {
  return <h3 className={p.class}>{p.title}</h3>;
};

// this component is use for h4 title it has some inputs
// title its name of our title
// class for giving style
export const Regular_h4_title_component = (p: {
  title: string;
  class?: string;
}) => {
  return <h4 className={p.class}>{p.title}</h4>;
};

// this component is use for title or short text with maniual size bacause we could not change heading tag size since of seo it has some inputs
// title its name of our title
// class for giving style
// onclick for do some action base on our need
export const Regular_div_title_component = (p: {
  title: any;
  class?: string;
  onclick?: any;
  children?: React.ReactNode;
  onmouseover?: any;
}) => {
  return (
    <div onMouseOver={p.onmouseover} className={p.class} onClick={p.onclick}>
      {p.title}
      {p.children}
    </div>
  );
};
