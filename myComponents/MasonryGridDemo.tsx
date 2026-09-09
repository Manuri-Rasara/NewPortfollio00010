// demo.tsx
import React from 'react';
import MasonryGrid from './MasonryGrid'; // Adjust path as needed

// Sample data for the demo
const galleryItems = [
  { id: 1, src: "/Assets/AllLogo/Logo1.png" },
  { id: 2, src: "/Assets/AllLogo/Logo3.png" },
  { id: 3, src: "/Assets/AllLogo/Logo8.png" },
  { id: 6, src: "/Assets/AllLogo/Logo9.webp" },
  { id: 5, src: "/Assets/AllLogo/Logo4.png" },
  { id: 4, src: "/Assets/AllLogo/Logo5.png" },
  // { id: 7, src: "/Assets/AllLogo/Logo9.png" },
  { id: 8, src: "/Assets/AllLogo/Logo10.webp" },
  // { id: 9, src: "/Assets/AllLogo/Logo4.png" },
  // { id: 10, src: "/Assets/AllLogo/Logo6.png" },
  // { id: 11, src: "/Assets/AllLogo/Logo8.png" },
  // { id: 10, src: "/Assets/AllLogo/Logo10.png" },
  // { id: 8, src: "/Assets/AllLogo/Logo8.png" },
  // { id: 9, src: "/Assets/AllLogo/Logo9.png" },
  // { id: 10, src: "/Assets/AllLogo/Logo10.png" },
  // { id: 11, src: "/Assets/AllLogo/Logo5.png" },
  // { id: 12, src: 'https://cdn.21st.dev/assets/mirror/15/1564ca5498bb4e8aa3af8045fdecb2d33b79f0669038ed7db4a8944cc2de1fab.jpg' },
  // { id: 13, src: 'https://cdn.21st.dev/assets/mirror/8f/8ff9e4681f12cdb14e258d27b9e1be0348bc61849b06864065f046138624a18c.jpg' },
  // { id: 8, src: 'https://cdn.21st.dev/assets/mirror/12/12d71f6d041b535df7dd2b8201280d56b09ed0410e7ca9082d16d17a64db75b6.jpg' },
  // { id: 9, src: 'https://cdn.21st.dev/assets/mirror/93/93da44541d822ae424bc321d7b6f4b273cfe47c7532eab3c6b6617c5811541c5.jpg' },
  // { id: 10, src: 'https://cdn.21st.dev/assets/mirror/90/90a9a76192a8afc3e1daca9f6f1610b948f99c1636fb314233a3c87284874b33.jpg' },
  // { id: 11, src: 'https://cdn.21st.dev/assets/mirror/e7/e76535738655382fb613a88aed88929bd21b7f9d9e2427cd609726fc3a7ccf4d.jpg' },
  // { id: 12, src: 'https://cdn.21st.dev/assets/mirror/3d/3dd1f110c29b235ebd306e570f034157d58d085fe20ce5b0017d159f21423f72.jpg' },
  // { id: 13, src: 'https://cdn.21st.dev/assets/mirror/14/14129c6140df42c102a3bbf775a9e35938aa434cdc024bd26c2e3196cf7fa0a3.jpg' }
];

const MasonryGridDemo = () => {
  return (
    <div className="w-full min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">


        <MasonryGrid
          items={galleryItems}
          // Responsive columns controlled by Tailwind classes
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4"
          gap="1rem"
          renderItem={(item) => (
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card">
              <img
                src={item.src}
                alt={`Gallery item ${item.id}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default MasonryGridDemo;