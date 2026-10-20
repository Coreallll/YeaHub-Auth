export interface Auth {
  email: string;
  password: string;
}

export interface SignUp {
  username: string;
  email: string;
  password: string;
}

export interface RegisterFormValues extends SignUp {
  confirmPassword: string;
  acceptPrivacy: boolean;
  acceptOffer: boolean;
  marketingConsent: boolean;
}

export interface GetAuthResponse {
  access_token: string;
}
