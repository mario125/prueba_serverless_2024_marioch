import { APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';
import { registerUser } from '../registerUser';

describe('Función registerUser', () => {

  test('debería registrar un usuario exitosamente y devolver 200', async () => {
   
    const randomEmail = `user${Math.floor(Math.random() * 10000)}@gmail.com`;

    const mockEvent: Partial<APIGatewayProxyEvent> = {
      body: JSON.stringify({
        nombre: 'PEPE',
        correo_electronico: randomEmail, 
        contrasena: 'Mario125@Lima',
        fecha_creacion: '2024-02-26 00:15:07',
      }),
    };
    const mockContext: Context = {} as Context;
    const mockCallback: Callback = jest.fn();  
    
    const result = await registerUser(mockEvent as APIGatewayProxyEvent, mockContext, mockCallback);
    
    if (result && result.body) {     
      const parsedBody = JSON.parse(result.body);        
      const userId = parsedBody.user.id;
     
      expect(parsedBody).toEqual({
        message: 'Usuario registrado con éxito',
        user: {
          id: userId, 
          nombre: 'PEPE',
          correo_electronico: randomEmail, 
          contrasena: 'Mario125@Lima',
          fecha_creacion: '2024-02-26 00:15:07',
        },
      });
     
      expect(result.statusCode).toBe(200);
    } else {
      fail('La función registerUser no devolvió un resultado válido.');
    }
  });

  test('debería devolver un error si el correo ya está en uso', async () => {
    const mockEvent: Partial<APIGatewayProxyEvent> = {
      body: JSON.stringify({
        nombre: 'PEPE',
        correo_electronico: 'jmuspeda33434ed@gmail.com', // Un correo que ya existe en la base de datos
        contrasena: 'Mario125@Lima',
        fecha_creacion: '2024-02-26 00:15:07',
      }),
    };
    const mockContext: Context = {} as Context;
    const mockCallback: Callback = jest.fn();

    const result = await registerUser(mockEvent as APIGatewayProxyEvent, mockContext, mockCallback);

    if (result && result.body) {
      const parsedBody = JSON.parse(result.body);     
      expect(parsedBody).toEqual({
        error: 'El correo electrónico ya está en uso.',
      });

      expect(result.statusCode).toBe(400);
    } else {
      fail('La función registerUser no devolvió un resultado válido.');
    }
  });

  test('debería devolver un error de validación si la entrada es incorrecta', async () => {
  
    const mockEvent: Partial<APIGatewayProxyEvent> = {
      body: JSON.stringify({
        nombre: '', 
        correo_electronico: 'jmuspeda33434ed@gmail.com',
        contrasena: 'Mario125@Lima',
      }),
    };
    const mockContext: Context = {} as Context;
    const mockCallback: Callback = jest.fn();


    const result = await registerUser(mockEvent as APIGatewayProxyEvent, mockContext, mockCallback);

    if (result && result.body) {      
      const parsedBody = JSON.parse(result.body);      
      expect(result.statusCode).toBe(400);
      expect(parsedBody).toEqual({
        error: 'Error de validación',
        details: [
          {
            code: 'too_small',
            minimum: 1,
            type: 'string',
            inclusive: true,
            exact: false,
            message: 'El nombre es obligatorio',
            path: ['nombre'],
          },
        ],
      });
    } else {
      fail('La función registerUser no devolvió un resultado válido.');
    }
  });
});
