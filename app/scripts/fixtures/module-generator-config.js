export default function() {
  return {
    title: "Module Generator Form",
    command: "generate:module",
    components: [
      {
        attributeName: "moduleName",
        formAttributes: {
          fullWidth: true,
          hintText: "Enter module name",
          inputType: "text",
          labelText: "Module name",
        },
        stringOnlyAttribute: false,
        toString: "module",
        value: null,
      },
      {
        attributeName: "moduleMachineName",
        formAttributes: {
          fullWidth: true,
          hintText: "Enter module machine name",
          inputType: "text",
          labelText: "Module machine name (lowercase and underscore only)",
        },
        stringOnlyAttribute: false,
        toString: "machine-name",
        value: null,
      },
      {
        attributeName: "modulePath",
        formAttributes: {
          fullWidth: true,
          hintText: "Example: /modules/custom/path",
          inputType: "text",
          labelText: "Module path",
        },
        stringOnlyAttribute: false,
        toString: "module-path",
        value: null,
      },
      {
        attributeName: "moduleDescription",
        formAttributes: {
          fullWidth: true,
          hintText: "Enter module description",
          inputType: "text",
          labelText: "Module description",
        },
        stringOnlyAttribute: false,
        toString: "description",
        value: null,
      },
      {
        attributeName: "modulePackage",
        formAttributes: {
          fullWidth: true,
          hintText: "Enter package name",
          inputType: "text",
          labelText: "Package name",
        },
        stringOnlyAttribute: false,
        toString: "package",
        value: null,
      },
      {
        attributeName: "moduleCore",
        formAttributes: {
          fullWidth: true,
          hintText: "Enter Drupal core version",
          inputType: "text",
          labelText: "Core version",
        },
        stringOnlyAttribute: false,
        toString: "core",
        value: null,
      },
      {
        attributeName: "moduleDependencies",
        formAttributes: {
          fullWidth: true,
          hintText: "separated by commas (i.e. context, panels)",
          inputType: "text",
          labelText: "Enter dependencies (if any)",
        },
        stringOnlyAttribute: false,
        toString: "dependencies",
        value: null,
      },
      {
        attributeName: "moduleFeature",
        formAttributes: {
          fullWidth: true,
          hintText: null,
          inputType: "toggle",
          labelText: "Set module compatibility with the Features module",
        },
        stringOnlyAttribute: true,
        toString: "feature",
        value: null,
      },
      {
        attributeName: "moduleComposer",
        formAttributes: {
          fullWidth: true,
          hintText: null,
          inputType: "toggle",
          labelText: "Add a composer.json file",
        },
        stringOnlyAttribute: true,
        toString: "composer",
        value: null,
      },
    ],
  }
}
