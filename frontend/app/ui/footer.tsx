export const Footer = () => {
  return (
    <footer className="bg-[#e8d8e0] text-[#2c2c2c] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-[#a86e89]">
              Blooms & Gifts
            </h2>
            <p className="mt-2">Bringing joy with every bloom and gift.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-[#a86e89] hover:text-[#6ea889]">
              <span>fb</span>
            </a>
            <a href="#" className="text-[#a86e89] hover:text-[#6ea889]">
              <span>ig</span>
            </a>
            <a href="#" className="text-[#a86e89] hover:text-[#6ea889]">
              <span>x</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2023 Blooms & Gifts. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
