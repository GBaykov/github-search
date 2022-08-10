import React from "react";
import { useForm } from "react-hook-form";
import getUser from "../../cervices/Api";
import './searchbar.css'

export default function SearchBar() {
    const { register, handleSubmit } = useForm();
    async function onSubmit(data) {
        try {
            const user = await getUser(data.searchUser);
            if (user !== null) {
                console.log(user)
            } else console.log('user not found')
            console.log();
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <form className="searchbar" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" className="searchbar__input"
                placeholder="Enter GitHub username"
                {...register("searchUser", { minLength: 1 })} />

        </form>
    );
}