import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Credenciales de acceso (en un proyecto real, esto debería estar en variables de entorno)
  const validCredentials = {
    username: 'uv',
    password: 'paris2025!'
  };

  useEffect(() => {
    // Verificar si ya está autenticado
    const authStatus = sessionStorage.getItem('privateVideoAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (credentials.username === validCredentials.username && 
        credentials.password === validCredentials.password) {
      setIsAuthenticated(true);
      sessionStorage.setItem('privateVideoAuth', 'true');
    } else {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('privateVideoAuth');
    setCredentials({ username: '', password: '' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-portfolio-bg flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-portfolio-text/10 rounded w-32 mb-4"></div>
          <div className="h-4 bg-portfolio-text/10 rounded w-48"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-portfolio-bg flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-portfolio-text/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-portfolio-text" />
            </div>
            <CardTitle className="text-2xl font-bold text-portfolio-text">
              Acceso Privado
            </CardTitle>
            <CardDescription className="text-portfolio-text/70">
              Ingresa tus credenciales para acceder al contenido exclusivo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-portfolio-text">
                  Usuario
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  placeholder="Ingresa tu usuario"
                  className="bg-portfolio-bg border-portfolio-divider text-portfolio-text"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-portfolio-text">
                  Contraseña
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="Ingresa tu contraseña"
                    className="bg-portfolio-bg border-portfolio-divider text-portfolio-text pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-portfolio-text/50 hover:text-portfolio-text"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <Alert className="border-red-500/50 bg-red-500/10">
                  <AlertDescription className="text-red-600">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full bg-portfolio-text text-portfolio-bg hover:bg-portfolio-text/90"
              >
                Acceder
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative">
      {children}
      {/* Botón de logout flotante */}
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors flex items-center justify-center"
        title="Cerrar sesión"
      >
        <Lock className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AuthGuard;
