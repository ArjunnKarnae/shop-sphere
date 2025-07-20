import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 mt-10">
            <div className="container mx-auto px-4 grid grid-cols-1 rounded-lg sm:grid-cols-4 sm:justify-center">
                <div className="sm:content-center">
                    <h2 className="text-xl font-semibold mb-4">ShopEase</h2>
                    <p className="text-sm">
                        Your go-to destination for quality products at unbeatable prices. Shop smart, shop easy.
                    </p>
                </div>
                <div className="sm:content-center">
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/shipping">Shipping & Returns</Link></li>
                        <li><Link to="/policy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Join Our Newsletter</h3>
                    <p className="text-sm mb-2">Get the latest updates and offers.</p>
                    <form className="flex flex-col space-y-2">
                        <input type="email" placeholder="Your email" className="px-3 py-2 rounded text-black"/>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200 cursor-pointer">
                            Subscribe
                        </button>
                    </form>
                </div>   
             </div>
             <div className="text-center text-xs mt-8 text-gray-400">
                &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
             </div>
        </footer>
    );
}