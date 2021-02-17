const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-10",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://f8wdfydcme.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_hjPkDizSE",
    APP_CLIENT_ID: "71k8evts9dfnku3m014s4iqtat",
    IDENTITY_POOL_ID: "us-east-1:3bd4f771-7b81-4599-becd-570ab875ecf5",
  },
};

export default config;