/* psql -h localhost -p 5432 -U root -d test */
SELECT 'CREATE DATABASE test'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'test')\gexec