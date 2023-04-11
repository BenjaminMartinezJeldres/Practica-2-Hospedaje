import axios from 'axios';

const getEmpleados = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/empleados`);
    return response
}

const createEmpleado = (empleado) => {
    const response = axios.post(`${process.env.SERVIDOR}/empleado`, {
        name: empleado.name,
        lastname: empleado.lastname,
        rut: empleado.rut,
        correo: empleado.correo,
        telefono: empleado.telefono
    });
    return response
}

const getEmpleado = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/empleado/search/${id}`)
    return response
}

const updateEmpleado = (id, empleado) => {
    const response = axios.put(`${process.env.SERVIDOR}/empleado/update/${id}`, empleado)
    return response
}

module.exports = {
    getEmpleados,
    createEmpleado,
    getEmpleado,
    updateEmpleado
}