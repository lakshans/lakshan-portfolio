import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router";

export function MenuButton({ label, path }: { label: string, path: string }) {
  const location = useLocation();
  const currentPage = location.pathname === path;
  return (
    <Button asChild variant={currentPage ? "outline" : "ghost"} className="text-xs md:text-sm lg:text-sm">
      <Link to={path}>{label}</Link>
    </Button>
  )
}
