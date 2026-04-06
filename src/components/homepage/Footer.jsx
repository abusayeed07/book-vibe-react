import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#1A2A3A] to-[#0F1720] border-t border-[#23BE0A]/20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                Book Vibe
              </h2>
            </div>

            <p className="text-gray-300 text-lg max-w-md leading-relaxed">
              Discover your next favorite book with Book Vibe. We bring together book lovers, authors, and stories from around the world.
            </p>
          </div>

          {/* Quick Links - Books */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Books</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  New Releases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  Bestsellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  Coming Soon
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  Genres
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Support</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Connect</h3>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle bg-white/10 hover:bg-[#1877F2] text-white hover:text-white transition-all duration-200 text-2xl p-1"
              >
                <FaFacebookSquare />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle bg-white/10 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#515BD4] text-white hover:text-white transition-all duration-200 text-2xl p-1"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://x.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle bg-white/10 hover:bg-black text-white hover:text-white transition-all duration-200 text-2xl p-1"
              >
                <FaTwitter />
              </a>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-white text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-white/10 rounded-lg text-white text-sm w-full focus:outline-none focus:ring-1 focus:ring-[#23BE0A]"
                />
                <button className="btn border-none px-3 py-2 bg-[#23BE0A] hover:bg-[#1a9a07] text-white rounded-lg text-sm font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div>© {new Date().getFullYear()} Book Vibe. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#23BE0A] transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;