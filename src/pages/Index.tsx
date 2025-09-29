import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';

const Index = () => {
  const { user, profile, signOut } = useAuth();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Bar Nexus POS</h1>
            <p className="text-muted-foreground">Professional Bar Management System</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </header>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Welcome, {profile?.full_name || user.email}
              </CardTitle>
              <CardDescription>
                You are logged in as a{' '}
                <Badge variant="secondary">{profile?.role?.replace('_', ' ')}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Email:</strong> {user.email}</p>
                {profile?.phone && <p><strong>Phone:</strong> {profile.phone}</p>}
                <p><strong>Status:</strong> {profile?.is_active ? 'Active' : 'Inactive'}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Authentication is now set up! You can now build your POS features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✅ User authentication with roles</p>
                <p>✅ Profile management with RLS policies</p>
                <p>✅ Protected routes</p>
                <p>⏳ Build menu management, orders, payments...</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
