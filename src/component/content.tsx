// this component use for paragraph it has some inputs
// text for sending our text
// order for order of our paragraph in page
// class is the name of our class for styling
const Regular_content_component = (p: {
  text: string;
  order?: number;
  class?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={p.class} style={{ order: p.order }}>
      {p.text}
      {p.children}
    </div>
  );
};

export default Regular_content_component;
