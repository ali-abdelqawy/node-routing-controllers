import { validationMetadatasToSchemas } from "class-validator-jsonschema";
import { getMetadataArgsStorage } from "routing-controllers";
import { routingControllersToSpec } from "routing-controllers-openapi";
import { config } from "../config";
import { writeFile } from ".";

export const generateAPIGuide = () => {
  const storage = getMetadataArgsStorage();
  const schemas = validationMetadatasToSchemas({
    refPointerPrefix: "#/components/schemas/",
  });
  const spec = routingControllersToSpec(
    storage,
    {},
    {
      components: { schemas },
      info: {
        title: "Testing service",
        version: "1.0.0",
        description: "API documentation for the testing microservice",
      },
      servers: [
        {
          url: `${config.baseUrl}:${config.port}/api`,
        },
      ],
    }
  );
  writeFile(JSON.stringify(spec));
};
