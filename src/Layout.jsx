
import { useSites } from "./state/siteContext";

function Layout({ children }) {
  const { getLocal, loading, token, setLoading, getCookies } = useSites();

  if (loading) return 'Loading...';

  return (
    <div style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
}

export default Layout;
