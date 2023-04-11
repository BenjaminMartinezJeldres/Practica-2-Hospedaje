import * as yup from 'yup';

const empleadoValidation = yup.object({
    name: yup.string()
        .min(3, "Debe contener minimo 3 caracteres")
        .max(50, "Debe contener maximo 50 caracteres")
        .required("El nombre es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales"),

    lastname: yup.string()
        .min(3, "Debe contener minimo 3 caracteres")
        .max(50, "Debe contener maximo 50 caracteres")
        .required("La raza es obligatoria")
        .matches(/^[a-zA-Z0-9 ]*$/, "El apellido no puede contener caracteres especiales"),

    rut: yup.string()
        .min(3, "Debe contener minimo 3 caracteres")
        .max(50, "Debe contener maximo 50 caracteres")
        .required("La especie es obligatoria")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales"),

    correo: yup.string()
        .min(3, "Debe contener minimo 3 caracteres")
        .max(50, "Debe contener maximo 50 caracteres")
        .required("El genero es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales"),

    telefono: yup.number()
        .min(1, "El peso debe ser mayor a 0")
        .required("El peso es obligatorio"),
})

export default empleadoValidation
