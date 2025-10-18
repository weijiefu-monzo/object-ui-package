#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Configuration
const config = {
  distPath: "./storybook-static",
  outputPath: "./llms-output",
  summaryTitle: "Object UI Components",
  summaryDescription: "Object UI Components documentation",
  componentsPath: "./src/components",
};

// Ensure output directory exists
if (!fs.existsSync(config.outputPath)) {
  fs.mkdirSync(config.outputPath, { recursive: true });
}

// Function to extract component information
function extractComponentInfo(componentPath) {
  const componentName = path.basename(componentPath);
  const indexPath = path.join(componentPath, "index.tsx");
  const storiesPath = path.join(componentPath, `${componentName}.stories.tsx`);

  let componentInfo = {
    name: componentName,
    description: "",
    props: {},
    stories: [],
    examples: [],
  };

  // Extract component props and description from index.tsx
  if (fs.existsSync(indexPath)) {
    const componentContent = fs.readFileSync(indexPath, "utf8");

    // Extract props type definition
    const propsMatch = componentContent.match(
      /export type (\w+Props) = \{([^}]+)\}/s
    );
    if (propsMatch) {
      const propsContent = propsMatch[2];
      const propMatches = propsContent.matchAll(/(\w+)(\?)?:\s*([^;]+);/g);

      for (const match of propMatches) {
        const [, propName, optional, propType] = match;
        componentInfo.props[propName] = {
          type: propType.trim(),
          required: !optional,
        };
      }
    }

    // Extract JSDoc comments for description
    const jsdocMatch = componentContent.match(/\/\*\*\s*\n\s*\*\s*([^*\n]+)/);
    if (jsdocMatch) {
      componentInfo.description = jsdocMatch[1].trim();
    }
  }

  // Extract stories information
  if (fs.existsSync(storiesPath)) {
    const storiesContent = fs.readFileSync(storiesPath, "utf8");

    // Extract story exports
    const storyExports = storiesContent.match(
      /export const (\w+):\s*Story\s*=\s*\{[^}]*args:\s*\{([^}]+)\}[^}]*\}/gs
    );

    if (storyExports) {
      storyExports.forEach((story) => {
        const nameMatch = story.match(/export const (\w+):/);
        const argsMatch = story.match(/args:\s*\{([^}]+)\}/s);

        if (nameMatch && argsMatch) {
          const storyName = nameMatch[1];
          const argsContent = argsMatch[1];

          // Parse args
          const args = {};
          const argMatches = argsContent.matchAll(/(\w+):\s*([^,\n]+)/g);
          for (const match of argMatches) {
            const [, key, value] = match;
            args[key] = value.trim().replace(/['"]/g, "");
          }

          componentInfo.stories.push({
            name: storyName,
            args,
          });
        }
      });
    }
  }

  return componentInfo;
}

// Function to generate LLM-friendly documentation
function generateLLMDocumentation(componentInfo) {
  let doc = `# ${componentInfo.name} Component\n\n`;

  if (componentInfo.description) {
    doc += `${componentInfo.description}\n\n`;
  }

  // Props section
  if (Object.keys(componentInfo.props).length > 0) {
    doc += `## Props\n\n`;
    doc += `| Property | Type | Required | Description |\n`;
    doc += `|----------|------|----------|-------------|\n`;

    Object.entries(componentInfo.props).forEach(([propName, propInfo]) => {
      doc += `| ${propName} | ${propInfo.type} | ${
        propInfo.required ? "Yes" : "No"
      } | - |\n`;
    });
    doc += `\n`;
  }

  // Stories section
  if (componentInfo.stories.length > 0) {
    doc += `## Examples\n\n`;
    componentInfo.stories.forEach((story) => {
      doc += `### ${story.name}\n\n`;
      doc += `\`\`\`tsx\n`;
      doc += `<${componentInfo.name}`;

      Object.entries(story.args).forEach(([key, value]) => {
        if (typeof value === "string") {
          doc += `\n  ${key}="${value}"`;
        } else {
          doc += `\n  ${key}={${value}}`;
        }
      });

      doc += `\n/>\n`;
      doc += `\`\`\`\n\n`;
    });
  }

  return doc;
}

// Function to generate summary
function generateSummary(components) {
  let summary = `# ${config.summaryTitle}\n\n`;
  summary += `${config.summaryDescription}\n\n`;
  summary += `## Components\n\n`;

  components.forEach((component) => {
    summary += `- [${component.name}](./${component.name}.md)`;
    if (component.description) {
      summary += ` - ${component.description}`;
    }
    summary += `\n`;
  });

  summary += `\n## Usage\n\n`;
  summary += `This is a React/Preact UI component library built with TypeScript and CSS Modules.\n\n`;
  summary += `### Installation\n\n`;
  summary += `\`\`\`bash\nnpm install @object-ui/components\n\`\`\`\n\n`;
  summary += `### Basic Usage\n\n`;
  summary += `\`\`\`tsx\nimport { Button } from '@object-ui/components';\n\nfunction App() {\n  return <Button onClick={() => {}}>Click me</Button>;\n}\n\`\`\`\n`;

  return summary;
}

// Main execution
function main() {
  console.log("🚀 Starting LLMs extraction...");

  // Check if storybook is built
  if (!fs.existsSync(config.distPath)) {
    console.log("📚 Building Storybook first...");
    try {
      execSync("npm run build-storybook", { stdio: "inherit" });
    } catch (error) {
      console.error("❌ Failed to build Storybook:", error.message);
      process.exit(1);
    }
  }

  // Get all component directories
  const componentsDir = path.join(process.cwd(), config.componentsPath);
  const componentDirs = fs.readdirSync(componentsDir).filter((item) => {
    const itemPath = path.join(componentsDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  console.log(`📦 Found ${componentDirs.length} components`);

  const components = [];

  // Process each component
  componentDirs.forEach((componentDir) => {
    const componentPath = path.join(componentsDir, componentDir);
    console.log(`📝 Processing ${componentDir}...`);

    const componentInfo = extractComponentInfo(componentPath);
    components.push(componentInfo);

    // Generate individual component documentation
    const doc = generateLLMDocumentation(componentInfo);
    const outputFile = path.join(config.outputPath, `${componentDir}.md`);
    fs.writeFileSync(outputFile, doc);
  });

  // Generate summary
  const summary = generateSummary(components);
  const summaryFile = path.join(config.outputPath, "README.md");
  fs.writeFileSync(summaryFile, summary);

  // Generate JSON metadata
  const metadata = {
    title: config.summaryTitle,
    description: config.summaryDescription,
    components: components.map((c) => ({
      name: c.name,
      description: c.description,
      props: Object.keys(c.props),
      stories: c.stories.map((s) => s.name),
    })),
    generatedAt: new Date().toISOString(),
  };

  const metadataFile = path.join(config.outputPath, "metadata.json");
  fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));

  console.log(`✅ Extraction complete! Output saved to ${config.outputPath}`);
  console.log(`📄 Generated ${components.length} component files + summary`);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, extractComponentInfo, generateLLMDocumentation };
