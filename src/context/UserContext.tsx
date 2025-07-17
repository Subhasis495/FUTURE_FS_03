import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  addresses: Address[];
}

interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  address: string;
  landmark?: string;
  city: string;
  pincode: string;
  isDefault: boolean;
}

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  selectedLocation: string;
  login: (user: User) => void;
  logout: () => void;
  setLocation: (location: string) => void;
  addAddress: (address: Address) => void;
  updateUser: (updates: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedLocation, setSelectedLocation] = useState('Bangalore');

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const setLocation = (location: string) => {
    setSelectedLocation(location);
  };

  const addAddress = (address: Address) => {
    if (user) {
      setUser({
        ...user,
        addresses: [...user.addresses, address],
      });
    }
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        selectedLocation,
        login,
        logout,
        setLocation,
        addAddress,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};