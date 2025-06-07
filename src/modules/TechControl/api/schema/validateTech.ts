import ajvInstance from "@/global/ajv";
import { ITech } from "@/global/types/entity/Tech"
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
        statusHistory: { type: "array", items: { type: "object", required: ["id", "converter", "firestore", "parent", "path", "type", "withConverter"] } },
        created_at: { type: "string", nullable: true, },
        end_time_at: { type: "string", nullable: true, },
    }
}

const validateTech = ajvInstance.compile(schema)

export default validateTech