import ajvInstance from "@/global/ajv";
import { ITech } from "@/modules/TechControl/types/tech";
import { JSONSchemaType } from "ajv";

const schema: JSONSchemaType<ITech> = {
    type: "object",
    required: ["id", "title", "category", "organization", "mark", "status", "statusHistory"],
    properties: {
        id: { type: "string" },
        title: { type: "string" },
        category: { type: "object", required: ["id", "converter", "firestore", "parent", "path", "type", "withConverter"] },
        organization: { type: "object", required: ["id", "converter", "firestore", "parent", "path", "type", "withConverter"] },
        mark: { type: "string" },
        status: { type: "object", required: ["id", "converter", "firestore", "parent", "path", "type", "withConverter"] },
        statusHistory: { type: "array", items: { type: "string" } }
    }
}

const validateTech = ajvInstance.compile(schema)

export default validateTech