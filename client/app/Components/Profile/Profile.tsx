"use client";
import React from "react";
import { useUserContext } from "@/context/userContext";

function Profile() {
    const {user} = useUserContext();
    return(
        <div>Profile</div>
    );
}

export default Profile;
