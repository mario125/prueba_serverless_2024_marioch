import { APIGatewayProxyHandler } from 'aws-lambda';
import { apiPeopleId } from './swapi/swapiService'; 
import { idSchema } from './validations/userSchema'; 

export const getSwapiPeopleId: APIGatewayProxyHandler = async (event) => {
  try {
    const parsedBody = JSON.parse(event.body || '{}'); 

    
    const validationResult = idSchema.safeParse(parsedBody);

    if (!validationResult.success) {
      return {
        statusCode: 400, 
        body: JSON.stringify({
          message: 'Error de validación',
          error: validationResult.error.errors, 
        }),
      };
    }

    const { id } = validationResult.data; 

    
    const responseData = await apiPeopleId(id);

    if (!responseData) {
      return {
        statusCode: 404, 
        body: JSON.stringify({
          message: 'El personaje no se encuentra en la base de datos.',
        }),
      };
    }

    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Personaje encontrado exitosamente.',
        data: responseData,
      }),
    };

  } catch (error) {
   
    return {
      statusCode: 500, 
      body: JSON.stringify({
        message: 'Ocurrió un error interno en el servidor',
        error: error.message,
      }),
    };
  }
};
