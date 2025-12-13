---
title: bo-icon
---

<script setup lang="ts">
import { BoIcon, Icon, BoIconVariant } from "@/components/bo-icon";

const iconList = Object.values(Icon);
</script>

# bo-icon

`bo-icon` is an `svg` wrapper various icons from the [Feather Icons](https://feathericons.com/) and [Font Awesome](https://fontawesome.com/) libraries.

## Basic usage

```vue
<bo-icon :icon="Icon.heart" />
```

<bo-icon :icon="Icon.heart" />

## Props

### Required

| Name   | Type   | Description         |
| ------ | ------ | ------------------- |
| `icon` | `Icon` | The icon to display |

### Optional

| Name             | Type            | Description                                 |
| ---------------- | --------------- | ------------------------------------------- |
| `id`             | `string`        | Unique identifier for the icon element      |
| `dataTestId`     | `string`        | Unique data-test-id of the icon             |
| `size`           | `number`        | Pixel size of the icon                      |
| `variant`        | `BoIconVariant` | The color of the icon                       |
| `customColor`    | `string`        | Custom color of the icon                    |
| `customCssClass` | `string`        | Custom css class passed to the root element |
| `cursor`         | `string`        | Cursor type of the element.                 |
| `title`          | `string`        | The accessible title of the icon.           |
| `role`           | `string`        | The accessibility role of the icon.         |
| `decorative`     | `boolean`       | Whether the icon is decorative.             |

## Sizes

The icon component supports different sizes with the `size` prop. The default size is `24px`.

<bo-icon :icon="Icon.heart" :size="24" />

```vue
// default
<bo-icon :icon="Icon.heart" :size="24" />
```

---

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-icon :icon="Icon.heart" :size="16" />
  <bo-icon :icon="Icon.heart" :size="32" />
  <bo-icon :icon="Icon.heart" :size="64" />
</div>

```vue
<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-icon :icon="Icon.heart" :size="16" />
  <bo-icon :icon="Icon.heart" :size="32" />
  <bo-icon :icon="Icon.heart" :size="64" />
</div>
```

## Variants

The icon support any color but also provides predefined ones for convenience.
The available variants are the following:

- `default`
- `primary`
- `secondary`
- `success`
- `warning`
- `danger`
- `light`
- `dark`
- `current`
- `inherit`

<style scoped>
.icon-variant-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.icon-variant-item {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  min-width: 100px;
}

.icon-variant-label {
  font-weight: 600;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.icon-variant-item--light {
  background-color: var(--vp-c-black);
  border-color: var(--vp-c-black);
}

.icon-variant-item--light .icon-variant-label {
  color: var(--vp-c-white);
}

.icon-variant-item--dark {
  background-color: var(--vp-c-white);
  border-color: var(--vp-c-divider-light);
}

.icon-variant-item--dark .icon-variant-label {
  color: var(--vp-c-black);
}
</style>

<div class="icon-variant-grid">
  <div class="icon-variant-item">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.default" :size="32" />
	<span class="icon-variant-label">default</span>
  </div>
  <div class="icon-variant-item">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.primary" :size="32" />
	<span class="icon-variant-label">primary</span>
  </div>
  <div class="icon-variant-item">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.secondary" :size="32" />
	<span class="icon-variant-label">secondary</span>
  </div>
  <div class="icon-variant-item">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.success" :size="32" />
	<span class="icon-variant-label">success</span>
  </div>
  <div class="icon-variant-item">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.warning" :size="32" />
	<span class="icon-variant-label">warning</span>
  </div>
  <div class="icon-variant-item">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.danger" :size="32" />
	<span class="icon-variant-label">danger</span>
  </div>
  <div class="icon-variant-item icon-variant-item--light">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.light" :size="32" />
	<span class="icon-variant-label">light</span>
  </div>
  <div class="icon-variant-item icon-variant-item--dark">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.dark" :size="32" />
	<span class="icon-variant-label">dark</span>
  </div>
  <div class="icon-variant-item">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.current" :size="32" />
	<span class="icon-variant-label">current</span>
  </div>
  <div class="icon-variant-item">
	<bo-icon :icon="Icon.heart" :variant="BoIconVariant.inherit" :size="32" />
	<span class="icon-variant-label">inherit</span>
  </div>
</div>

## Custom colors

You can customize the color of the icon by passing any valid CSS color value to the `customColor` prop.

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
  <bo-icon :icon="Icon.heart" custom-color="var(--teal-500)" />
  <bo-icon :icon="Icon.check" custom-color="#345678" />
  <bo-icon :icon="Icon.alert_circle" custom-color="var(--orange-500)" />
  <bo-icon :icon="Icon.x" custom-color="#FF0000" />
  <bo-icon :icon="Icon.star" custom-color="oklch(0.591 0.293 322.896)" />
</div>

```vue
<!-- CSS variable -->
<bo-icon :icon="Icon.heart" custom-color="var(--teal-500)" />
<!-- Hex color -->
<bo-icon :icon="Icon.check" custom-color="#345678" />
<!-- CSS variable -->
<bo-icon :icon="Icon.alert_circle" custom-color="var(--orange-500)" />
<!-- Hex color -->
<bo-icon :icon="Icon.x" custom-color="#FF0000" />
<!-- oklch color -->
<bo-icon :icon="Icon.star" custom-color="oklch(0.591 0.293 322.896)" />
<!-- rgb/rgba color -->
<bo-icon :icon="Icon.heart" custom-color="rgb(255, 0, 0)" />
<bo-icon :icon="Icon.heart" custom-color="rgba(0, 128, 0, 0.5)" />
```

## All available icons

<style scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.icon-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.5rem;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.2s ease;
}

.icon-card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-alt);
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.icon-name {
  font-size: 0.75rem;
  text-align: center;
  word-break: break-word;
  color: var(--vp-c-text-2);
}
</style>

