import { MenuBar } from "@/components/menu-bar";

export function Base({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-gradient-to-tr from-slate-400 to-indigo-700 dark:from-slate-900 dark:to-indigo-900">
        <MenuBar />
        <div className="flex min-h-screen justify-center">
          <div className="flex flex-col items-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}