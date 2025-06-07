import ajvInstance from "@/global/ajv";
import { IStatus } from "@/global/types/entity/Status";
import { JSONSchemaType } from "ajv";

const schema: JSONSchemaType<IStatus> = {
    type: "object",
    properties: {
        id: { type: "string" },
        name: { type: "string" }
    },
    required: ["id", "name"],
}

const validateStatus = ajvInstance.compile(schema)

export default validateStatus