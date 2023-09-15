import { Earth } from "../components/Earth";

export const Intro = () => {
  return (
    <div className="h-screen flex justify-between">
      <div className="ml-2 w-full place-self-center content-center">
        {/* <h1 className="animate-typing overflow-hidden border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
          Glad you could join me 😄
        </h1> */}
        <h1 className="text-5xl text-white font-bold">
          Glad you could join me 😄
        </h1>
        <h2 className="text-3xl text-white font-bold">
          don't worry, i got you! just chill and scroll a bit
        </h2>
      </div>
      <div className="w-full">
        <Earth />
      </div>
    </div>
  );
};
