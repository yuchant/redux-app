export default {
    // https://aws.github.io/aws-amplify/media/authentication_guide
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-east-2:98ce6c93-c5aa-46c0-98d4-c6f4fb03f69b',
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_AuefHwR0c',
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '109quuvt1git1d7pa5vcknfilq',
        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,
        // OPTIONAL - Configuration for cookie storage
        cookieStorage: {
            // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            // domain: '.yourdomain.com',
            // OPTIONAL - Cookie path
            path: '/',
            // OPTIONAL - Cookie expiration in days
            expires: 365,
            // OPTIONAL - Cookie secure flag
            secure: true
        }
    }
}