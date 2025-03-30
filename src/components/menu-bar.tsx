import { MenuButton } from "@/components/menu-button";
import { ModeToggle } from "@/components/mode-toggle";
import { useLocation } from "react-router";

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/tech', label: 'Tech' },
  { path: '/photography', label: 'Photography' },
  { path: '/travel', label: 'Travel' },
  { path: '/contact', label: 'Contact' },
];

export function MenuBar() {
  const location = useLocation();
  const homePage = location.pathname === "/";
  return (
    <div className="flex p-5 justify-between">
      <div>
        {!homePage && menuItems.map((item) => (
          <MenuButton key={item.path} label={item.label} path={item.path} />
        ))}
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  )
}