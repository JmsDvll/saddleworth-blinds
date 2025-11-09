import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

// Custom rule to detect inline styles and non-UI component usage
const customStandardizationRules = {
  'no-inline-styles': {
    meta: {
      type: 'problem',
      docs: {
        description: 'Disallow inline Tailwind classes - use UI components only',
      },
    },
    create(context) {
      return {
        JSXAttribute(node) {
          if (node.name.name === 'className' && node.value) {
            // Only flag literal className strings containing Tailwind utilities
            if (node.value.type === 'Literal' && typeof node.value.value === 'string') {
              const filePath = String(context.getFilename()).replace(/\\/g, '/')
              const isInUIComponent = filePath.includes('/src/components/ui/')
              if (isInUIComponent) return

              const classes = node.value.value
              const tailwindPattern = /\b(bg-|text-|p-|m-|flex|grid|w-|h-|border|shadow|rounded|absolute|relative|fixed|block|inline|hidden|opacity|transition|transform|translate|rotate|scale|hover:|focus:|active:|disabled:|group-|animate-|duration-|ease-|delay-|cursor-|select-|resize-|space-|divide-|ring-|blur-|brightness-|contrast-|grayscale-|hue-rotate-|invert-|saturate-|sepia-|backdrop-|fill-|stroke|sr-only|not-sr-only|pointer-events-|visible|invisible|z-|order-|col-|row-|gap-|justify-|items-|content-|self-|place-|overflow-|overscroll-|scroll-|break-|whitespace-|text-\w+|font-|leading-|tracking-|align-|decoration-|indent-|vertical-align|list-|placeholder-|accent-|caret-|aspect-|object-|box-|isolation-|table-|caption-|border-\w+|outline-|filter|backdrop-filter|mix-blend|bg-blend)/

              if (tailwindPattern.test(classes)) {
                context.report({
                  node,
                  message: 'Inline Tailwind classes are forbidden outside components/ui. Use UI components with semantic props instead. Example: <Section padding="large"><Container maxWidth="medium">...'
                })
              }
            }
          }
        },
      }
    },
  },
  'use-ui-components': {
    meta: {
      type: 'problem',
      docs: {
        description: 'Enforce usage of UI components instead of HTML elements',
      },
    },
    create(context) {
      const bannedElements = {
        'section': 'Section',
        'h1': 'Heading.H1',
        'h2': 'Heading.H2',
        'h3': 'Heading.H3',
        'h4': 'Heading.H4',
        'h5': 'Heading.H5',
        'h6': 'Heading.H6',
        'p': 'Text',
        'a': 'Link',
        'img': 'Image',
        'button': 'Button',
        'input': 'FormInput',
        'textarea': 'FormInput',
        'select': 'FormInput',
        'label': 'FormInput.Label',
        'form': 'Form',
        'ul': 'List',
        'ol': 'List',
        'li': 'List.Item',
        'nav': 'Navigation',
        'header': 'Header (component)',
        'footer': 'Footer (component)',
        'main': 'Main',
        'article': 'Article',
        'aside': 'Aside',
      }

      return {
        JSXOpeningElement(node) {
          const elementName = node.name.name
          if (bannedElements[elementName]) {
            // Normalize Windows paths and allow exceptions for UI primitives
            const filePath = String(context.getFilename()).replace(/\\/g, '/')
            const isInUIComponent = filePath.includes('/src/components/ui/')

            if (!isInUIComponent) {
              context.report({
                node,
                message: `Use <${bannedElements[elementName]}> component instead of <${elementName}>. See COMPONENT_RULES.json and ui/README.md for allowed props.`,
              })
            }
          }
        },
      }
    },
  },
}

export default [
  { ignores: ['dist', 'node_modules', '*.config.js', 'tests', 'playwright.config.js', 'playwright-report', 'test-results'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'custom': { rules: customStandardizationRules },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      
      // React specific rules
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off', // We're using TypeScript-like prop validation in components
      'react/no-unescaped-entities': 'error',
      
      // General JavaScript rules
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^React$' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'no-nested-ternary': 'error',
      'max-lines': ['warn', { max: 500, skipComments: true }],
      'max-lines-per-function': ['warn', { max: 400, skipComments: true }],
      
      // Import rules
      'no-duplicate-imports': 'error',
      'sort-imports': ['error', {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
      }],
      
      // Styling and formatting
      'jsx-quotes': ['error', 'prefer-double'],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      
      // Custom standardization rules
      'custom/no-inline-styles': 'error',
      'custom/use-ui-components': 'error',
    },
  },
  // Overrides
  {
    files: ['src/components/ui/**/*.{js,jsx}'],
    rules: {
      'custom/no-inline-styles': 'off',
      'custom/use-ui-components': 'off',
    },
  },
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      globals: { ...globals.node },
      parserOptions: { sourceType: 'module' },
    },
    rules: {
      'no-console': 'off',
    },
  },
]