
export interface BibliographyItem {
  category: string;
  badge: string;
  title: string;
  description: string;
  audience?: string;
  items?: string[];
  featured?: boolean;
}

export const bibliography = [
  {
    category: "Libro del maestro",
    badge: "Formación infantil",
    title: "In Pilcuicatl",
    description:
      "Material orientado al canto del niño. Puede presentarse como obra de referencia para docentes, directores de coro y formadores musicales.",
  },
  {
    category: "Antología vocal",
    badge: "Secundaria / Coral",
    title: "El joven cantor",
    description:
      "Material de apoyo para el desarrollo del eje de expresión en canto coral, alineado al trabajo escolar y al fortalecimiento del repertorio vocal juvenil.",
  },
  {
    category: "Repertorio coral",
    badge: "Coro mixto e infantil",
    title: "Felipe Ledesma: Obras corales",
    description:
      "Reúne composiciones originales, adaptaciones y arreglos para coro mixto y coro de niños. Aporta tradición coral, valor pedagógico y repertorio mexicano.",
  },
  {
    category: "Método pedagógico",
    badge: "Serie principal",
    title: "Método Educanto",
    description:
      "Serie de antologías vocales para niños y jóvenes con organización progresiva por dificultad, número de voces, alteraciones, traducciones y recursos de apoyo.",
    featured: true,
    items: [
      "Educanto · Niños · Volumen 1: cantos a una voz, juegos, traducciones, bibliografía y mesografía.",
      "Educanto · Niños · Volumen 2: canto a una voz, cánones, canto a dos voces y villancicos mexicanos.",
      "Educanto · Niños · Volumen 3: canto a una, dos y tres voces, cantos indígenas, homofonía y polifonía.",
      "Educanto · Jóvenes · Volumen 1: antología vocal juvenil para formación progresiva.",
      "Educanto · Jóvenes · Volumen 2: organización por número de voces, alteraciones y modulación.",
      "Educanto · Jóvenes · Volumen 3: continuidad del método con exigencia musical creciente.",
    ],
  },
  {
    category: "Trabajo académico",
    badge: "UNAM",
    title: "Antología de la Romanza Rusa",
    description:
      "Cuaderno académico ligado al estudio e interpretación de la romanza y canción rusa, con participación de Alfredo Mendoza en revisión musical y fonética.",
  },
  {
    category: "Edición especial",
    badge: "Canto y piano",
    title: "Poésies Chinoises",
    description:
      "Edición de obras para canto y piano de Manuel M. Ponce, con traducción al español y revisión asociadas a Alfredo Mendoza.",
  },
];
