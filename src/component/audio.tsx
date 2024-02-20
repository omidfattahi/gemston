// this component is use for audio it has some input
// id is for using in a function to play sound by events 
// src is the path of our sound tag 
// class is use for style the tag 
// order is style that is use for define place in a page

const Regular_audio_component = (p: {
  order?: number;
  id?: string;
  src: any;
  class?: string;
}) => {
  return (
    <>
      <audio
        style={{ order: p.order }}
        id={p.id}
        className={`${p.class} w-100`}
        controls
      >
        <source src={p.src} />
      </audio>
    </>
  );
};

export default Regular_audio_component;
