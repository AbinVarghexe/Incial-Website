import { IncialLogo, MailImg, WhatsAppImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={IncialLogo} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={WhatsAppImg} alt="bag" width={20} height={20} className="cursor-pointer text-gray hover:opacity-15 transition-all" />
          <img src={MailImg} alt="search" width={25} height={20} className=" cursor-pointer text-gray hover:opacity-15 transition-all" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar