module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },


            colors: {
                primary: '#ea8616',
                secondary: '#ecc94b',
                'dark': '#1c1e1f',
                'dark300': '#181a1a',
                'dark400': '#1a1c1c',
                'dark500': '#141515',

                'light': '#f8f7f7',
                'gray100': '#efeaea',
                'gray200': '#c1c6ce',
                'gray300': '#9ca3af',
                'gray400': '#33383a',

                'blue': '#1fb6ff',
                'purple': '#7e5bef',
                'pink': '#ff49db',
                'orange': '#ff7849',
                'green': '#13ce66',
                'yellow': '#ffc82c',
                'gray': '#a6b1c2',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            }
        },

    },
    plugins: [
        require('tailwindcss-rtl'),
    ],
}
