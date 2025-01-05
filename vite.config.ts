import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/professional-presentation/',  // <-- El nombre de tu repositorio aquí
});
