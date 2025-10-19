---
title: Services
---

# Services

Services wrap shared logic used across Bamboo components. They are singleton classes you can access through a static `instance` getter, making it easy to reuse consistent behavior without wiring up dependency injection.

| Service | Description |
| ------- | ----------- |
| [Identity Service](/en/services/identity-service) | Generates deterministic ids and test ids for components. |
| [String Service](/en/services/string-service) | Normalizes string checks used for authoring components. |

All services are tree-shakeable and can be imported from the main Bamboo entry point:

```ts
import { IdentityService, StringService } from '@mrksbnc/bamboo'
```

Inside the component source you can also import the service directly via an alias:

```ts
import { IdentityService } from '@/services/identity-service'
```

Both patterns resolve to the same module once the library is bundled.
