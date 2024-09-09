import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { User } from './models/modelUser';
import { userSchema } from './validations/userSchema';

export const registerUser: APIGatewayProxyHandler = async (event): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'El cuerpo de la solicitud no puede estar vacío',
        }),
      };
    }

    const { success, data, error } = userSchema.safeParse(JSON.parse(event.body || '{}'));
    
    if (!success) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Error de validación',
          details: error.errors,
        }),
      };
    }

    const existingUser = await User.findOne({
      where: { correo_electronico: data.correo_electronico },
    });

    if (existingUser) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'El correo electrónico ya está en uso.',
        }),
      };
    }

    const newUser = await User.create(data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Usuario registrado con éxito',
        user: newUser,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Ocurrió un error en el servidor',
        details: err.message,
      }),
    };
  }
};
