import { MenuButton } from "@/components/menu-button";
import { ModeToggle } from "@/components/mode-toggle";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import useWindowDimensions from "@/hooks/windowDimensionsHook";

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/tech', label: 'Tech' },
  { path: '/photography', label: 'Photography' },
  { path: '/travel', label: 'Travel' }, // TODO: add travel page
  { path: '/contact', label: 'Contact' },
];

export function MenuBar() {
  const { width } = useWindowDimensions();

  return (
    <div className="flex p-5 justify-between">
      <div>
        {width <= 512 ? (
          <NavigationMenu>
            <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>

              {menuItems.map((item) => (
                  <Link to={item.path}>
                    <NavigationMenuLink>{item.label}</NavigationMenuLink>
                  </Link>
              ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        ) : (
          <div className="flex gap-1">
            {menuItems.map((item) => (
              <MenuButton key={item.path} label={item.label} path={item.path} />
            ))}
          </div>
        )}
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  )
}