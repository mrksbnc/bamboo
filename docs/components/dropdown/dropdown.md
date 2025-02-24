<script setup>
    import { BoDropdown } from '@/components/bo_dropdown';
    import { Icon } from '@/components/bo_icon';
</script>

# bo-dropdown

A dropdown is a menu that displays a list of options when you click on it.
`bo-dropdown` supports both default and custom options.

## Basic usage

The component to use is called `bo-dropdown`.

```js
<bo-dropdown :default-option="{ icon: Icon.none, label: 'Dropdown' }" :options="[]" />
```

## Props

| Prop name        | Type                                           | Default value                    | Description                                                                                 |
| ---------------- | ---------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`             | `string`                                       | `undefined`                      | The id of the dropdown.                                                                     |
| `default-option` | `BoDropdownDefault`                            | `{ icon: Icon.none, label: '' }` | The default option of the dropdown.                                                         |
| `options`        | `BoDropdownDefault[]` `CustomDropdownOption[]` | `[]`                             | The options of the dropdown. These options will be bound to the dropdown content component. |
| `component`      | `Component`                                    | `BoDefaultDropdownItem`          | The component to use for the dropdown content.                                              |

## Events

| Event name | Payload              | Description                                                                                                                                               |
| ---------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `select`   | `BaseDropdownOption` | This event is emitted when the user selects an option. The payload is the selected option. NOTE: This event is only emitted after the dropdown is closed. |

## Important types

`BaseDropdownOption` is the type of the default option and the options array.

```ts
export type BaseDropdownOption = {
	id?: string;
	icon?: Icon;
	label?: string;
	[key: string]: unknown;
};
```

The definition lets you add any additional properties to the option object which later will be passed to the dropdown content component.

## Examples

To render a dropdown provide the `default-option` object (this will be default button label and icon) and the `options` array (this will be the dropdown options).

<bo-dropdown :default-option="{ icon: Icon.none, label: 'Dropdown' }" :options="[
    {
        icon: Icon.none,
        label: 'Option 1',
    },
    {
        icon: Icon.none,
        label: 'Option 2',
    }
]" />

::: details Toggle code

```js
<bo-dropdown :default-option="{ icon: Icon.none, label: 'Dropdown' }" :options="[
    {
        icon: Icon.none,
        label: 'Option 1',
    },
    {
        icon: Icon.none,
        label: 'Option 2',
    }
]" />
```

:::

## Base with icon

To render a dropdown with icon, provide the `default-option` object (this will be default button label and icon) and the `options` array (this will be the dropdown options).

<bo-dropdown :default-option="{ icon: Icon.activity, label: 'Dropdown' }" :options="[
    {
        icon: Icon.user,
        label: 'Option 1',
    },
    {
        icon: Icon.user,
        label: 'Option 2',
    }
]"/>

::: details Toggle code

```js
<bo-dropdown :default-option="{ icon: Icon.activity, label: 'Dropdown' }" :options="[
    {
        icon: Icon.user,
        label: 'Option 1',
    },
    {
        icon: Icon.user,
        label: 'Option 2',
    }
]" />
```
