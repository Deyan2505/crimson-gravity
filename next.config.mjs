const nextConfig = {
    output: process.env.IS_STATIC_EXPORT ? 'export' : undefined,
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
