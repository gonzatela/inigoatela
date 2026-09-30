import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
const template = readFileSync('index.html', 'utf8');
const pages = [
  ['articulos', 'Artículos — Íñigo Atela', 'Artículos sobre aprendizaje, pensamiento y decisiones de Íñigo Atela.'],
  ['sobre-mi', 'Sobre mí — Íñigo Atela', 'Conoce a Íñigo Atela: ADE, auditoría en PwC, CFA Level I y el máster en Internacionalización de Empresas de la UIMP.'],
  ['articulos/aprender-sin-releer', 'Aprender no es releer: es intentar recordar — Íñigo Atela', 'Cómo poner en práctica el recuerdo activo y la repetición espaciada en tu próxima sesión de estudio.'],
  ['articulos/decidir-con-claridad', 'Mejores decisiones, menos respuestas automáticas — Íñigo Atela', 'Una propuesta para definir tus criterios, contrastar suposiciones y revisar cómo tomas decisiones.'],
];
for (const [path, title, description] of pages) {
  mkdirSync(path, { recursive: true });
  writeFileSync(`${path}/index.html`, template.replaceAll('Íñigo Atela — Ideas para aprender mejor', title).replace('Un espacio de Íñigo Atela sobre aprendizaje, decisiones y cómo llevar las buenas ideas a la práctica.', description).replace('Aprendizaje, decisiones e ideas para llevar a la práctica.', description));
}
