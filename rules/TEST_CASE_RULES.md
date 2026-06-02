# Test Case Development Rules

## Mandatory Checks for Every New Test Case

Whenever you add a new test case to the project, you **MUST** run the following commands before committing or pushing your code:

### 1. Type Check
```bash
npm run type-check
```
**Purpose:** Verify that all TypeScript types are correct and there are no type-related errors.
**What it does:** Runs `tsc --noEmit` to check for TypeScript compilation errors without emitting files.

### 2. Lint Check
```bash
npm run lint
```
**Purpose:** Ensure the code follows the project's linting rules and code style guidelines.
**What it does:** Runs ESLint to check for code quality issues and style violations.

---

## Workflow Checklist

- [ ] Write the new test case in `src/tests/`
- [ ] Implement any necessary Page Object Models in `src/pages/`
- [ ] Add any test data required in `src/testdata/`
- [ ] Create fixtures if needed in `src/fixtures/`
- [ ] Create API utilities if needed in `src/api/`
- [ ] Run `npm run type-check`
- [ ] Run `npm run lint`
- [ ] Verify test runs with `npm run test` or `npm run test:ui`
- [ ] Commit and push code

---

## Additional Commands

### Format Code
```bash
npm run format
```
Automatically format all code files to maintain consistent style.

### Run Tests
```bash
npm run test              # Run all tests
npm run test:ui           # Run with UI mode
npm run test:headed       # Run in headed mode
npm run test:debug        # Run with debugger
```

---

## Notes
- These checks are **mandatory** to maintain code quality
- Address all errors and warnings before proceeding
- If you need help fixing issues, refer to the TypeScript documentation or ESLint rules
