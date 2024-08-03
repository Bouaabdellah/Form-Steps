import { useContext } from "react"
import { Prop } from "./userForm";

export const UserDetails = () => {
    const { firstName, lastName, email, handleField, nextState } = useContext(Prop);
    const nextStep = (eve) => {
        eve.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        nextState();
    };
    return (
        <div>
            <div className="py-6 pl-4 mb-16 text-2xl font-bold text-white bg-blue-400 capitalize">enter user details</div>
            <form className="flex flex-col gap-4 w-[300px] md:w-[500px] mx-auto mt-4" onSubmit={nextStep} action="" >
                <input type="text" defaultValue={firstName} placeholder='enter your first name' onChange={handleField('firstName')} className="py-3 px-4 rounded-xl bg-gray-100 outline-1 outline-blue-400 caret-blue-600" />
                <input type="text" defaultValue={lastName} placeholder='enter your last name' onChange={handleField('lastName')} className="py-3 px-4 rounded-xl bg-gray-100 outline-1 outline-blue-400 caret-blue-600" />
                <input type="email" defaultValue={email} placeholder='enter your email' onChange={handleField('email')} className="py-3 px-4 rounded-xl bg-gray-100 outline-1 outline-blue-400 caret-blue-600" />
                <input type="submit" className="bg-blue-600 mt-4 text-xl py-2 px-8 w-fit mx-auto rounded-xl text-white font-semibold cursor-pointer" value="Next" />
            </form >
        </div>
    )
}
