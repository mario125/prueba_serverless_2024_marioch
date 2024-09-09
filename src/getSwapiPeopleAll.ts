import { APIGatewayProxyHandler } from 'aws-lambda';
import { apiPeopleAll } from './swapi/swapiService'; 
import { TranslatedApiResponse } from './models/translatedPeople'; 


export const getSwapiPeopleAll: APIGatewayProxyHandler = async (event) => {
  try {
    const responseData: TranslatedApiResponse | string = await apiPeopleAll();

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        data: responseData,
      }),
    };

    return response;

  } catch (ex) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Ocurrió un error en el servidor',
        details: ex.message,
      }),
    };
  }
};
