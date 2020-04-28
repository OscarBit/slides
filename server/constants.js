const prod = {
  assetsPath: 'https://slides-backend.web.cern.ch/',
  uploadsFolder: '/mydata/presentations',
};
const dev = {
  assetsPath: 'http://localhost:3000',
  uploadsFolder: '/Users/aristofanischionis/Desktop/Slides/presentations',
};
const config = process.env.NODE_ENV === 'development' ? dev : prod;

module.exports = config;
