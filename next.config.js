/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb+srv://ReveDB:Inibuatrevedb@reve.s1nbcek.mongodb.net/",
  },
};

module.exports = nextConfig;