<div class="icon-grid">
  <div v-for="value in Object.values(Icon)" :key="value" class="icon-card">
    <bo-icon :icon="value" :size="32" />
    <span class="icon-name">{{ value }}</span>
  </div>
</div>

### Interfaces and constants

::: code-group

```ts [bo-icon.ts]
enum Icon {
	activity = 'activity',
	airplay = 'airplay',
	alert_circle = 'alert-circle',
	alert_octagon = 'alert-octagon',
	alert_triangle = 'alert-triangle',
	align_center = 'align-center',
	align_justify = 'align-justify',
	align_left = 'align-left',
	align_right = 'align-right',
	anchor = 'anchor',
	aperture = 'aperture',
	archive = 'archive',
	arrow_down = 'arrow-down',
	arrow_down_circle = 'arrow-down-circle',
	arrow_down_left = 'arrow-down-left',
	arrow_down_right = 'arrow-down-right',
	arrow_left = 'arrow-left',
	arrow_left_circle = 'arrow-left-circle',
	arrow_right = 'arrow-right',
	arrow_right_circle = 'arrow-right-circle',
	arrow_up = 'arrow-up',
	arrow_up_circle = 'arrow-up-circle',
	arrow_up_left = 'arrow-up-left',
	arrow_up_right = 'arrow-up-right',
	at_sign = 'at-sign',
	award = 'award',
	bar_chart = 'bar-chart',
	bar_chart_2 = 'bar-chart-2',
	battery = 'battery',
	battery_charging = 'battery-charging',
	bell = 'bell',
	bell_off = 'bell-off',
	bluetooth = 'bluetooth',
	bold = 'bold',
	book = 'book',
	book_open = 'book-open',
	bookmark = 'bookmark',
	box = 'box',
	briefcase = 'briefcase',
	calendar = 'calendar',
	camera = 'camera',
	camera_off = 'camera-off',
	cast = 'cast',
	check = 'check',
	check_circle = 'check-circle',
	check_square = 'check-square',
	chevron_down = 'chevron-down',
	chevron_left = 'chevron-left',
	chevron_right = 'chevron-right',
	chevron_up = 'chevron-up',
	chevrons_down = 'chevrons-down',
	chevrons_left = 'chevrons-left',
	chevrons_right = 'chevrons-right',
	chevrons_up = 'chevrons-up',
	chrome = 'chrome',
	circle = 'circle',
	clipboard = 'clipboard',
	clock = 'clock',
	cloud = 'cloud',
	cloud_drizzle = 'cloud-drizzle',
	cloud_lightning = 'cloud-lightning',
	cloud_off = 'cloud-off',
	cloud_rain = 'cloud-rain',
	cloud_snow = 'cloud-snow',
	code = 'code',
	codepen = 'codepen',
	codesandbox = 'codesandbox',
	coffee = 'coffee',
	columns = 'columns',
	command = 'command',
	compass = 'compass',
	copy = 'copy',
	corner_down_left = 'corner-down-left',
	corner_down_right = 'corner-down-right',
	corner_left_down = 'corner-left-down',
	corner_left_up = 'corner-left-up',
	corner_right_down = 'corner-right-down',
	corner_right_up = 'corner-right-up',
	corner_up_left = 'corner-up-left',
	corner_up_right = 'corner-up-right',
	cpu = 'cpu',
	credit_card = 'credit-card',
	crop = 'crop',
	crosshair = 'crosshair',
	database = 'database',
	delete = 'delete',
	disc = 'disc',
	divide = 'divide',
	divide_circle = 'divide-circle',
	divide_square = 'divide-square',
	dollar_sign = 'dollar-sign',
	download = 'download',
	download_cloud = 'download-cloud',
	dribbble = 'dribbble',
	droplet = 'droplet',
	edit = 'edit',
	edit_2 = 'edit-2',
	edit_3 = 'edit-3',
	external_link = 'external-link',
	eye = 'eye',
	eye_off = 'eye-off',
	facebook = 'facebook',
	fast_forward = 'fast-forward',
	feather = 'feather',
	figma = 'figma',
	file = 'file',
	file_minus = 'file-minus',
	file_plus = 'file-plus',
	file_text = 'file-text',
	film = 'film',
	filter = 'filter',
	flag = 'flag',
	folder = 'folder',
	folder_minus = 'folder-minus',
	folder_plus = 'folder-plus',
	framer = 'framer',
	frown = 'frown',
	gift = 'gift',
	git_branch = 'git-branch',
	git_commit = 'git-commit',
	git_merge = 'git-merge',
	git_pull_request = 'git-pull-request',
	github = 'github',
	gitlab = 'gitlab',
	globe = 'globe',
	grid = 'grid',
	hard_drive = 'hard-drive',
	hash = 'hash',
	headphones = 'headphones',
	heart = 'heart',
	help_circle = 'help-circle',
	hexagon = 'hexagon',
	home = 'home',
	image = 'image',
	inbox = 'inbox',
	info = 'info',
	instagram = 'instagram',
	italic = 'italic',
	key = 'key',
	layers = 'layers',
	layout = 'layout',
	life_buoy = 'life-buoy',
	link = 'link',
	link_2 = 'link-2',
	linkedin = 'linkedin',
	list = 'list',
	loader = 'loader',
	lock = 'lock',
	log_in = 'log-in',
	log_out = 'log-out',
	mail = 'mail',
	map = 'map',
	map_pin = 'map-pin',
	maximize = 'maximize',
	maximize_2 = 'maximize-2',
	meh = 'meh',
	menu = 'menu',
	message_circle = 'message-circle',
	message_square = 'message-square',
	mic = 'mic',
	mic_off = 'mic-off',
	minimize = 'minimize',
	minimize_2 = 'minimize-2',
	minus = 'minus',
	minus_circle = 'minus-circle',
	minus_square = 'minus-square',
	monitor = 'monitor',
	moon = 'moon',
	more_horizontal = 'more-horizontal',
	more_vertical = 'more-vertical',
	mouse_pointer = 'mouse-pointer',
	move = 'move',
	music = 'music',
	navigation = 'navigation',
	navigation_2 = 'navigation-2',
	octagon = 'octagon',
	package = 'package',
	paperclip = 'paperclip',
	pause = 'pause',
	pause_circle = 'pause-circle',
	pen_tool = 'pen-tool',
	percent = 'percent',
	phone = 'phone',
	phone_call = 'phone-call',
	phone_forwarded = 'phone-forwarded',
	phone_incoming = 'phone-incoming',
	phone_missed = 'phone-missed',
	phone_off = 'phone-off',
	phone_outgoing = 'phone-outgoing',
	pie_chart = 'pie-chart',
	play = 'play',
	play_circle = 'play-circle',
	plus = 'plus',
	plus_circle = 'plus-circle',
	plus_square = 'plus-square',
	pocket = 'pocket',
	power = 'power',
	printer = 'printer',
	radio = 'radio',
	refresh_ccw = 'refresh-ccw',
	refresh_cw = 'refresh-cw',
	repeat = 'repeat',
	rewind = 'rewind',
	rotate_ccw = 'rotate-ccw',
	rotate_cw = 'rotate-cw',
	rss = 'rss',
	save = 'save',
	scissors = 'scissors',
	search = 'search',
	send = 'send',
	server = 'server',
	settings = 'settings',
	share = 'share',
	share_2 = 'share-2',
	shield = 'shield',
	shield_off = 'shield-off',
	shopping_bag = 'shopping-bag',
	shopping_cart = 'shopping-cart',
	shuffle = 'shuffle',
	sidebar = 'sidebar',
	skip_back = 'skip-back',
	skip_forward = 'skip-forward',
	slack = 'slack',
	slash = 'slash',
	sliders = 'sliders',
	smartphone = 'smartphone',
	smile = 'smile',
	speaker = 'speaker',
	square = 'square',
	star = 'star',
	stop_circle = 'stop-circle',
	sun = 'sun',
	sunrise = 'sunrise',
	sunset = 'sunset',
	table = 'table',
	tablet = 'tablet',
	tag = 'tag',
	target = 'target',
	terminal = 'terminal',
	thermometer = 'thermometer',
	thumbs_down = 'thumbs-down',
	thumbs_up = 'thumbs-up',
	toggle_left = 'toggle-left',
	toggle_right = 'toggle-right',
	tool = 'tool',
	trash = 'trash',
	trash_2 = 'trash-2',
	trello = 'trello',
	trending_down = 'trending-down',
	trending_up = 'trending-up',
	triangle = 'triangle',
	truck = 'truck',
	tv = 'tv',
	twitch = 'twitch',
	twitter = 'twitter',
	type = 'type',
	umbrella = 'umbrella',
	underline = 'underline',
	unlock = 'unlock',
	upload = 'upload',
	upload_cloud = 'upload-cloud',
	user = 'user',
	user_check = 'user-check',
	user_minus = 'user-minus',
	user_plus = 'user-plus',
	user_x = 'user-x',
	users = 'users',
	video = 'video',
	video_off = 'video-off',
	voicemail = 'voicemail',
	volume = 'volume',
	volume_1 = 'volume-1',
	volume_2 = 'volume-2',
	volume_x = 'volume-x',
	watch = 'watch',
	wifi = 'wifi',
	wifi_off = 'wifi-off',
	wind = 'wind',
	x = 'x',
	x_circle = 'x-circle',
	x_octagon = 'x-octagon',
	x_square = 'x-square',
	youtube = 'youtube',
	zap = 'zap',
	zap_off = 'zap-off',
	zoom_in = 'zoom-in',
	zoom_out = 'zoom-out',
	none = 'none',
}

enum BoIconVariant {
	/** currentColor */
	default = 'default',
	/** --blue-500 */
	primary = 'primary',
	/** --neutral-500 */
	secondary = 'secondary',
	/** --green-500 */
	success = 'success',
	/** --orange-500 */
	warning = 'warning',
	/** --red-500 */
	danger = 'danger',
	/** --neutral-100 */
	light = 'light',
	/** --neutral-950 */
	dark = 'dark',
	/** currentColor */
	current = 'current',
	/** inherit */
	inherit = 'inherit',
}

interface BoIconProps {
	/** The unique ID for the icon */
	id?: string;
	/** The data-test-id of the icon */
	dataTestId?: string;
	/** The icon to display */
	icon: Icon;
	/** The size of the icon (in px)*/
	size?: number;
	/** The color of the icon defined by the enum BoIconColor */
	variant?: BoIconVariant;
	/** The color of the icon */
	customColor?: string;
	/** Custom css class passed to the root element */
	customCssClass?: string;
	/** cursor type of the element. This must be a valid cursor value. */
	cursor?: string;
	/** The accessible title of the icon. */
	title?: string;
	/** The accessibility role of the icon. */
	role?: string;
	/**
	 * Whether the icon is decorative which means that the icon is not
	 * a part of the UI and is only used to convey information.
	 */
	decorative?: boolean;
}
```

:::
