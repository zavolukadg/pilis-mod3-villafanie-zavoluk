const SERVER_DOMAIN = 'https://api.open-meteo.com/v1/forecast?current_weather=true';

/* https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&timezone=America/Argentina/Jujuy */
/* https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=-22.6972132&longitude=-66.4968405&timezone=America/Argentina/Jujuy */

export const getTags = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/tags`);
    return response.json();
  } catch {
    throw new Error('could not fetch tags');
  }
};

export const getTimeInfo = async (latitud, longitud) => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}&latitude=${latitud}&longitude=${longitud}&timezone=America/Argentina/Jujuy`);
    return response.json();
  } catch {
    throw new Error('No se pudo obtener informacion del clima');
  }
};