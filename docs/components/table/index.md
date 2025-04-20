<script setup>
import { BoTable } from '@/components'
import { BoSize } from '@/shared'
import { Icon } from '@/components/bo_icon'
import BasicTable from './examples/BasicTable.vue'
import SearchPaginationTable from './examples/SearchPaginationTable.vue'
import SelectableTable from './examples/SelectableTable.vue'
import CustomCellTable from './examples/CustomCellTable.vue'
import StyledTable from './examples/StyledTable.vue'
</script>

# bo-table

The `BoTable` component is a flexible table implementation with support for searching, sorting, pagination, and row selection.

<BasicTable />

## Basic Usage

```vue
<template>
  <bo-table
    :items="users"
    :columns="columns"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BoTable } from '@/components'

const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
])

const columns = ref([
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', field: 'name', sortable: true },
  { key: 'email', label: 'Email', field: 'email' },
  { key: 'role', label: 'Role', field: 'role', sortable: true },
])
</script>
```

## Props

| Prop                | Type                    | Default               | Description                                                         |
| ------------------- | ----------------------- | --------------------- | ------------------------------------------------------------------- |
| `items`             | `Array`                 | **Required**          | Array of data to display in the table                               |
| `columns`           | `Array<BoTableColumn>`  | **Required**          | Column definitions for the table                                    |
| `searchable`        | `Boolean`               | `false`               | Whether to show the search input                                    |
| `searchPlaceholder` | `String`                | `"Search..."`         | Placeholder text for the search input                               |
| `initialSearch`     | `String`                | `""`                  | Initial search query                                                |
| `searchFields`      | `Array<String>`         | `[]`                  | Fields to search in (if empty, all string fields)                   |
| `paginated`         | `Boolean`               | `false`               | Whether to enable pagination                                        |
| `perPage`           | `Number`                | `10`                  | Number of items per page when paginated                             |
| `bordered`          | `Boolean`               | `false`               | Whether the table has borders                                       |
| `striped`           | `Boolean`               | `false`               | Whether the table has zebra striping                                |
| `hoverable`         | `Boolean`               | `true`                | Whether rows are hoverable                                          |
| `size`              | `BoSize`                | `BoSize.default`      | Size of the table (extra_small, small, default, large, extra_large) |
| `loading`           | `Boolean`               | `false`               | Whether the table is in loading state                               |
| `emptyText`         | `String`                | `"No data available"` | Text to display when there are no items                             |
| `stickyHeader`      | `Boolean`               | `false`               | Whether the table has a sticky header                               |
| `height`            | `String`                | `"400px"`             | Height of the table when sticky header is enabled                   |
| `showHeader`        | `Boolean`               | `true`                | Whether to show the table header                                    |
| `selectable`        | `Boolean`               | `false`               | Whether to allow selection of rows                                  |
| `selectedKeys`      | `Array<String\|Number>` | `[]`                  | Array of keys of selected items                                     |
| `rowKey`            | `String`                | `"id"`                | Key field in the data object to use for selection                   |
| `rowKeyFn`          | `Function`              | `-`                   | Function to get a unique key for each row                           |
| `multiSelect`       | `Boolean`               | `false`               | Whether to enable multiple selection                                |
| `defaultSortKey`    | `String`                | `""`                  | Default sort key                                                    |
| `defaultSortOrder`  | `"asc"\|"desc"`         | `"asc"`               | Default sort direction                                              |

## Column Properties

| Property      | Type                        | Description                                       |
| ------------- | --------------------------- | ------------------------------------------------- |
| `key`         | `String`                    | Unique key for the column (required)              |
| `label`       | `String`                    | Display label for the column header (required)    |
| `field`       | `String`                    | Field path in the data object to display          |
| `sortable`    | `Boolean`                   | Whether the column is sortable                    |
| `sortFn`      | `Function`                  | Custom function to get the cell value for sorting |
| `headerIcon`  | `Icon`                      | Icon to display in the header                     |
| `renderFn`    | `Function`                  | Custom render function for the cell               |
| `width`       | `String`                    | Width of the column (CSS value)                   |
| `align`       | `"left"\|"center"\|"right"` | Text alignment in the column                      |
| `class`       | `String`                    | Custom class for the column                       |
| `headerClass` | `String`                    | Custom class for the column header                |

## Events

| Event              | Arguments                                                  | Description                           |
| ------------------ | ---------------------------------------------------------- | ------------------------------------- |
| `search`           | `(query: string)`                                          | Emitted when the search query changes |
| `sort`             | `(key: string, order: 'asc' \| 'desc')`                    | Emitted when a column is sorted       |
| `row-click`        | `(item: T, index: number)`                                 | Emitted when a row is clicked         |
| `selection-change` | `(selectedKeys: (string \| number)[], selectedItems: T[])` | Emitted when selection changes        |
| `page-change`      | `(page: number)`                                           | Emitted when the current page changes |

## Slots

| Slot              | Scope                            | Description                                 |
| ----------------- | -------------------------------- | ------------------------------------------- |
| `cell(columnKey)` | `{ item, index, value, column }` | Custom cell rendering for a specific column |

## Search and Pagination

Adding search functionality and pagination to your table is as simple as adding a few props. The `searchable` prop enables the search input, and the `paginated` prop enables pagination.

<SearchPaginationTable />

::: details Toggle code

