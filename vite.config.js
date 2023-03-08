import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '',
	root: 'src',
	build: {
		outDir: '../',
		lib: {
			entry: resolve(__dirname, './src/main.js'),
			name: 'IndexJS',
			fileName: 'index',
			formats: ['es'],
		},
		target: 'es2015',
		minify: 'terser',
	},
});
