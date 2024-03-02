/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'bannerImage': 'url(images/bg-banner.png)'
            }
        },
    },
    plugins: [],
}
