import { APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';
import { getSwapiPeopleId } from '../getSwapiPeopleId';

describe('Función getSwapiPeopleId', () => {

  test('debería devolver el personaje correctamente con código 200', async () => {
    const mockEvent: Partial<APIGatewayProxyEvent> = {
      body: JSON.stringify({
        id: 1,  // La entrada esperada
      }),
    };
    const mockContext: Context = {} as Context;
    const mockCallback: Callback = jest.fn();

    // Ejecutar la función `getSwapiPeopleId`
    const result = await getSwapiPeopleId(mockEvent as APIGatewayProxyEvent, mockContext, mockCallback);

    if (result && result.body) {
      const parsedBody = JSON.parse(result.body);

      // Verificar que el código de estado sea 200 y los datos del personaje sean correctos
      expect(parsedBody).toEqual({
        message: 'Personaje encontrado exitosamente.',
        data: {
          nombre: 'Luke Skywalker',
          altura: '172',
          masa: '77',
          color_de_cabello: 'blond',
          color_de_piel: 'fair',
          color_de_ojos: 'blue',
          anio_de_nacimiento: '19BBY',
          genero: 'male',
          planeta_natal: 'https://swapi.py4e.com/api/planets/1/',
          peliculas: [
            'https://swapi.py4e.com/api/films/1/',
            'https://swapi.py4e.com/api/films/2/',
            'https://swapi.py4e.com/api/films/3/',
            'https://swapi.py4e.com/api/films/6/',
            'https://swapi.py4e.com/api/films/7/',
          ],
          especies: ['https://swapi.py4e.com/api/species/1/'],
          vehiculos: ['https://swapi.py4e.com/api/vehicles/14/', 'https://swapi.py4e.com/api/vehicles/30/'],
          naves_estelares: ['https://swapi.py4e.com/api/starships/12/', 'https://swapi.py4e.com/api/starships/22/'],
          creado: '2014-12-09T13:50:51.644000Z',
          editado: '2014-12-20T21:17:56.891000Z',
          url: 'https://swapi.py4e.com/api/people/1/',
        },
      });

      expect(result.statusCode).toBe(200);
    } else {
      fail('La función getSwapiPeopleId no devolvió un resultado válido.');
    }
  });

 

});
