/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        API_URL:
            "https://deploy-reve-k5cz51j48-buatgdrive43-gmailcom.vercel.app/",
        DB_LOCAL_URI:
            "mongodb+srv://ReveDB:Inibuatrevedb@reve.s1nbcek.mongodb.net/",
        DB_URI: "mongodb+srv://ReveDB:Inibuatrevedb@reve.s1nbcek.mongodb.net/",
    },
};

module.exports = nextConfig;
