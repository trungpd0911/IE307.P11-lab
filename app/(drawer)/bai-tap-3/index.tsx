import { AuthContext } from "./auth-provider";
import { useContext, useEffect, useState } from "react";
import { router } from "expo-router";

const App = () => {
  const { currentUser, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      router.navigate('/(drawer)/bai-tap-3/login');
    } else {
      router.navigate('/(drawer)/bai-tap-3/main/');
    }
  }, [currentUser]);
}

export default App