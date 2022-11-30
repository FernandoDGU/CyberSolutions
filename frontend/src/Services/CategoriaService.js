import { axiosBase as axios } from "./Config";

export const getCategorias = async () => {
    try {
        const response = await axios.get("/categoria");
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