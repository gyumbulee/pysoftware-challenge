import Link from 'next/link';
import { menuItems } from '../lib/mockData';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href} className="hover:text-gray-400">
              {item.menu_item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
