import type { APIRoute } from 'astro';
import { query } from '~/lib/db';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        const { child_name, child_age, child_birthdate, program, parent_name, parent_email, parent_phone, municipality, previous_experience, how_found_us } = data;

        // Validación básica
        if (!child_name || !parent_name || !parent_email || !parent_phone) {
            return new Response(
                JSON.stringify({ error: 'Faltan campos requeridos' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Insertar en la base de datos
        const result = await query(
            `INSERT INTO enrollments (child_name, child_age, child_birthdate, program, parent_name, parent_email, parent_phone, municipality, previous_experience, how_found_us, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'pending')
       RETURNING id, created_at`,
            [child_name, child_age || null, child_birthdate || null, program || null, parent_name, parent_email, parent_phone, municipality || null, previous_experience || null, how_found_us || null]
        );

        return new Response(
            JSON.stringify({
                success: true,
                message: '¡Pre-inscripción recibida exitosamente!',
                id: result.rows[0].id,
            }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error en pre-inscripción:', error);
        return new Response(
            JSON.stringify({ error: 'Error interno del servidor' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
