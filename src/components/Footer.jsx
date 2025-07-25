// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm p-4 text-center mt-10">
      © {new Date().getFullYear()} Sci-Fi Innovation Club, CU. All rights reserved. | Designed by <a href="https://github.com/sandeepvashishtha" target="_blank" rel="noopener noreferrer">Sandeep Vashishtha</a> and the Sci-Fi Club Team
    </footer>
  );
}
