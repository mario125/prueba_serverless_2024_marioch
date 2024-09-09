import { z } from 'zod';

export const userSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  correo_electronico: z.string().email("El correo electrónico debe ser válido"),
  contrasena: z.string().min(8, "La contraseña debe tener al menos 8 caracteres").regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un carácter especial"
  ),
  fecha_creacion: z.string().optional(), 
});


export const idSchema = z.object({
    id: z.number({
      required_error: "El ID es obligatorio",
      invalid_type_error: "El ID debe ser un número",
    }).positive("El ID debe ser un número positivo")
  });