import axios from 'axios';

const getHuespedes = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/huespedes`);
    return response
}

const createHuesped = (huesped) => {
    const response = axios.post(`${process.env.SERVIDOR}/huesped`, {
        name: huesped.name,
        lastname: huesped.lastname,
        rut: huesped.rut,
        habitacion:huesped.habitacion,
        company: huesped.company,
    });
    return response
}

const getHuesped = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/huesped/search/${id}`)
    return response
}

const updateHuesped = (id, huesped) => {
    const response = axios.put(`${process.env.SERVIDOR}/huesped/update/${id}`, huesped)
    return response
}

module.exports = {
    getHuespedes,
    createHuesped,
    getHuesped,
    updateHuesped
}