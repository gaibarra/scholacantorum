-- Schola Cantorum de México - Database Schema
-- PostgreSQL

-- Programas de estudio
CREATE TABLE IF NOT EXISTS programs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  age_range VARCHAR(50),
  schedule TEXT,
  price DECIMAL(10,2),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Maestros / Profesores
CREATE TABLE IF NOT EXISTS teachers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  bio TEXT,
  photo_url VARCHAR(500),
  specialization VARCHAR(200),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pre-inscripciones / Solicitudes
CREATE TABLE IF NOT EXISTS enrollments (
  id SERIAL PRIMARY KEY,
  child_name VARCHAR(200) NOT NULL,
  child_age INTEGER,
  child_birthdate DATE,
  parent_name VARCHAR(200) NOT NULL,
  parent_email VARCHAR(200) NOT NULL,
  parent_phone VARCHAR(20),
  program VARCHAR(50),
  previous_experience TEXT,
  how_found_us VARCHAR(100),
  municipality VARCHAR(100),
  notes TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Mensajes de contacto
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  subject VARCHAR(300),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Datos semilla: Programas
INSERT INTO programs (name, description, age_range, schedule, price)
VALUES
  ('Taller de Iniciación Musical', 'Primer acercamiento a la música a través del juego, el canto y el ritmo.', '4-6 años', 'Sábados 10:00-12:00', 800.00),
  ('Coro Infantil', 'Desarrollo de técnica vocal, lectura musical y trabajo en ensamble.', '6-9 años', 'Martes y Jueves 16:00-18:00', 1200.00),
  ('Coro Juvenil', 'Repertorio clásico y contemporáneo. Participación en conciertos nacionales.', '10-14 años', 'Lunes, Miércoles y Viernes 16:00-18:30', 1500.00),
  ('Ensamble de Solistas', 'Programa avanzado para voces excepcionales. Giras internacionales y grabaciones.', 'Por audición', 'Según calendario', 2000.00)
ON CONFLICT DO NOTHING;

-- Índices
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);
CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments(parent_email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(is_read);
CREATE INDEX IF NOT EXISTS idx_programs_active ON programs(is_active);
