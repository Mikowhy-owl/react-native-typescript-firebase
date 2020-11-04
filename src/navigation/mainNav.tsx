import React, { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase";
import AppStack from "./appStack";
import AuthStack from "./authStack";

const MainNav: FC = () => {
  const [user, setUser] = useState<any>(null);

  const authenticate = () => {
    firebase.auth().onAuthStateChanged((userObject) => {
      if (userObject) {
        setUser(userObject);
      }
    });
  };

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <NavigationContainer>
      {user !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNav;
