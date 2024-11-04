import { Slot } from 'expo-router';
import { AuthProvider, AuthContext } from './auth-provider';

export default function TabLayout() {
    return (
        <AuthProvider>
            <Slot />
        </AuthProvider>
    );
}
