import React from "react";
import { useForm } from "react-hook-form";
import getUser from "../../cervices/Api";
import './searchbar.css'

export default function SearchBar({ addUser }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            const user = await getUser(data.searchUser);
            if (user) {
                console.log('is user')
                addUser(user);
            } else {
                console.log('user not found');
                console.log('no user')
                addUser(null)
            }
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