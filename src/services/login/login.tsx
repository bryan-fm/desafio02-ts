import { useContext, useEffect, useState } from "react";
import { AuthContext, defaultUser, IUserContext } from "../../contexts/AuthContext";
import { api } from "../api/api"
import { LoginStatusEnum } from "../../Enums/LoginStatusEnum";

interface LoginInterface {
    status: LoginStatusEnum;
    user?: IUserContext
}

export const Login = async (username: string, password: string): Promise<LoginInterface | undefined> => {

    const data: any = await api();

    if(username === data.email && password === data.password) {
        const response = { 
            user : {
                id: data.id,
                name: data.name,
            },
            status: LoginStatusEnum.SUCCESS
        }
        return response;
    }

    if(username === '' || password === '') {
        return {
            status: LoginStatusEnum.REQUIRED_FIELDS
        }
    }

    return {
        status: LoginStatusEnum.INCORRECT_CREDENTIALS
    }

}

export const logout = () => {
    localStorage.removeItem("userId");
}
