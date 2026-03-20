# Project Guidelines

This document provides project-specific information for development, build, and testing within the `ivan-ivanov-marin` repository.

## Build/Configuration Instructions

### Prerequisites
- Node.js (Version defined in `package.json` packageManager: `npm@11.7.0`)
- Angular CLI (v21.2.3)

### Installation
```bash
npm install
```

### Development Server
Run the application locally:
```bash
npm start
# or
ng serve
```

### Build
Generate a production build:
```bash
npm run build
# or
ng build
```

---

## Testing Information

This project uses **Vitest** as the test runner, integrated via the Angular build system (`@angular/build:unit-test`).

### Running Tests
To run tests once:
```bash
npm test -- --watch=false
```

To run tests in watch mode:
```bash
npm test
```

### Configuration
Tests are configured via `tsconfig.spec.json` and `angular.json`. The project uses `jsdom` as the test environment.

### Adding New Tests
- Test files should be named with the `.spec.ts` suffix (e.g., `my-component.spec.ts`).
- Since global Vitest types might not be automatically available in all environments, it is recommended to explicitly import test globals if IDE or CLI issues arise:
  ```typescript
  import { describe, it, expect, beforeEach } from 'vitest';
  ```

### Handling Environment/GSAP Issues
Many components use **GSAP** and **ScrollTrigger**, which may require `window.matchMedia` to be mocked in the `jsdom` environment. If tests fail with `TypeError: _win.matchMedia is not a function`, ensure the test or a setup file mocks it:
```typescript
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  }),
});
```

---

## Additional Development Information

### Libraries
- **GSAP**: Used for animations and scroll-based effects.
- **Three.js**: Used for WebGL components.
- **Lenis**: Used for smooth scrolling.
- **NGX-Translate**: Used for internationalization.

### Code Style
- **Prettier**: The project uses Prettier for formatting. Configuration is located in `package.json`.
  - `printWidth`: 100
  - `singleQuote`: true
- **Angular Style**: Strictly follows Angular's recommended component and file naming conventions.

### Common Pitfalls
- **Missing Providers**: When testing components that use `ActivatedRoute` or `TranslateService`, ensure the `TestBed` is configured with the necessary providers or mocks:
  ```typescript
  await TestBed.configureTestingModule({
    imports: [MyComponent],
    providers: [
      { provide: ActivatedRoute, useValue: { params: of({}) } },
      provideHttpClient(),
      provideTranslateService()
    ]
  }).compileComponents();
  ```
