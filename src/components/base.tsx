import { MenuBar } from "@/components/menu-bar";

export function Base({ children, verticalCenter }: { children: React.ReactNode, verticalCenter?: boolean }) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-slate-400 to-indigo-700 dark:from-slate-900 dark:to-indigo-900">
        <MenuBar />
        <div className={`flex flex-col ${verticalCenter ? 'min-h-[calc(100vh-100px)]' : ''} items-center justify-center`}>
          {children}
        </div>
      </div>
    </>
  );
}