import { mkdir, readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import * as schema from "../../../src/database/schema";
import { log } from "../configs/logger.config";
import path from "path";

const CWD = process.cwd();

const SCHEMA_PATH = path.join(CWD, 'src/database/schema.ts');
const TYPES_OUTPUT_DIR = path.join(CWD, 'src/types/db');
const TYPES_FILE = "index.ts";

function getTableNames(schemaContent: string): string[] {
  const tableRegex = /export\s+const\s+(\w+)\s*=\s*pgTable/g;
  const matches = [...schemaContent.matchAll(tableRegex)];
  return matches.map((match) => match[1]);
}

function getEnumNames(schemaContent: string): string[] {
  const enumRegex = /export\s+const\s+(\w+)\s*=\s*pgEnum/g;
  const matches = [...schemaContent.matchAll(enumRegex)];
  return matches.map((match) => match[1]);
}

function toPascalCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[^a-zA-Z0-9]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

function generateEnumContent(enumName: keyof typeof schema) {
  if (!(enumName in schema)) return null;
  const enumObj = schema[enumName];
  if (!("enumValues" in enumObj)) return null;

  const pascalName = toPascalCase(enumName.replace("Enum", ""));
  const enumValues = (enumObj as any).enumValues as string[];

  return `export type ${pascalName} = typeof schema.${enumName}.enumValues[number];
export const ${pascalName}Values = schema.${enumName}.enumValues;
export enum ${pascalName}Enum {
  ${enumValues.map((val) => `${val.toUpperCase()} = "${val}"`).join(",\n  ")}
}`;
}

function generateTypesContent(
  tableNames: string[],
  enumNames: string[]
): string {
  const relativeImportPath = "../../database/schema";

  const content = `import { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import * as schema from '${relativeImportPath}';

// Enum types and values
${enumNames
  .map((enumName) => generateEnumContent(enumName as keyof typeof schema))
  .filter(Boolean)
  .join("\n\n")}

// Select types (for querying)
${tableNames
  .map((tableName) => {
    const typeName = tableName.charAt(0).toUpperCase() + tableName.slice(1);
    return `export type ${typeName} = InferSelectModel<typeof schema.${tableName}>;`;
  })
  .join("\n")}

// Insert types (for creating new records)
${tableNames
  .map((tableName) => {
    const typeName = tableName.charAt(0).toUpperCase() + tableName.slice(1);
    return `export type New${typeName} = Omit<InferInsertModel<typeof schema.${tableName}>, 'id' | 'createdAt' | 'updatedAt'> & {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};`;
  })
  .join("\n\n")}

// Table types object
export const tableTypes = {
${tableNames
  .map((tableName) => {
    const typeName = tableName.charAt(0).toUpperCase() + tableName.slice(1);
    return `  ${tableName}: {} as ${typeName},`;
  })
  .join("\n")}
} as const;

// Export table type
export type Tables = typeof tableTypes;

// Export schema
export * from '${relativeImportPath}';
`;

  return content;
}

async function generateTypes() {
  try {
    const schemaContent = await readFile(SCHEMA_PATH, "utf8");

    const tableNames = getTableNames(schemaContent);
    const enumNames = getEnumNames(schemaContent);

    log.log("Table names:", tableNames);
    log.log("Enum names:", enumNames);

    await mkdir(TYPES_OUTPUT_DIR, { recursive: true });

    const typesContent = generateTypesContent(tableNames, enumNames);
    await writeFile(resolve(TYPES_OUTPUT_DIR, TYPES_FILE), typesContent);

    log.log({
      message: "✨ Types generated successfully in",
      path: `${TYPES_OUTPUT_DIR}/${TYPES_FILE}`,
    });
  } catch (error) {
    log.error({
      message: "Error generating types",
      error,
    });
    process.exit(1);
  }
}

generateTypes();
