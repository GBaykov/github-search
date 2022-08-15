import React from "react";
import { useForm } from "react-hook-form";
import getUser, { getUserRepos } from "../../cervices/Api";
import './searchbar.css'

export default function SearchBar({ addUser }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            const user = await getUser(data.searchUser);
            if (user) {
                addUser(user);
                const repos = await getUserRepos(data.searchUser);
                console.log(repos);
            } else {
                addUser(null)
            }
        } catch (err) {
            throw new Error(err.message)
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