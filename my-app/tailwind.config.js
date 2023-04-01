/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily:{
      body:[
          'klee',
          'Yu Gothic',
          'Yu Mincho Light',
          'YuMincho',
          'Yu Mincho',
      ]
    },
    extend: {
      lineHeight:{
        '12':'3.5rem'
      },
      width:{
        '150':'450px'
      },
      colors:{
        primary:'#f5f5f5',
        fontcolor:'rgb(77, 77, 77)'
    },
    fontSize:{
      '2.2xl':'1.5rem',
      '1xl':'1.2rem'
    },
    width:{
      '100':'400px',
      '160':'500'
    }
    },
  },
  plugins: [],
}
