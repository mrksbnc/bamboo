---
title: bo-icon
---

<script setup lang="ts">
import { BoIcon, Icon, BoIconVariant } from "@/components/bo-icon";

const iconList = Object.values(Icon);
</script>

# bo-icon

`bo-icon` is an `svg` wrapper around files from the [Feather Icons](https://feathericons.com/) library.

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
export enum Icon {
	activity = 'activity',
	address_book = 'address-book',
	address_card = 'address-card',
	airplay = 'airplay',
	alarm_clock = 'alarm-clock',
	alert_circle = 'alert-circle',
	alert_octagon = 'alert-octagon',
	alert_triangle = 'alert-triangle',
	align_center = 'align-center',
	align_justify = 'align-justify',
	align_left = 'align-left',
	align_right = 'align-right',
	anchor = 'anchor',
	angry = 'angry',
	aperture = 'aperture',
	archive = 'archive',
	arrow_alt_circle_down = 'arrow-alt-circle-down',
	arrow_alt_circle_left = 'arrow-alt-circle-left',
	arrow_alt_circle_right = 'arrow-alt-circle-right',
	arrow_alt_circle_up = 'arrow-alt-circle-up',
	arrow_down_circle = 'arrow-down-circle',
	arrow_down_left = 'arrow-down-left',
	arrow_down_right = 'arrow-down-right',
	arrow_down = 'arrow-down',
	arrow_left_circle = 'arrow-left-circle',
	arrow_left = 'arrow-left',
	arrow_right_circle = 'arrow-right-circle',
	arrow_right = 'arrow-right',
	arrow_up_circle = 'arrow-up-circle',
	arrow_up_left = 'arrow-up-left',
	arrow_up_right = 'arrow-up-right',
	arrow_up = 'arrow-up',
	at_sign = 'at-sign',
	award = 'award',
	bar_chart_2 = 'bar-chart-2',
	bar_chart = 'bar-chart',
	battery_charging = 'battery-charging',
	battery = 'battery',
	bell_off = 'bell-off',
	bell_slash = 'bell-slash',
	bell = 'bell',
	bluetooth = 'bluetooth',
	bold = 'bold',
	book_open = 'book-open',
	book = 'book',
	bookmark = 'bookmark',
	box = 'box',
	briefcase = 'briefcase',
	building = 'building',
	calendar_alt = 'calendar-alt',
	calendar_check = 'calendar-check',
	calendar_days = 'calendar-days',
	calendar_minus = 'calendar-minus',
	calendar_plus = 'calendar-plus',
	calendar_times = 'calendar-times',
	calendar_xmark = 'calendar-xmark',
	calendar = 'calendar',
	camera_alt = 'camera-alt',
	camera_off = 'camera-off',
	camera = 'camera',
	caret_square_down = 'caret-square-down',
	caret_square_left = 'caret-square-left',
	caret_square_right = 'caret-square-right',
	caret_square_up = 'caret-square-up',
	cast = 'cast',
	chart_bar = 'chart-bar',
	check_circle = 'check-circle',
	check_square = 'check-square',
	check = 'check',
	chess_bishop = 'chess-bishop',
	chess_king = 'chess-king',
	chess_knight = 'chess-knight',
	chess_pawn = 'chess-pawn',
	chess_queen = 'chess-queen',
	chess_rook = 'chess-rook',
	chevron_down = 'chevron-down',
	chevron_left = 'chevron-left',
	chevron_right = 'chevron-right',
	chevron_up = 'chevron-up',
	chevrons_down = 'chevrons-down',
	chevrons_left = 'chevrons-left',
	chevrons_right = 'chevrons-right',
	chevrons_up = 'chevrons-up',
	chrome = 'chrome',
	circle_check = 'circle-check',
	circle_dot = 'circle-dot',
	circle_down = 'circle-down',
	circle_left = 'circle-left',
	circle_pause = 'circle-pause',
	circle_play = 'circle-play',
	circle_question = 'circle-question',
	circle_right = 'circle-right',
	circle_stop = 'circle-stop',
	circle_up = 'circle-up',
	circle_user = 'circle-user',
	circle_xmark = 'circle-xmark',
	circle = 'circle',
	clipboard = 'clipboard',
	clock_four = 'clock-four',
	clock = 'clock',
	clone = 'clone',
	closed_captioning = 'closed-captioning',
	cloud_drizzle = 'cloud-drizzle',
	cloud_lightning = 'cloud-lightning',
	cloud_off = 'cloud-off',
	cloud_rain = 'cloud-rain',
	cloud_snow = 'cloud-snow',
	cloud = 'cloud',
	code = 'code',
	codepen = 'codepen',
	codesandbox = 'codesandbox',
	coffee = 'coffee',
	columns = 'columns',
	command = 'command',
	comment_alt = 'comment-alt',
	comment_dots = 'comment-dots',
	comment = 'comment',
	commenting = 'commenting',
	comments = 'comments',
	compass = 'compass',
	contact_book = 'contact-book',
	contact_card = 'contact-card',
	copy = 'copy',
	copyright = 'copyright',
	corner_down_left = 'corner-down-left',
	corner_down_right = 'corner-down-right',
	corner_left_down = 'corner-left-down',
	corner_left_up = 'corner-left-up',
	corner_right_down = 'corner-right-down',
	corner_right_up = 'corner-right-up',
	corner_up_left = 'corner-up-left',
	corner_up_right = 'corner-up-right',
	cpu = 'cpu',
	credit_card_alt = 'credit-card-alt',
	credit_card = 'credit-card',
	crop = 'crop',
	crosshair = 'crosshair',
	database = 'database',
	delete = 'delete',
	disc = 'disc',
	divide_circle = 'divide-circle',
	divide_square = 'divide-square',
	divide = 'divide',
	dizzy = 'dizzy',
	dollar_sign = 'dollar-sign',
	dot_circle = 'dot-circle',
	download_cloud = 'download-cloud',
	download = 'download',
	dribbble = 'dribbble',
	drivers_license = 'drivers-license',
	droplet = 'droplet',
	edit_2 = 'edit-2',
	edit_3 = 'edit-3',
	edit = 'edit',
	envelope_open = 'envelope-open',
	envelope = 'envelope',
	external_link = 'external-link',
	eye_off = 'eye-off',
	eye_slash = 'eye-slash',
	eye = 'eye',
	face_angry = 'face-angry',
	face_dizzy = 'face-dizzy',
	face_flushed = 'face-flushed',
	face_frown_open = 'face-frown-open',
	face_frown = 'face-frown',
	face_grimace = 'face-grimace',
	face_grin_beam_sweat = 'face-grin-beam-sweat',
	face_grin_beam = 'face-grin-beam',
	face_grin_hearts = 'face-grin-hearts',
	face_grin_squint_tears = 'face-grin-squint-tears',
	face_grin_squint = 'face-grin-squint',
	face_grin_stars = 'face-grin-stars',
	face_grin_tears = 'face-grin-tears',
	face_grin_tongue_squint = 'face-grin-tongue-squint',
	face_grin_tongue_wink = 'face-grin-tongue-wink',
	face_grin_tongue = 'face-grin-tongue',
	face_grin_wide = 'face-grin-wide',
	face_grin_wink = 'face-grin-wink',
	face_grin = 'face-grin',
	face_kiss_beam = 'face-kiss-beam',
	face_kiss_wink_heart = 'face-kiss-wink-heart',
	face_kiss = 'face-kiss',
	face_laugh_beam = 'face-laugh-beam',
	face_laugh_squint = 'face-laugh-squint',
	face_laugh_wink = 'face-laugh-wink',
	face_laugh = 'face-laugh',
	face_meh_blank = 'face-meh-blank',
	face_meh = 'face-meh',
	face_rolling_eyes = 'face-rolling-eyes',
	face_sad_cry = 'face-sad-cry',
	face_sad_tear = 'face-sad-tear',
	face_smile_beam = 'face-smile-beam',
	face_smile_wink = 'face-smile-wink',
	face_smile = 'face-smile',
	face_surprise = 'face-surprise',
	face_tired = 'face-tired',
	facebook = 'facebook',
	fast_forward = 'fast-forward',
	feather = 'feather',
	figma = 'figma',
	file_alt = 'file-alt',
	file_archive = 'file-archive',
	file_audio = 'file-audio',
	file_clipboard = 'file-clipboard',
	file_code = 'file-code',
	file_excel = 'file-excel',
	file_image = 'file-image',
	file_lines = 'file-lines',
	file_minus = 'file-minus',
	file_pdf = 'file-pdf',
	file_plus = 'file-plus',
	file_powerpoint = 'file-powerpoint',
	file_text = 'file-text',
	file_video = 'file-video',
	file_word = 'file-word',
	file_zipper = 'file-zipper',
	file = 'file',
	film = 'film',
	filter = 'filter',
	flag = 'flag',
	floppy_disk = 'floppy-disk',
	flushed = 'flushed',
	folder_blank = 'folder-blank',
	folder_closed = 'folder-closed',
	folder_minus = 'folder-minus',
	folder_open = 'folder-open',
	folder_plus = 'folder-plus',
	folder = 'folder',
	font_awesome_flag = 'font-awesome-flag',
	font_awesome_logo_full = 'font-awesome-logo-full',
	font_awesome = 'font-awesome',
	framer = 'framer',
	frown_open = 'frown-open',
	frown = 'frown',
	futbol_ball = 'futbol-ball',
	futbol = 'futbol',
	gem = 'gem',
	gift = 'gift',
	git_branch = 'git-branch',
	git_commit = 'git-commit',
	git_merge = 'git-merge',
	git_pull_request = 'git-pull-request',
	github = 'github',
	gitlab = 'gitlab',
	globe = 'globe',
	grid = 'grid',
	grimace = 'grimace',
	grin_alt = 'grin-alt',
	grin_beam_sweat = 'grin-beam-sweat',
	grin_beam = 'grin-beam',
	grin_hearts = 'grin-hearts',
	grin_squint_tears = 'grin-squint-tears',
	grin_squint = 'grin-squint',
	grin_stars = 'grin-stars',
	grin_tears = 'grin-tears',
	grin_tongue_squint = 'grin-tongue-squint',
	grin_tongue_wink = 'grin-tongue-wink',
	grin_tongue = 'grin-tongue',
	grin_wink = 'grin-wink',
	grin = 'grin',
	hand_back_fist = 'hand-back-fist',
	hand_lizard = 'hand-lizard',
	hand_paper = 'hand-paper',
	hand_peace = 'hand-peace',
	hand_point_down = 'hand-point-down',
	hand_point_left = 'hand-point-left',
	hand_point_right = 'hand-point-right',
	hand_point_up = 'hand-point-up',
	hand_pointer = 'hand-pointer',
	hand_rock = 'hand-rock',
	hand_scissors = 'hand-scissors',
	hand_spock = 'hand-spock',
	hand = 'hand',
	handshake_alt = 'handshake-alt',
	handshake_simple = 'handshake-simple',
	handshake = 'handshake',
	hard_drive = 'hard-drive',
	hash = 'hash',
	hdd = 'hdd',
	headphones_alt = 'headphones-alt',
	headphones_simple = 'headphones-simple',
	headphones = 'headphones',
	heart = 'heart',
	help_circle = 'help-circle',
	hexagon = 'hexagon',
	home_alt = 'home-alt',
	home_lg_alt = 'home-lg-alt',
	home = 'home',
	hospital_alt = 'hospital-alt',
	hospital_wide = 'hospital-wide',
	hospital = 'hospital',
	hourglass_2 = 'hourglass-2',
	hourglass_empty = 'hourglass-empty',
	hourglass_half = 'hourglass-half',
	hourglass = 'hourglass',
	house = 'house',
	id_badge = 'id-badge',
	id_card = 'id-card',
	image = 'image',
	images = 'images',
	inbox = 'inbox',
	info = 'info',
	instagram = 'instagram',
	italic = 'italic',
	key = 'key',
	keyboard = 'keyboard',
	kiss_beam = 'kiss-beam',
	kiss_wink_heart = 'kiss-wink-heart',
	kiss = 'kiss',
	laugh_beam = 'laugh-beam',
	laugh_squint = 'laugh-squint',
	laugh_wink = 'laugh-wink',
	laugh = 'laugh',
	layers = 'layers',
	layout = 'layout',
	lemon = 'lemon',
	life_buoy = 'life-buoy',
	life_ring = 'life-ring',
	lightbulb = 'lightbulb',
	link_2 = 'link-2',
	link = 'link',
	linkedin = 'linkedin',
	list_alt = 'list-alt',
	list = 'list',
	loader = 'loader',
	lock = 'lock',
	log_in = 'log-in',
	log_out = 'log-out',
	mail = 'mail',
	map_pin = 'map-pin',
	map = 'map',
	maximize_2 = 'maximize-2',
	maximize = 'maximize',
	meh_blank = 'meh-blank',
	meh_rolling_eyes = 'meh-rolling-eyes',
	meh = 'meh',
	menu = 'menu',
	message_circle = 'message-circle',
	message_square = 'message-square',
	message = 'message',
	mic_off = 'mic-off',
	mic = 'mic',
	minimize_2 = 'minimize-2',
	minimize = 'minimize',
	minus_circle = 'minus-circle',
	minus_square = 'minus-square',
	minus = 'minus',
	money_bill_1 = 'money-bill-1',
	money_bill_alt = 'money-bill-alt',
	monitor = 'monitor',
	moon = 'moon',
	more_horizontal = 'more-horizontal',
	more_vertical = 'more-vertical',
	mouse_pointer = 'mouse-pointer',
	move = 'move',
	music = 'music',
	navigation_2 = 'navigation-2',
	navigation = 'navigation',
	newspaper = 'newspaper',
	none = 'none',
	note_sticky = 'note-sticky',
	object_group = 'object-group',
	object_ungroup = 'object-ungroup',
	octagon = 'octagon',
	package = 'package',
	paper_plane = 'paper-plane',
	paperclip = 'paperclip',
	paste = 'paste',
	pause_circle = 'pause-circle',
	pause = 'pause',
	pen_to_square = 'pen-to-square',
	pen_tool = 'pen-tool',
	percent = 'percent',
	phone_call = 'phone-call',
	phone_forwarded = 'phone-forwarded',
	phone_incoming = 'phone-incoming',
	phone_missed = 'phone-missed',
	phone_off = 'phone-off',
	phone_outgoing = 'phone-outgoing',
	phone = 'phone',
	pie_chart = 'pie-chart',
	play_circle = 'play-circle',
	play = 'play',
	plus_circle = 'plus-circle',
	plus_square = 'plus-square',
	plus = 'plus',
	pocket = 'pocket',
	power = 'power',
	printer = 'printer',
	question_circle = 'question-circle',
	radio = 'radio',
	rectangle_list = 'rectangle-list',
	rectangle_times = 'rectangle-times',
	rectangle_xmark = 'rectangle-xmark',
	refresh_ccw = 'refresh-ccw',
	refresh_cw = 'refresh-cw',
	registered = 'registered',
	repeat = 'repeat',
	rewind = 'rewind',
	rotate_ccw = 'rotate-ccw',
	rotate_cw = 'rotate-cw',
	rss = 'rss',
	sad_cry = 'sad-cry',
	sad_tear = 'sad-tear',
	save = 'save',
	scissors = 'scissors',
	search = 'search',
	send = 'send',
	server = 'server',
	settings = 'settings',
	share_2 = 'share-2',
	share_from_square = 'share-from-square',
	share_square = 'share-square',
	share = 'share',
	shield_off = 'shield-off',
	shield = 'shield',
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
	smile_beam = 'smile-beam',
	smile_wink = 'smile-wink',
	smile = 'smile',
	snowflake = 'snowflake',
	soccer_ball = 'soccer-ball',
	speaker = 'speaker',
	square_caret_down = 'square-caret-down',
	square_caret_left = 'square-caret-left',
	square_caret_right = 'square-caret-right',
	square_caret_up = 'square-caret-up',
	square_check = 'square-check',
	square_full = 'square-full',
	square_minus = 'square-minus',
	square_plus = 'square-plus',
	square = 'square',
	star_half_alt = 'star-half-alt',
	star_half_stroke = 'star-half-stroke',
	star_half = 'star-half',
	star = 'star',
	sticky_note = 'sticky-note',
	stop_circle = 'stop-circle',
	sun = 'sun',
	sunrise = 'sunrise',
	sunset = 'sunset',
	surprise = 'surprise',
	table = 'table',
	tablet = 'tablet',
	tag = 'tag',
	target = 'target',
	terminal = 'terminal',
	thermometer = 'thermometer',
	thumbs_down = 'thumbs-down',
	thumbs_up = 'thumbs-up',
	times_circle = 'times-circle',
	times_rectangle = 'times-rectangle',
	tired = 'tired',
	toggle_left = 'toggle-left',
	toggle_right = 'toggle-right',
	tool = 'tool',
	trash_2 = 'trash-2',
	trash_alt = 'trash-alt',
	trash_can = 'trash-can',
	trash = 'trash',
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
	upload_cloud = 'upload-cloud',
	upload = 'upload',
	user_alt = 'user-alt',
	user_check = 'user-check',
	user_circle = 'user-circle',
	user_large = 'user-large',
	user_minus = 'user-minus',
	user_plus = 'user-plus',
	user_x = 'user-x',
	user = 'user',
	users = 'users',
	vcard = 'vcard',
	video_off = 'video-off',
	video = 'video',
	voicemail = 'voicemail',
	volume_1 = 'volume-1',
	volume_2 = 'volume-2',
	volume_x = 'volume-x',
	volume = 'volume',
	watch = 'watch',
	wifi_off = 'wifi-off',
	wifi = 'wifi',
	wind = 'wind',
	window_close = 'window-close',
	window_maximize = 'window-maximize',
	window_minimize = 'window-minimize',
	window_restore = 'window-restore',
	x_circle = 'x-circle',
	x_octagon = 'x-octagon',
	x_square = 'x-square',
	x = 'x',
	xmark_circle = 'xmark-circle',
	youtube = 'youtube',
	zap_off = 'zap-off',
	zap = 'zap',
	zoom_in = 'zoom-in',
	zoom_out = 'zoom-out',
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
