import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/views/**/*.antlers.html',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.js',
    './content/collections/**/*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
  ],
}