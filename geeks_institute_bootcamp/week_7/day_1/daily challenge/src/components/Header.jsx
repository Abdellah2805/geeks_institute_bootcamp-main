const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyBrand</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-200">Home</a></li>
          <li><a href="#features" className="hover:text-blue-200">Features</a></li>
          <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;