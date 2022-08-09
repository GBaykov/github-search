import React from "react";
import { useForm } from "react-hook-form";
import getUser from "../../cervices/Api";

export default function SearchBar() {
    const { register, handleSubmit } = useForm();
    async function onSubmit(data) {
        console.log(await getUser(data.searchUser));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("searchUser", { minLength: 1 })} />
        </form>
    );
}