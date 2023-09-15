import { Earth } from "../components/Earth";

export const Intro = () => {
  return (
    <div className="h-screen border-2 flex justify-between">
      <div className="border-2 w-full place-self-center content-center">
        {/* <h1>hey</h1> */}
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">Hello World</h1>
      </div>
      {/* 
        -underneath the logo a loop of text will run
        -and on the right will be the globe turning on his side
      */}
      <div className="border-2 w-full">
        <Earth />
      </div>
    </div>
  );
};
