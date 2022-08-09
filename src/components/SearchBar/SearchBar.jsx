import React from "react";
import { useForm } from "react-hook-form";
import getUser from "../../cervices/Api";

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("searchUser", { minLength: 1 })} />
        </form>
    );
}