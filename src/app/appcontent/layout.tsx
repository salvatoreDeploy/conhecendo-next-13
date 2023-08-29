import HeadIndex from "./head";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <HeadIndex />
      <h1>Aplication</h1>
      {children}
    </div>
  );
}
