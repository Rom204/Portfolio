import { Card } from "../components/card/Card";

export const About = () => {
  return (
    <div className="h-screen border-2 flex justify-center">
      {/* 
      left-top side 3d coin models that s on click and shows link icon to ig/linkedIN/github
      left underneath coins my avatar model laying down as a goalkeeper
      whole right side a 3d board model with text- onclick  to resume and a pdf download
       */}
      <div className="border-2 w-3/5 flex-col justify-center">
        <div className="border-2 h-2/5">links</div>
        <div className="border-2 h-3/5">avatar</div>
      </div>
      <div className="border-2 w-2/5">
        {/* <Card/> */}
      </div>
    </div>
  )
};