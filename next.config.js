/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        API_URL: "https://reveindonesia.site",
        DB_LOCAL_URI:
            "mongodb+srv://ReveDB:Inibuatrevedb@reve.s1nbcek.mongodb.net/",
        DB_URI: "mongodb+srv://ReveDB:Inibuatrevedb@reve.s1nbcek.mongodb.net/",
    },
};

module.exports = nextConfig;
