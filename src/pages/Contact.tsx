import { FormModal } from "../components/Form";

export const Contact = () => {
  return (
    <div className="border-2 flex h-screen">
      <div className="border-2 w-2/5 h-full">
        <FormModal/>
      </div>
      <div className="border-2 w-3/5 h-full">
        avatar
      </div>
    </div>
  )
};