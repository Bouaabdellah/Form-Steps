import { useContext } from "react";
import { Prop } from "./userForm";

export const PersonalDetails = () => {
    const { occupation, city, bio, handleField, nextState, previousState } = useContext(Prop);
    const nextStep = (eve) => {
        eve.preventDefault();
        console.log(occupation);
        console.log(city);
        console.log(bio);
        nextState();
    };
    return (
        <div>
            <div className="py-6 pl-4 mb-16 text-2xl font-bold text-white bg-blue-400 capitalize">enter personal details</div>
            <form className="flex flex-col gap-4 w-[300px] md:w-[500px] mx-auto mt-4" onSubmit={nextStep} action="" >
                <input type="text" defaultValue={occupation} placeholder='enter your occupation' onChange={handleField('occupation')} className="py-3 px-4 rounded-xl bg-gray-100 outline-1 outline-blue-400 caret-blue-600" />
                <input type="text" defaultValue={city} placeholder='enter your city' onChange={handleField('city')} className="py-3 px-4 rounded-xl bg-gray-100 outline-1 outline-blue-400 caret-blue-600" />
                <input type="bio" defaultValue={bio} placeholder='enter your bio' onChange={handleField('bio')} className="py-3 px-4 rounded-xl bg-gray-100 outline-1 outline-blue-400 caret-blue-600" />
                <div className="w-fit mx-auto">
                    <input type="submit" className="bg-blue-600 mt-4 text-xl py-2 px-8 w-fit mx-auto rounded-xl text-white font-semibold cursor-pointer mr-8" value="Next" />
                    <button className="bg-blue-600 mt-4 text-xl py-2 px-8 w-fit mx-auto rounded-xl text-white font-semibold cursor-pointer" onClick={() => previousState()}>Back</button>
                </div>
            </form >
        </div>
    )
}