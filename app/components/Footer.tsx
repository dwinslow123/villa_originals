const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-800 text-white p-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Villa Originals. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;