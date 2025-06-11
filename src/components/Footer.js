import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#002B5A] text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-blue-200 hover:text-white">
                All
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-200 hover:text-white">
                Electronics
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-200 hover:text-white">
                Clothing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-200 hover:text-white">
                Home
              </Link>
            </li>
          </ul>
          <div className="container mx-auto mt-8 text-left text-blue-200">
            <p>&copy; 2024 American</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-blue-200 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-200 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white p-2 rounded-full bg-[#0758A8] hover:text-white"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M22.25 12.037c0-5.523-4.477-10-10-10S2.25 6.514 2.25 12.037c0 4.965 3.633 9.096 8.375 9.873v-6.953h-2.52v-2.92h2.52v-2.186c0-2.483 1.464-3.855 3.743-3.855 1.077 0 2.01.079 2.288.115v2.52h-1.493c-1.203 0-1.44.572-1.44 1.411v1.85h2.822l-.462 2.92h-2.36V22c4.742-.777 8.375-4.908 8.375-9.873z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white p-2 rounded-full bg-[#0758A8] hover:text-white"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M22.23 6.037c-.77.343-1.6.574-2.462.678.887-.53 1.57-1.378 1.89-2.396-.827.49-1.745.845-2.723 1.037-.78-.83-1.89-1.348-3.134-1.348-2.36 0-4.28 1.91-4.28 4.27 0 .33.037.653.118.96-.3.02-.59.04-1.28.04-1.92 0-3.61-.98-4.75-2.34-.3-.51-.47-1.1-.47-1.74 0-1.18.59-2.22 1.49-2.83-.02-.007-.05-.01-.07-.02v-.05c0 2.04 1.46 3.73 3.39 4.12-.36.09-.75.14-1.15.14-.28 0-.55-.02-.81-.08.54 1.68 2.11 2.9 3.97 2.94-1.46 1.13-3.3 1.81-5.32 1.81-.34 0-.67-.02-1-.06C5.55 19.98 7.7 20.67 9.8 20.67c10.87 0 16.81-9 16.81-16.81 0-.25-.008-.5-.022-.75.99-.71 1.84-1.59 2.51-2.6Z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white p-2 rounded-full bg-[#0758A8] hover:text-white"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.772 1.762 4.935 4.935.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.762 4.772-4.935 4.935-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.772-1.762-4.935-4.935-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.762-4.772 4.935-4.935 1.266-.057 1.646-.07 4.85-.07zm0-2.163C8.718 0 8.347.01 7.02.068c-3.414.16-5.46 2.208-5.626 5.626-.058 1.323-.068 1.694-.068 5.02s.01 3.697.068 5.02c.166 3.414 2.212 5.46 5.626 5.626 1.323.058 1.694.068 5.02.068s3.697-.01 5.02-.068c3.414-.166 5.46-2.212 5.626-5.626.058-1.323.068-1.694.068-5.02s-.01-3.697-.068-5.02c-.166-3.414-2.212-5.46-5.626-5.626C15.347 0 14.976.01 11.65.068V0zm0 4.582c-3.327 0-6 2.673-6 6s2.673 6 6 6 6-2.673 6-6-2.673-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.98-9.42c0 .72-.58 1.3-1.3 1.3s-1.3-.58-1.3-1.3-.58-1.3-1.3-1.3S17.26 5.8 17.26 5.8c0-.72.58-1.3 1.3-1.3s1.3.58 1.3 1.3-.58 1.3-1.3 1.3S19.98 5.8 19.98 5.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
