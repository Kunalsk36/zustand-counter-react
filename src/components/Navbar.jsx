import { useAppStore } from "../store/appStore";

function Navbar() {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const logout = useAppStore((state) => state.logout);
  const login = useAppStore((state) => state.login);

  return (
    <nav>
      <span>Theme: {theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {user ? (
        <>
          <span>Hello {user}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("John Doe")}>Login</button>
      )}
    </nav>
  );
  {
    /* <button onClick={toggleTheme}>Toggle Theme</button>
    {user ? (
      <>
        <span>Hello {user}</span>
        <button onClick={logout}>Logout</button>
      </>
    ) : (
      <button onClick={() => login("John Doe")}>Login</button>
    )}
  </nav>; */
  }
}

export default Navbar;
