import HeadIndex from "./head";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <HeadIndex />
      <h1>Auth</h1>
      {children}
    </div>
  );
}
