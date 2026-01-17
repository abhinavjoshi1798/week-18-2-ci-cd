/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};
