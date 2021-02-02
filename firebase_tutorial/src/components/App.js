import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "FirebaseInstance";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Twitter Clone {new Date().getFullYear()} </footer>
    </>
  );
}

export default App;
