import { axiosBase as axios } from "./Config";

export const createReporte = async (data) => {
    try {
        const response = await axios.post("/reporte/", data);
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

export const updateReporte = async (data, id) => {
    try {
        const response = await axios.patch("/reporte/" + id, data);
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

export const getReporteFromId = async (id) => {
    try {
        const response = await axios.get("/reporte/" + id);
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

export const getReporteFromSucursal = async (id) => {
    try {
        const response = await axios.get("/reporte/sucursal/" + id);
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


export const getInfoReportes = async (id) => {
    try {
        const response = await axios.get("/reporte/counts/sucursal/" + id);
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

export const getLast5 = async (id) => {
    try {
        const response = await axios.get("/reporte/last5/sucursal/" + id);
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

export const getReportesByCategory = async (idCat, idSuc) => {
    try {
        const response = await axios.get("/reporte/category/" + idCat + "/sucursal/" + idSuc);
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