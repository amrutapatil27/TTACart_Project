# Contributing to Playwright TTACart Project

## Test Case Development Rules

Thank you for contributing to this project! Please follow these guidelines when adding new test cases.

### Mandatory Checks for Every New Test Case

Whenever you add a new test case, you **MUST** run the following commands before submitting a pull request:

#### 1. Type Check
```bash
npm run type-check
```
Verifies that all TypeScript types are correct and there are no type-related errors.

#### 2. Lint Check
```bash
npm run lint
```
Ensures the code follows the project's linting rules and code style guidelines.

### Development Workflow

- [ ] Create test files in `src/tests/`
- [ ] Implement Page Object Models in `src/pages/`
- [ ] Add test data in `src/testdata/`
- [ ] Create fixtures in `src/fixtures/` if needed
- [ ] Create API utilities in `src/api/` if needed
- [ ] Run `npm run type-check` ✓
- [ ] Run `npm run lint` ✓
- [ ] Verify test runs with `npm run test` or `npm run test:ui`
- [ ] Format code with `npm run format`

### Useful Commands

```bash
# Run tests
npm run test              # Run all tests
npm run test:ui           # Run with UI mode
npm run test:headed       # Run in headed mode
npm run test:chromium     # Run on Chromium
npm run test:firefox      # Run on Firefox
npm run test:debug        # Run with debugger
npm run test:p0           # Run P0 priority tests
npm run test:p1           # Run P1 priority tests

# Code quality
npm run type-check        # TypeScript type checking
npm run lint              # Run ESLint
npm run format            # Auto-format code

# Maintenance
npm run build             # Build TypeScript
npm run clean             # Clean test results and reports
npm run test:report       # View HTML test report
```

### Project Structure

```
src/
├── api/          # API utilities and helpers
├── config/       # Configuration files
├── fixtures/     # Playwright fixtures
├── pages/        # Page Object Models
├── tests/        # Test cases
├── testdata/     # Test data files (CSV, JSON, YAML)
└── util/         # Utility functions
```

### Important Notes

- **Type checking and linting are mandatory** - All PRs must pass these checks
- Use TypeScript path aliases for imports (e.g., `@pages/*`, `@api/*`, `@testdata/*`)
- Follow the Page Object Model (POM) pattern for maintainability
- Add appropriate test tags (@p0, @p1, etc.) for categorization
- Include descriptive test names and comments

### Pull Request Guidelines

1. Ensure all mandatory checks pass
2. Add a clear description of the test case or changes
3. Reference any related issues
4. Include screenshots or logs if applicable
5. Ensure no console errors or warnings

For more details, see:
- [Test Case Rules](../rules/TEST_CASE_RULES.md)
- [Argument Rules](../rules/ARGUMENT_RULES.md)
