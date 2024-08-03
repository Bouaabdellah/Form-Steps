import { useContext } from "react";
import { Prop } from "./userForm";

// counter that we use it on the key
let cmpCounter = 0;
export const Confirm = () => {
    const { nextState, previousState, values } = useContext(Prop);
    return (
        <div className="pb-20">
            <div className="py-6 pl-4 mb-16 text-2xl font-bold text-white bg-blue-400 capitalize">confirm your information</div>
            <ul className="flex flex-col gap-4 w-fit mx-auto">
                {values.map((val) => {
                    return (
                        <li key={cmpCounter++} className="py-4 px-6 bg-gray-200 flex gap-32 justify-between rounded-xl">
                            <span className="text-xl font-semibold capitalize">{val.key}</span>
                            <span className="text-[18px]">{val.value}</span>
                        </li>
                    )
                })}
            </ul>
            <div className="flex gap-1 w-fit mx-auto mt-4">
                <button className="bg-blue-600 mt-4 text-xl py-2 px-8 w-fit mx-auto rounded-xl text-white font-semibold cursor-pointer mr-8" onClick={() => nextState()}>Confirm</button>
                <button className="bg-blue-600 mt-4 text-xl py-2 px-8 w-fit mx-auto rounded-xl text-white font-semibold cursor-pointer" onClick={() => previousState()}>Back</button>
            </div>
        </div>
    )
}