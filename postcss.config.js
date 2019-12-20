/**
 * This files is used to generate tailwindcss
 */
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
    ],
};