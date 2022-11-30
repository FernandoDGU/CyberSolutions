import { axiosBase as axios } from "./Config";

export const createComentario = async (data) => {
    try {
        const response = await axios.post("/comentario/", data);
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

export const getComentarioByReporte = async (id) => {
    try {
        const response = await axios.get("/comentario/reportes/" + id);
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
