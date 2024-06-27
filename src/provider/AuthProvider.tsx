import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth, db } from '../FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

interface User extends FirebaseUser {
  username?: string;
  role?: string;
  address?: string;
  profilePicture?: string;
  // phoneNumber?: string | null; // Ensure phoneNumber is string or null, not undefined
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'Users', firebaseUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser({
            ...firebaseUser,
            username: userData?.username,
            role: userData?.role,
            address: userData?.address,
            profilePicture: userData?.profilePicture,
            phoneNumber: userData?.phoneNumber || null, // Ensure phoneNumber is null if not present
          });
        } else {
          setUser({
            ...firebaseUser,
            phoneNumber: null // Explicitly set phoneNumber to null if not present
          } as User);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthContext };
