---
title: theme service
---

# ThemeService

`ThemeService` provides utilities for managing application themes.

## API

| Member         | Description                                |
| -------------- | ------------------------------------------ |
| `Theme.LIGHT`  | Light theme mode                           |
| `Theme.DARK`   | Dark theme mode                            |
| `Theme.SYSTEM` | System theme mode (follows OS preferences) |

## Theme Enum

```ts
export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}
```

## Usage

```ts
import { ThemeService, Theme } from '@mrksbnc/bamboo/services';

const themeService = new ThemeService();
```
