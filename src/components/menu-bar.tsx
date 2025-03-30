import { MenuButton } from "@/components/menu-button";
import { ModeToggle } from "@/components/mode-toggle";

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/tech', label: 'Tech' },
  { path: '/photography', label: 'Photography' },
  { path: '/travel', label: 'Travel' },
  { path: '/contact', label: 'Contact' },
];

export function MenuBar() {
  return (
    <div className="flex p-5 justify-between">
      <div>
        {menuItems.map((item) => (
          <MenuButton key={item.path} label={item.label} path={item.path} />
        ))}
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  )
}