import axios from 'axios';

const getHabitaciones = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/habitaciones`);
    return response
}

const createHabitacion = (habitacion) => {
    const response = axios.post(`${process.env.SERVIDOR}/habitacion`, {
        name: habitacion.name,
    });
    return response
}

const getHabitacion = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/habitacion/search/${id}`)
    return response
}

const updateHabitacion = (id, habitacion) => {
    const response = axios.put(`${process.env.SERVIDOR}/habitacion/update/${id}`,habitacion)
    return response
}

module.exports = {
    getHabitaciones,
    createHabitacion,
    getHabitacion,
    updateHabitacion
}