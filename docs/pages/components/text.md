<script setup>
import { BoText, BoTextVariant, BoFontWeight, BoFontSize } from '@/components/bo-text';
</script>

# bo-text

Th bo-text component is a wrapper around the HTML `<p>` element to provide a consistent styling for text elements.

```vue
<bo-text value="Hello World" />
```

## Props

### Required

| Name  | Type     | Default | Description              |
| ----- | -------- | ------- | ------------------------ |
| value | `string` |         | The text of the element. |

### Optional

| Name            | Type      | Default                 | Description                                                                                                                                                      |
| --------------- | --------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id              | `string`  | auto generated          | The id of the element.                                                                                                                                           |
| dataTestId      | `string`  | auto generated          | The data test id of the element.                                                                                                                                 |
| fontSize        | `string`  | BoFontSize.default      | The size of the element.                                                                                                                                         |
| fontWeight      | `string`  | BoFontWeight.regular    | The weight of the element.                                                                                                                                       |
| fontFamily      | `string`  | BoFontFamily.sans       | The font family of the element.                                                                                                                                  |
| whiteSpace      | `string`  | BoTextWhiteSpace.normal | The white space of the element.                                                                                                                                  |
| variant         | `string`  | BoTextVariant.default   | The variant of the element based on fixed enum values.                                                                                                           |
| customColor     | `string`  | undefined               | Any custom color for the element.                                                                                                                                |
| customCssClass  | `string`  | undefined               | One or multiple css classes to be used for overriding the default styles on the element.                                                                         |
| clickable       | `boolean` | false                   | The clickable of the element.                                                                                                                                    |
| textAlign       | `string`  | BoTextAlign.left        | The text align of the element.                                                                                                                                   |
| selectable      | `boolean` | false                   | if false the cursor will be set to default.                                                                                                                      |
| cursor          | `string`  | undefined               | Cursor type of the element.                                                                                                                                      |
| maxLines        | `string`  | undefined               | The max lines to render before truncating.                                                                                                                       |
| role            | `string`  | undefined               | The accessibility role of the element.                                                                                                                           |
| ariaLabel       | `string`  | undefined               | Defines a string value that labels the current element.                                                                                                          |
| ariaLabelledBy  | `string`  | undefined               | Reference to an element that labels the current element.                                                                                                         |
| ariaDescribedBy | `string`  | undefined               | Identifies the element (or elements) that describes the object.                                                                                                  |
| ariaLive        | `string`  | undefined               | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. |
| lang            | `string`  | "en"                    | The language of the element.                                                                                                                                     |
