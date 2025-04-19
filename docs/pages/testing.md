---
title: Testing & Quality Assurance
---

# Testing & Quality Assurance

Bamboo emphasizes quality and reliability through comprehensive testing. All components and utilities are thoroughly tested to ensure consistent behavior and accessibility compliance.

## Testing Technologies

Bamboo uses several technologies to ensure high quality:

- **Vitest**: Fast and efficient unit testing framework
- **Vue Test Utils**: Testing Vue components
- **Accessibility Testing**: Every component is tested for WCAG compliance

## Running Tests

If you're contributing to Bamboo, you can run tests with the following commands:

```bash
# Run tests
npm test

# Run tests and generate coverage report
npm run test:report
```

## Quality Assurance

Beyond automated tests, Bamboo implements several quality assurance practices:

1. **Linting**: All code is checked with ESLint and Prettier
2. **Type Safety**: Written in TypeScript for enhanced type safety
3. **Pre-commit Hooks**: Tests and linting run automatically before commits
4. **CI/CD**: Automated testing on each pull request and commit

## Accessibility Standards

Bamboo is committed to web accessibility. All components are built with WCAG 2.1 AA standards in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast
- Focus management

By focusing on quality assurance and accessibility, Bamboo provides a reliable foundation for building accessible applications.
