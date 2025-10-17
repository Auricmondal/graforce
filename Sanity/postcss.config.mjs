import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

const config = {
  plugins: [
    tailwindcss(),  // function required by Vite/Sanity
    autoprefixer(),
  ],
};

export default config;
