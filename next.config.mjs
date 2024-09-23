/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
          test: /\.apk$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/assets',
              publicPath: '/_next/static/assets',
            },
          },
        });
    
        return config;
      },
};

export default nextConfig;
