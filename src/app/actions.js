'use server';

export async function obtenerCartasRickAndMorty() {
  try {
    // 1. Consultamos la API externa
    const res = await fetch('https://rickandmortyapi.com/api/character');

    // 2. Manejo de error si la red responde pero con un fallo HTTP
    if (!res.ok) {
      return { ok: false, error: 'No se pudieron obtener los personajes.' };
    }

    const data = await res.json();

    // 3. Tomamos 8 personajes y extraemos id, nombre e imagen
    const personajes = data.results.slice(0, 8).map((char) => ({
      id: char.id,
      nombre: char.name,
      imagen: char.image,
    }));

    return { ok: true, cartas: personajes };
  } catch (error) {
    // 4. Captura de errores de red o servidor con try/catch
    return { ok: false, error: 'Error de conexión con la API externa.' };
  }
}