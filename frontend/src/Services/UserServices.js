import { axiosBase as axios } from "./Config";

export const LogIn = async (data) => {
    try {
        const response = await axios.post("/user/login", data);
        if (response.status === 200) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const createUser = async (data) => {
    try {
        const response = await axios.post("/user/", data);
        if (response.status === 200) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const getFromId = async (id) => {
    try {
        const response = await axios.get("/user/" + id);
        if (response.status === 200) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (err) {
        console.error(err);
        return err
    }
}