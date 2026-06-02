# Argument Rules

## Function and Method Arguments Guidelines

When creating functions, methods, fixtures, or test cases, follow these argument handling rules to ensure consistency, type safety, and maintainability.

### 1. Always Use TypeScript Type Annotations

Every function argument **MUST** have explicit type annotations.

❌ **Bad:**
```typescript
function createUser(name, email, role) {
  // ...
}
```

✅ **Good:**
```typescript
function createUser(name: string, email: string, role: 'admin' | 'user'): Promise<void> {
  // ...
}
```

### 2. Use Interfaces for Complex Arguments

For functions with multiple related arguments, use interfaces instead of individual parameters.

❌ **Bad:**
```typescript
async function loginUser(username: string, password: string, rememberMe: boolean, timeout: number) {
  // ...
}
```

✅ **Good:**
```typescript
interface LoginCredentials {
  username: string;
  password: string;
  rememberMe?: boolean;
  timeout?: number;
}

async function loginUser(credentials: LoginCredentials): Promise<void> {
  // ...
}
```

### 3. Optional Arguments Should Have Default Values

Mark optional parameters with `?` and provide sensible defaults when applicable.

```typescript
interface PageOptions {
  timeout?: number;
  retries?: number;
  headless?: boolean;
}

const defaultOptions: PageOptions = {
  timeout: 30000,
  retries: 3,
  headless: true,
};

async function navigateTo(url: string, options: PageOptions = defaultOptions): Promise<void> {
  // ...
}
```

### 4. Use Constants for Argument Values

Define constants for commonly used argument values to prevent magic strings/numbers.

```typescript
// config/constants.ts
export const BROWSER_TYPES = {
  CHROMIUM: 'chromium',
  FIREFOX: 'firefox',
  WEBKIT: 'webkit',
} as const;

export const TEST_TIMEOUTS = {
  SHORT: 5000,
  MEDIUM: 10000,
  LONG: 30000,
} as const;

// Usage in tests
test('login test', async () => {
  await page.goto(url, { timeout: TEST_TIMEOUTS.LONG });
});
```

### 5. Validate Arguments in Functions

Always validate important arguments, especially public-facing functions.

```typescript
export async function fillForm(
  page: Page,
  formData: Record<string, string>
): Promise<void> {
  if (!page) {
    throw new Error('Page object is required');
  }
  if (!formData || Object.keys(formData).length === 0) {
    throw new Error('Form data cannot be empty');
  }
  
  // Implementation
}
```

### 6. Use Enums for Fixed Argument Sets

For arguments with a fixed set of values, use enums or string literals.

```typescript
// Better with enum
enum Priority {
  P0 = 'p0',
  P1 = 'p1',
  P2 = 'p2',
}

async function runTests(priority: Priority): Promise<void> {
  // ...
}

// Or use string literals
async function runTests(priority: 'p0' | 'p1' | 'p2'): Promise<void> {
  // ...
}
```

### 7. Page Object Arguments

When creating Page Objects, follow this pattern:

```typescript
import { Page } from '@playwright/test';

export class LoginPage {
  // Page is always the first argument
  constructor(private page: Page) {}
  
  async login(username: string, password: string): Promise<void> {
    // Implementation
  }
  
  async fillLoginForm(credentials: { username: string; password: string }): Promise<void> {
    // Implementation
  }
}
```

### 8. Fixture Arguments

For Playwright fixtures, use typed fixtures:

```typescript
import { test as base, Page } from '@playwright/test';

type TestFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<TestFixtures>({
  authenticatedPage: async ({ page }, use) => {
    // Setup
    await page.goto('/login');
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password');
    await page.click('button[type="submit"]');
    
    await use(page);
    
    // Cleanup
    await page.close();
  },
});
```

### 9. Test Arguments and Data

Use proper typing for test data:

```typescript
interface TestUser {
  username: string;
  password: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

const testUsers: TestUser[] = [
  {
    username: 'admin_user',
    password: 'securePassword123',
    email: 'admin@example.com',
    role: 'admin',
  },
  // More test users...
];

test.describe('User Management', () => {
  testUsers.forEach((user: TestUser) => {
    test(`should manage ${user.role} user`, async () => {
      // Test implementation
    });
  });
});
```

### 10. API Request Arguments

For API calls, use typed request/response objects:

```typescript
interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
}

interface CreateUserResponse {
  id: number;
  username: string;
  email: string;
  createdAt: string;
}

export async function createUser(
  requestBody: CreateUserRequest
): Promise<CreateUserResponse> {
  // Implementation
}
```

---

## Rules Checklist

- [ ] All function arguments have explicit TypeScript types
- [ ] Complex arguments are grouped into interfaces
- [ ] Optional arguments have default values
- [ ] Magic strings/numbers are replaced with constants
- [ ] Important arguments are validated
- [ ] Fixed argument sets use enums or string literals
- [ ] Page Objects have Page as first argument
- [ ] Fixtures are properly typed
- [ ] Test data is strongly typed
- [ ] API requests/responses are typed

---

## Related Documentation

- [Test Case Rules](TEST_CASE_RULES.md)
- Project TypeScript Config: `tsconfig.json`
- See `src/` folder structure for examples
