import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';
import { Personaje, ApiResponse } from '../models/people'; 
import { TranslatedPersonaje, TranslatedApiResponse } from '../models/translatedPeople'; 
dotenv.config();


const translateFields = (data: ApiResponse): TranslatedApiResponse => {
    const cambiarLlaves = (data: ApiResponse): TranslatedPersonaje[] => {
        return data.results.map((personaje: Personaje): TranslatedPersonaje => ({
            nombre: personaje.name,
            altura: personaje.height,
            masa: personaje.mass,
            color_de_cabello: personaje.hair_color,
            color_de_piel: personaje.skin_color,
            color_de_ojos: personaje.eye_color,
            anio_de_nacimiento: personaje.birth_year,
            genero: personaje.gender,
            planeta_natal: personaje.homeworld,
            peliculas: personaje.films,
            especies: personaje.species,
            vehiculos: personaje.vehicles,
            naves_estelares: personaje.starships,
            creado: personaje.created,
            editado: personaje.edited,
            url: personaje.url
        }));
    };

    return {
        ...data,
        results: cambiarLlaves(data),
    };
};


const translateFieldsId = (data: Personaje): TranslatedPersonaje => {
    return {
        nombre: data.name,
        altura: data.height,
        masa: data.mass,
        color_de_cabello: data.hair_color,
        color_de_piel: data.skin_color,
        color_de_ojos: data.eye_color,
        anio_de_nacimiento: data.birth_year,
        genero: data.gender,
        planeta_natal: data.homeworld,
        peliculas: data.films,
        especies: data.species,
        vehiculos: data.vehicles,
        naves_estelares: data.starships,
        creado: data.created,
        editado: data.edited,
        url: data.url,
    };
};


export const apiPeopleAll = async (): Promise<TranslatedApiResponse | string> => {
    try {
        const config: AxiosRequestConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.SWAPI}people/`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const responseData: AxiosResponse<ApiResponse> = await axios.request(config);

        if (responseData.status === 200) {
            return translateFields(responseData.data);
        } else {
            return 'La solicitud a la API falló';
        }
    } catch (error) {
        throw new Error('Error en la solicitud a la API: ' + error.message);
    }
};


export const apiPeopleId = async (id: number): Promise<TranslatedPersonaje | string> => {
    try {
        const config: AxiosRequestConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.SWAPI}people/${id}/`,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const responseData: AxiosResponse<Personaje> = await axios.request(config);

        if (responseData.status === 200) {
            return translateFieldsId(responseData.data);
        } else {
            return 'La solicitud a la API falló';
        }
    } catch (error) {
        throw new Error('Error en la solicitud a la API: ' + error.message);
    }
};
