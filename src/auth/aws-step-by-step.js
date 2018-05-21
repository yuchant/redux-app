// set up cli
`aws configure
  NOTE: with IAM user creds
`;

// sign up
`aws cognito-idp sign-up \
  --region us-east-2.amazoncognito.com \
  --client-id 7bqd9afkd3o02r37c69egu1gke \
  --username admin@example.com \
  --password password`;

// verify
`aws cognito-idp admin-confirm-sign-up \
  --region us-east-2.amazoncognito.com \
  --user-pool-id us-east-2_AuefHwR0c \
  --username admin@example.com`;
