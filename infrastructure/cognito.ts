// signInAliases reflects identifier that can be used to sign in password required by default
export const userPool = new sst.aws.CognitoUserPool('UserPool', {
    selfSignUpEnabled: true,
    signInCaseSensitive: true,
    usernames: ['email']
});

export const identityPool = new sst.aws.CognitoIdentityPool('MyIdentityPool', {
    allowUnauthenticatedIdentities: false,
    cognitoIdentityProviders: [
        {
            clientId: userPool.clientId,
            providerName: userPool.providerName,
        },
    ], 
    roles: {
        authenticated: null,
        admin: null,
    }
});