```vue
<template>
  <bo-table
    :items="users"
    :columns="columns"
    searchable
    search-placeholder="Search users..."
    paginated
    :per-page="5"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BoTable } from '@/components'

const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Admin' },
  { id: 5, name: 'Michael Brown', email: 'michael@example.com', role: 'User' },
  { id: 6, name: 'Emily Davis', email: 'emily@example.com', role: 'Editor' },
  { id: 7, name: 'David Miller', email: 'david@example.com', role: 'User' },
])

const columns = ref([
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', field: 'name', sortable: true },
  { key: 'email', label: 'Email', field: 'email' },
  { key: 'role', label: 'Role', field: 'role', sortable: true },
])
</script>
```

:::

## Row Selection

To enable row selection, use the `selectable` prop. For multiple selection, add the `multi-select` prop.

<SelectableTable />

::: details Toggle code

```vue
<template>
  <div>
    <bo-table
      :items="users"
      :columns="columns"
      selectable
      multi-select
      row-key="id"
      @selection-change="onSelectionChange"
    />
    <div
      v-if="selectedItems.length"
      class="mt-4 rounded border p-4"
    >
      <p class="font-bold">Selected items:</p>
      <pre class="mt-2 text-sm">{{ JSON.stringify(selectedItems, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BoTable } from '@/components'

const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
])

const columns = ref([
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', field: 'name', sortable: true },
  { key: 'email', label: 'Email', field: 'email' },
  { key: 'role', label: 'Role', field: 'role', sortable: true },
])

const selectedItems = ref([])

const onSelectionChange = (keys, items) => {
  selectedItems.value = items
}
</script>
```

:::

## Custom Cell Rendering

You can customize the rendering of cells using slots. The `cell(columnKey)` slot allows you to provide custom rendering for a specific column.

<CustomCellTable />

::: details Toggle code

```vue
<template>
  <bo-table
    :items="users"
    :columns="columns"
  >
    <template #cell(actions)="{ item }">
      <div class="flex space-x-2">
        <button
          class="text-blue-500 hover:text-blue-700"
          @click="editUser(item)"
        >
          Edit
        </button>
        <button
          class="text-red-500 hover:text-red-700"
          @click="deleteUser(item)"
        >
          Delete
        </button>
      </div>
    </template>
  </bo-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BoTable } from '@/components'

const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
])

const columns = ref([
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', field: 'name', sortable: true },
  { key: 'email', label: 'Email', field: 'email' },
  { key: 'role', label: 'Role', field: 'role', sortable: true },
  { key: 'actions', label: 'Actions', sortable: false },
])

const editUser = (user) => {
  alert(`Edit user: ${user.name}`)
}

const deleteUser = (user) => {
  alert(`Delete user: ${user.name}`)
}
</script>
```

:::

## Table Styling

The BoTable component offers various styling options including bordered, striped, and hoverable states.

<StyledTable />

::: details Toggle code

```vue
<template>
  <div class="space-y-6">
    <div>
      <h3 class="mb-2 text-sm font-medium">Bordered Table</h3>
      <bo-table
        :items="data"
        :columns="columns"
        bordered
      />
    </div>

    <div>
      <h3 class="mb-2 text-sm font-medium">Striped Table</h3>
      <bo-table
        :items="data"
        :columns="columns"
        striped
      />
    </div>

    <div>
      <h3 class="mb-2 text-sm font-medium">Hoverable Table</h3>
      <bo-table
        :items="data"
        :columns="columns"
        hoverable
      />
    </div>

    <div>
      <h3 class="mb-2 text-sm font-medium">Combined Styles</h3>
      <bo-table
        :items="data"
        :columns="columns"
        bordered
        striped
        hoverable
        size="large"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BoTable } from '@/components'
import { BoSize } from '@/shared'

const data = ref([
  { id: 1, name: 'Product A', price: 25.99, stock: 120 },
  { id: 2, name: 'Product B', price: 35.99, stock: 80 },
  { id: 3, name: 'Product C', price: 15.99, stock: 0 },
])

const columns = ref([
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Product Name', field: 'name', sortable: true },
  {
    key: 'price',
    label: 'Price',
    field: 'price',
    sortable: true,
    align: 'right',
  },
  { key: 'stock', label: 'Stock', field: 'stock', sortable: true },
])
</script>
```

:::

## TypeScript Type Definitions

### BoTableColumn

```typescript
export type BoTableColumn<T = Record<string, unknown>> = {
  key: string
  label: string
  field?: string
  sortable?: boolean
  sortFn?: (item: T) => unknown
  headerIcon?: string
  renderFn?: (value: unknown, item: T, index: number) => unknown
  width?: string
  align?: 'left' | 'center' | 'right'
  class?: string
  headerClass?: string
}
```

### BoTableProps

```typescript
export type BoTableProps<T = Record<string, unknown>> = {
  items: T[]
  columns: BoTableColumn<T>[]
  searchable?: boolean
  searchPlaceholder?: string
  initialSearch?: string
  searchFields?: string[]
  paginated?: boolean
  perPage?: number
  bordered?: boolean
  striped?: boolean
  hoverable?: boolean
  size?: BoSize
  loading?: boolean
  emptyText?: string
  stickyHeader?: boolean
  height?: string
  showHeader?: boolean
  selectable?: boolean
  selectedKeys?: (string | number)[]
  rowKey?: string
  rowKeyFn?: (item: T) => string | number
  multiSelect?: boolean
  defaultSortKey?: string
  defaultSortOrder?: 'asc' | 'desc'
}
```
