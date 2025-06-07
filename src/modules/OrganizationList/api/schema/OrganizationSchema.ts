import ajvInstance from "@/global/ajv";
import { IOrganization } from "@/global/types/entity/Organization";
import { JSONSchemaType } from "ajv";

const schema: JSONSchemaType<IOrganization> = {
    type: "object",
    properties: {
        id: { type: "string" },
        name: { type: "string" }
    },
    required: ["id", "name"],
}

const validateOrganization = ajvInstance.compile(schema)

export default validateOrganization