import * as yup from 'yup';

const huespedValidation = yup.object({
    name: yup.string()
        .min(3, "Debe contener minimo 3 caracteres")
        .max(50, "Debe contener maximo 50 caracteres")
        .required("El nombre es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales"),

    lastname: yup.string()
        .min(3, "Debe contener minimo 3 caracteres")
        .max(50, "Debe contener maximo 50 caracteres")
        .required("El nombre es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales"),

        company:yup.string()
        .min(3, "Debe contener minimo 3 caracteres")
        .max(50, "Debe contener maximo 50 caracteres")
        .required("El nombre es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales"),

        habitacion:yup.number()
       .min(1, "El peso debe ser mayor a 0")
        .required("El peso es obligatorio"),

        rut: yup.number()
        .min(1, "El peso debe ser mayor a 0")
        .required("El peso es obligatorio"),

})

export default huespedValidation