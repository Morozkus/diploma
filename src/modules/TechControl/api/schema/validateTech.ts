import ajvInstance from "@/global/ajv";
import { ITech } from "@/modules/TechControl/types/tech";
import { JSONSchemaType } from "ajv";

const schema: JSONSchemaType<ITech> = {
    type: "object",
    required: ["id", "title", "category", "organization", "images", "mark", "status", "statusHistory"],
    properties: {
        id: { type: "string" },
        title: { type: "string" },
        category: { type: "string" },
        organization: { type: "string" },
        images: { type: "array", items: { type: "string" } },
        mark: { type: "string" },
        status: { type: "string" },
        statusHistory: { type: "array", items: { type: "string" } }
    }
}

const validateTech = ajvInstance.compile(schema)

export default validateTech