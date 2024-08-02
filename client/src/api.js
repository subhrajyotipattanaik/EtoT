// // src/api.js
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3000',
// });

// export const importUser = async (file) => {
//   const formData = new FormData();
//   formData.append('file', file);

//   try {
//     const response = await api.post('/importUser', formData);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };