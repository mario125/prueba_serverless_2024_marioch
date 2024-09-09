import { APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';
import { getUserId } from '../getUserId';

describe('Función getUserId', () => {

  test('debería devolver un usuario exitosamente con código 200', async () => {
    const mockEvent: Partial<APIGatewayProxyEvent> = {
      body: JSON.stringify({
        id: 1,  // La entrada esperada
      }),
    };
    const mockContext: Context = {} as Context;
    const mockCallback: Callback = jest.fn();

    // Ejecutar la función `getUserId`
    const result = await getUserId(mockEvent as APIGatewayProxyEvent, mockContext, mockCallback);

    if (result && result.body) {
      const parsedBody = JSON.parse(result.body);
      const userId = parsedBody.user.id;

      // Verificar que el código de estado sea 200 y los datos del usuario sean correctos
      expect(parsedBody).toEqual({
        message: "Usuario encontrado exitosamente",
        user: {
          id: 1,
          nombre: "ff",
          correo_electronico: "jj@gmail.com",
          contrasena: "dfdf",
          fecha_creacion: "2024-02-26T00:15:07.000Z"
        
      }});

      expect(result.statusCode).toBe(200);
    } else {
      fail('La función getUserId no devolvió un resultado válido.');
    }
  });

  // test('debería devolver un error de validación si el id está malformado', async () => {
  //   const mockEvent: Partial<APIGatewayProxyEvent> = {
  //     body: JSON.stringify({
  //       id: '',  // Simulamos un id malformado
  //     }),
  //   };
  //   const mockContext: Context = {} as Context;
  //   const mockCallback: Callback = jest.fn();

  //   // Ejecutar la función `getUserId`
  //   const result = await getUserId(mockEvent as APIGatewayProxyEvent, mockContext, mockCallback);

  //   if (result && result.body) {
  //     const parsedBody = JSON.parse(result.body);

  //     // Verificar que el código de estado sea 400 y contenga el error de validación
  //     expect(result.statusCode).toBe(400);
  //     expect(parsedBody).toEqual({
  //       error: 'Error de validación',
  //       details: [
  //         {
  //           code: 'too_small',
  //           minimum: 1,
  //           type: 'string',
  //           inclusive: true,
  //           exact: false,
  //           message: 'El ID es obligatorio',
  //           path: ['id'],
  //         },
  //       ],
  //     });
  //   } else {
  //     fail('La función getUserId no devolvió un resultado válido.');
  //   }
  // });

  // test('debería devolver 404 si el usuario no se encuentra', async () => {
  //   const mockEvent: Partial<APIGatewayProxyEvent> = {
  //     body: JSON.stringify({
  //       id: 9999,  // Simulamos un id que no existe
  //     }),
  //   };
  //   const mockContext: Context = {} as Context;
  //   const mockCallback: Callback = jest.fn();

  //   // Ejecutar la función `getUserId`
  //   const result = await getUserId(mockEvent as APIGatewayProxyEvent, mockContext, mockCallback);

  //   if (result && result.body) {
  //     const parsedBody = JSON.parse(result.body);

  //     // Verificar que el código de estado sea 404 y contenga el mensaje esperado
  //     expect(result.statusCode).toBe(404);
  //     expect(parsedBody).toEqual({
  //       message: 'Usuario no encontrado',
  //     });
  //   } else {
  //     fail('La función getUserId no devolvió un resultado válido.');
  //   }
  // });

  // test('debería devolver un error 500 si ocurre un error en el servidor', async () => {
  //   const mockEvent: Partial<APIGatewayProxyEvent> = {
  //     body: JSON.stringify({
  //       id: 1,  // Simulamos una entrada correcta
  //     }),
  //   };
  //   const mockContext: Context = {} as Context;
  //   const mockCallback: Callback = jest.fn();

  //   // Ejecutar la función `getUserId`
  //   const result = await getUserId(mockEvent as APIGatewayProxyEvent, mockContext, mockCallback);

  //   if (result && result.body) {
  //     const parsedBody = JSON.parse(result.body);

  //     // Verificar que el código de estado sea 500 y contenga el mensaje de error
  //     expect(result.statusCode).toBe(500);
  //     expect(parsedBody).toEqual({
  //       error: 'Ocurrió un error en el servidor',
  //       details: 'Error en la base de datos',
  //     });
  //   } else {
  //     fail('La función getUserId no devolvió un resultado válido.');
  //   }
  // });

});
