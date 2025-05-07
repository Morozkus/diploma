import ajvInstance from "@/global/ajv";
import { ICategory } from "@/modules/CategoryList/types";
import { JSONSchemaType } from "ajv";

const schema: JSONSchemaType<ICategory> = {
    type: "object",
    properties: {
        id: { type: "string" },
        name: { type: "string" }
    },
    required: ["id", "name"],
}

const validateCategory = ajvInstance.compile(schema)

export default validateCategory