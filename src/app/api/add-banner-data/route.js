// import fs from 'fs';
// import path from 'path';

// // Correct path to match your file structure
// const filePath = path.join(process.cwd(), 'src/app/data/banner-data.json');

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { title, image } = body;

//     if (!title || !image) {
//       return new Response(JSON.stringify({ error: 'Title and image are required' }), {
//         status: 400,
//         headers: { 'Content-Type': 'application/json' }
//       });
//     }

//     let fileData = [];

//     // Check if file exists and handle empty file
//     if (fs.existsSync(filePath)) {
//       try {
//         const fileContent = fs.readFileSync(filePath, 'utf8').trim();
//         // Only parse if file has content
//         if (fileContent) {
//           fileData = JSON.parse(fileContent);
//         }
//       } catch (parseError) {
//         console.log('File exists but is empty or invalid JSON, starting with empty array');
//         fileData = [];
//       }
//     } else {
//       // Create directory if it doesn't exist
//       const dir = path.dirname(filePath);
//       if (!fs.existsSync(dir)) {
//         fs.mkdirSync(dir, { recursive: true });
//       }
//     }

//     const newBanner = {
//       id: Date.now(),
//       title,
//       image, // base64 URL
//     };

//     fileData.push(newBanner);

//     // Write to the JSON file
//     fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));

//     return new Response(JSON.stringify({ 
//       message: 'Banner added successfully', 
//       banner: newBanner 
//     }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' }
//     });

//   } catch (err) {
//     console.error('API Error:', err);
//     return new Response(JSON.stringify({ 
//       error: 'Failed to save banner', 
//       details: err.message 
//     }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   }
// }