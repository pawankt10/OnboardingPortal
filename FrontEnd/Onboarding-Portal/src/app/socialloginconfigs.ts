import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider
  } from 'angularx-social-login';
  
  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("270942671568-2j4timbnh1sroo1gaj044vrsji010b2u.apps.googleusercontent.com")
      }
    ]);
  
    return config;
  }