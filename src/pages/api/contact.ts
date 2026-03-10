import type { APIRoute } from 'astro';
import { query } from '~/lib/db';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        const { name, email, subject, message } = data;

        // Validación básica
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: 'Faltan campos requeridos (nombre, email, mensaje)' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Insertar en la base de datos
        const result = await query(
            `INSERT INTO contact_messages (name, email, subject, message)
       VALUES ($1, $2, $3, $4)
       RETURNING id, created_at`,
            [name, email, subject || null, message]
        );

        return new Response(
            JSON.stringify({
                success: true,
                message: '¡Mensaje recibido! Te responderemos pronto.',
                id: result.rows[0].id,
            }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error en contacto:', error);
        return new Response(
            JSON.stringify({ error: 'Error interno del servidor' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
