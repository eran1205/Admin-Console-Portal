// const withImages = require('next-images');

// const redirects = {
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/dashboard',
//         permanent: true
//       }
//     ];
//   }
// };


// module.exports =  withImages(redirects);

module.exports = {
  basePath: '/Admin-Console-Portal',
  assetPrefix: '/Admin-Console-Portal',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      }
    ];
  },
};
