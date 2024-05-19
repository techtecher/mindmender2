import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("CryptoTransactionService")
  .setDescription(
    'CryptoTransactionService is a comprehensive service designed to facilitate secure and efficient cryptocurrency transactions. It integrates seamlessly with various blockchain networks, offering users the ability to perform transactions, manage wallets, and interact with decentralized applications (DApps). The service supports multi-signature wallets, provides real-time transaction monitoring, and ensures high levels of security and transparency.\n\n## Congratulations! Your service resource is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your service resource comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "CryptoTransactionService",
};
