// LinkedInLoginButton.tsx in /src/components
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface LinkedInLoginButtonProps extends TouchableOpacityProps {
  onPress: () => void;
}

const LinkedInLoginButton: React.FC<LinkedInLoginButtonProps> = ({ onPress, style, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button, styles.linkedInButton, style]} onPress={onPress} {...props}>
      <Text style={styles.buttonText}>Login with LinkedIn</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  linkedInButton: {
    backgroundColor: '#0077B5', // LinkedIn blue color
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LinkedInLoginButton;
