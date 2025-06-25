// import fs from 'fs';
// import path from 'path';

// // Path to match your file structure
// const filePath = path.join(process.cwd(), 'src/app/data/banner-data.json');

// export async function GET(request) {
//   try {
//     let bannerData = [];

//     // Check if file exists and read data
//     if (fs.existsSync(filePath)) {
//       try {
//         const fileContent = fs.readFileSync(filePath, 'utf8').trim();
//         // Only parse if file has content
//         if (fileContent) {
//           bannerData = JSON.parse(fileContent);
//         }
//       } catch (parseError) {
//         console.log('File exists but is empty or invalid JSON, returning empty array');
//         bannerData = [];
//       }
//     }

//     // Return the banner data
//     return new Response(JSON.stringify({
//       success: true,
//       data: bannerData,
//       count: bannerData.length
//     }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' }
//     });

//   } catch (err) {
//     console.error('GET API Error:', err);
//     return new Response(JSON.stringify({
//       success: false,
//       error: 'Failed to fetch banner data',
//       details: err.message
//     }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   }
// }

// // Optional: Add support for query parameters (like pagination, filtering)
// export async function GET_WITH_PARAMS(request) {
//   try {
//     const url = new URL(request.url);
//     const limit = parseInt(url.searchParams.get('limit')) || null;
//     const offset = parseInt(url.searchParams.get('offset')) || 0;
//     const search = url.searchParams.get('search') || '';

//     let bannerData = [];

//     // Check if file exists and read data
//     if (fs.existsSync(filePath)) {
//       try {
//         const fileContent = fs.readFileSync(filePath, 'utf8').trim();
//         if (fileContent) {
//           bannerData = JSON.parse(fileContent);
//         }
//       } catch (parseError) {
//         console.log('File exists but is empty or invalid JSON, returning empty array');
//         bannerData = [];
//       }
//     }

//     // Filter by search term if provided
//     if (search) {
//       bannerData = bannerData.filter(banner => 
//         banner.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // Sort by newest first (highest id)
//     bannerData.sort((a, b) => b.id - a.id);

//     // Apply pagination
//     const total = bannerData.length;
//     if (limit) {
//       bannerData = bannerData.slice(offset, offset + limit);
//     }

//     return new Response(JSON.stringify({
//       success: true,
//       data: bannerData,
//       pagination: {
//         total,
//         count: bannerData.length,
//         offset,
//         limit
//       }
//     }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' }
//     });

//   } catch (err) {
//     console.error('GET API Error:', err);
//     return new Response(JSON.stringify({
//       success: false,
//       error: 'Failed to fetch banner data',
//       details: err.message
//     }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   }
// }