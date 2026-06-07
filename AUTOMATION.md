# Automatizacion barata de datos FEB

La opcion barata y automatica es GitHub Actions + Supabase.

## 1. Crear tablas

Ejecuta en Supabase SQL Editor:

- `supabase-sports-schema.sql`
- `supabase-schema.sql`

## 2. Configurar secretos en GitHub

En el repositorio:

Settings -> Secrets and variables -> Actions -> New repository secret

Necesarios:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_EMAIL`
- `SUPABASE_PASSWORD`

Opcional, recomendado si quieres evitar login por email:

- `SUPABASE_SERVICE_ROLE_KEY`

## 3. Frecuencia

`.github/workflows/import-feb-data.yml` ejecuta `import-feb-data.js` cada 30 minutos y tambien manualmente.

Eso actualiza:

- equipos
- calendario
- resultados
- playoffs/final four
- clasificacion general/local/visitante

## 4. Web

La web intenta leer primero Supabase. Si no hay datos, usa los datos locales de respaldo.
