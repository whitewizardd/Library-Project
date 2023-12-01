// LinkedInLoginScreen.tsx in /src/components/screens
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { authorize, revoke, refresh } from 'react-native-app-auth';
import Button from '../../../components/button'
import Input from '../../../components/input'
import LinkedInLoginButton from '../../../components/linkedButton'
const config = {
  issuer: 'https://www.linkedin.com',
  clientId: 'YOUR_LINKEDIN_CLIENT_ID',
  redirectUrl: 'YOUR_REDIRECT_URL',
  scopes: ['r_liteprofile', 'r_emailaddress'],
};

const LinkedInLoginScreen: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await getTokenFromStorage();
      if (token) {
        setAccessToken(token);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await authorize(config);
      setAccessToken(result.accessToken);
      saveTokenToStorage(result.accessToken);
    } catch (error) {
      console.error('Error during LinkedIn login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      if (accessToken) {
        await revoke(config, { tokenToRevoke: accessToken });
      }
      setAccessToken(null);
      removeTokenFromStorage();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  

  const handleRefreshToken = async () => {
    try {
      const result = await refresh(config, { refreshToken: 'YOUR_REFRESH_TOKEN' });
      setAccessToken(result.accessToken);
      updateTokenInStorage(result.accessToken);
    } catch (error) {
      console.error('Error during token refresh:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LinkedIn Login</Text>
      {accessToken ? (
        <>
          <Text>You are logged in!</Text>
          <Button title="Logout" onPress={handleLogout} />
          <Button title="Refresh Token" onPress={handleRefreshToken} />
        </>
      ) : (
        <>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
          <LinkedInLoginButton onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

// Implement your storage functions here
const getTokenFromStorage = async (): Promise<string | null> => {
  return null;
};

const saveTokenToStorage = async (token: string): Promise<void> => {
  // Implement storage save logic
};

const removeTokenFromStorage = async (): Promise<void> => {
  // Implement storage removal logic
};

const updateTokenInStorage = async (token: string): Promise<void> => {
  // Implement storage update logic
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LinkedInLoginScreen;


