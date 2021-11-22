import { isUndefined } from 'util';
import axios from "axios";
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();

export function calcularExpiracionSesion() {
    const now = new Date().getTime();
    const newDate = now + 60 * 30 * 1000;
    return new Date(newDate);

    //tiempo de expiración de la sesión
}

export function getSession() {
    return isUndefined(cookies.get('_s')) ? false : cookies.get('_s');
    //la persona me pide usuario y contraseña y me crea una autorización
}

function renovarSesion() {
    const sesion = getSession();
    if (!sesion) window.location.href = '/login';
    cookies.set('_s', sesion, {
        path: '/',
        expires: calcularExpiracionSesion(),
    });
}

export const request = {
    get: function (url) {
        renovarSesion();
        return axios.get(url);
    }
}
