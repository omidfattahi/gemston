// this component is use for embed video in our website it has some inputs
// src is the src of our video
// order is the order of our video in page
// class is for giving style to our video
// poster is for embeding image on our video
const Regular_video_component = (p: {
  src: any;
  order?: any ;
  class?: string;
  poster: any;
}) => {
  return (
    <div style={{ order: p.order }} className={p.class}>
      <video className="w-100" controls={true} poster={p.poster}>
        <source src={p.src} />
      </video>
    </div>
  );
};

export default Regular_video_component;
