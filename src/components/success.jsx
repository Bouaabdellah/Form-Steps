import { useContext } from "react";
import { Prop } from "./userForm";

export const Success = () => {
    const { firstName, lastName } = useContext(Prop);
    return (
        <div>
            <div className="py-6 pl-4 mb-16 text-2xl font-bold text-white bg-blue-400 capitalize">Success Register</div>
            <div className="px-8 text-xl">
                thank you <span className="font-semibold capitalize">{firstName} {lastName}</span> for your sumbission, you will recieve an email of confirmation
            </div>
        </div>
    )
}