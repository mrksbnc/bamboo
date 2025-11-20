import { i as IdentityService, n as TooltipService, r as ColorService } from "./services-B0Dtb--X.js";
import { a as BoVariant, i as BoSize, n as BoLoaderTextPosition, o as AriaLive, r as BoLoaderType } from "./shared-CUg-8DyK.js";
import { Teleport, Transition, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createVNode, defineComponent, mergeProps, normalizeClass, normalizeProps, normalizeStyle, onMounted, onUnmounted, openBlock, ref, renderSlot, resolveDynamicComponent, toDisplayString, unref, watchEffect, withCtx } from "vue";
var __plugin_vue_export_helper_default = (l, R) => {
	let z = l.__vccOpts || l;
	for (let [l, B] of R) z[l] = B;
	return z;
};
let Icon = /* @__PURE__ */ function(l) {
	return l.activity = "activity", l.airplay = "airplay", l.alert_circle = "alert-circle", l.alert_octagon = "alert-octagon", l.alert_triangle = "alert-triangle", l.align_center = "align-center", l.align_justify = "align-justify", l.align_left = "align-left", l.align_right = "align-right", l.anchor = "anchor", l.aperture = "aperture", l.archive = "archive", l.arrow_down = "arrow-down", l.arrow_down_circle = "arrow-down-circle", l.arrow_down_left = "arrow-down-left", l.arrow_down_right = "arrow-down-right", l.arrow_left = "arrow-left", l.arrow_left_circle = "arrow-left-circle", l.arrow_right = "arrow-right", l.arrow_right_circle = "arrow-right-circle", l.arrow_up = "arrow-up", l.arrow_up_circle = "arrow-up-circle", l.arrow_up_left = "arrow-up-left", l.arrow_up_right = "arrow-up-right", l.at_sign = "at-sign", l.award = "award", l.bar_chart = "bar-chart", l.bar_chart_2 = "bar-chart-2", l.battery = "battery", l.battery_charging = "battery-charging", l.bell = "bell", l.bell_off = "bell-off", l.bluetooth = "bluetooth", l.bold = "bold", l.book = "book", l.book_open = "book-open", l.bookmark = "bookmark", l.box = "box", l.briefcase = "briefcase", l.calendar = "calendar", l.camera = "camera", l.camera_off = "camera-off", l.cast = "cast", l.check = "check", l.check_circle = "check-circle", l.check_square = "check-square", l.chevron_down = "chevron-down", l.chevron_left = "chevron-left", l.chevron_right = "chevron-right", l.chevron_up = "chevron-up", l.chevrons_down = "chevrons-down", l.chevrons_left = "chevrons-left", l.chevrons_right = "chevrons-right", l.chevrons_up = "chevrons-up", l.chrome = "chrome", l.circle = "circle", l.clipboard = "clipboard", l.clock = "clock", l.cloud = "cloud", l.cloud_drizzle = "cloud-drizzle", l.cloud_lightning = "cloud-lightning", l.cloud_off = "cloud-off", l.cloud_rain = "cloud-rain", l.cloud_snow = "cloud-snow", l.code = "code", l.codepen = "codepen", l.codesandbox = "codesandbox", l.coffee = "coffee", l.columns = "columns", l.command = "command", l.compass = "compass", l.copy = "copy", l.corner_down_left = "corner-down-left", l.corner_down_right = "corner-down-right", l.corner_left_down = "corner-left-down", l.corner_left_up = "corner-left-up", l.corner_right_down = "corner-right-down", l.corner_right_up = "corner-right-up", l.corner_up_left = "corner-up-left", l.corner_up_right = "corner-up-right", l.cpu = "cpu", l.credit_card = "credit-card", l.crop = "crop", l.crosshair = "crosshair", l.database = "database", l.delete = "delete", l.disc = "disc", l.divide = "divide", l.divide_circle = "divide-circle", l.divide_square = "divide-square", l.dollar_sign = "dollar-sign", l.download = "download", l.download_cloud = "download-cloud", l.dribbble = "dribbble", l.droplet = "droplet", l.edit = "edit", l.edit_2 = "edit-2", l.edit_3 = "edit-3", l.external_link = "external-link", l.eye = "eye", l.eye_off = "eye-off", l.facebook = "facebook", l.fast_forward = "fast-forward", l.feather = "feather", l.figma = "figma", l.file = "file", l.file_minus = "file-minus", l.file_plus = "file-plus", l.file_text = "file-text", l.film = "film", l.filter = "filter", l.flag = "flag", l.folder = "folder", l.folder_minus = "folder-minus", l.folder_plus = "folder-plus", l.framer = "framer", l.frown = "frown", l.gift = "gift", l.git_branch = "git-branch", l.git_commit = "git-commit", l.git_merge = "git-merge", l.git_pull_request = "git-pull-request", l.github = "github", l.gitlab = "gitlab", l.globe = "globe", l.grid = "grid", l.hard_drive = "hard-drive", l.hash = "hash", l.headphones = "headphones", l.heart = "heart", l.help_circle = "help-circle", l.hexagon = "hexagon", l.home = "home", l.image = "image", l.inbox = "inbox", l.info = "info", l.instagram = "instagram", l.italic = "italic", l.key = "key", l.layers = "layers", l.layout = "layout", l.life_buoy = "life-buoy", l.link = "link", l.link_2 = "link-2", l.linkedin = "linkedin", l.list = "list", l.loader = "loader", l.lock = "lock", l.log_in = "log-in", l.log_out = "log-out", l.mail = "mail", l.map = "map", l.map_pin = "map-pin", l.maximize = "maximize", l.maximize_2 = "maximize-2", l.meh = "meh", l.menu = "menu", l.message_circle = "message-circle", l.message_square = "message-square", l.mic = "mic", l.mic_off = "mic-off", l.minimize = "minimize", l.minimize_2 = "minimize-2", l.minus = "minus", l.minus_circle = "minus-circle", l.minus_square = "minus-square", l.monitor = "monitor", l.moon = "moon", l.more_horizontal = "more-horizontal", l.more_vertical = "more-vertical", l.mouse_pointer = "mouse-pointer", l.move = "move", l.music = "music", l.navigation = "navigation", l.navigation_2 = "navigation-2", l.octagon = "octagon", l.package = "package", l.paperclip = "paperclip", l.pause = "pause", l.pause_circle = "pause-circle", l.pen_tool = "pen-tool", l.percent = "percent", l.phone = "phone", l.phone_call = "phone-call", l.phone_forwarded = "phone-forwarded", l.phone_incoming = "phone-incoming", l.phone_missed = "phone-missed", l.phone_off = "phone-off", l.phone_outgoing = "phone-outgoing", l.pie_chart = "pie-chart", l.play = "play", l.play_circle = "play-circle", l.plus = "plus", l.plus_circle = "plus-circle", l.plus_square = "plus-square", l.pocket = "pocket", l.power = "power", l.printer = "printer", l.radio = "radio", l.refresh_ccw = "refresh-ccw", l.refresh_cw = "refresh-cw", l.repeat = "repeat", l.rewind = "rewind", l.rotate_ccw = "rotate-ccw", l.rotate_cw = "rotate-cw", l.rss = "rss", l.save = "save", l.scissors = "scissors", l.search = "search", l.send = "send", l.server = "server", l.settings = "settings", l.share = "share", l.share_2 = "share-2", l.shield = "shield", l.shield_off = "shield-off", l.shopping_bag = "shopping-bag", l.shopping_cart = "shopping-cart", l.shuffle = "shuffle", l.sidebar = "sidebar", l.skip_back = "skip-back", l.skip_forward = "skip-forward", l.slack = "slack", l.slash = "slash", l.sliders = "sliders", l.smartphone = "smartphone", l.smile = "smile", l.speaker = "speaker", l.square = "square", l.star = "star", l.stop_circle = "stop-circle", l.sun = "sun", l.sunrise = "sunrise", l.sunset = "sunset", l.table = "table", l.tablet = "tablet", l.tag = "tag", l.target = "target", l.terminal = "terminal", l.thermometer = "thermometer", l.thumbs_down = "thumbs-down", l.thumbs_up = "thumbs-up", l.toggle_left = "toggle-left", l.toggle_right = "toggle-right", l.tool = "tool", l.trash = "trash", l.trash_2 = "trash-2", l.trello = "trello", l.trending_down = "trending-down", l.trending_up = "trending-up", l.triangle = "triangle", l.truck = "truck", l.tv = "tv", l.twitch = "twitch", l.twitter = "twitter", l.type = "type", l.umbrella = "umbrella", l.underline = "underline", l.unlock = "unlock", l.upload = "upload", l.upload_cloud = "upload-cloud", l.user = "user", l.user_check = "user-check", l.user_minus = "user-minus", l.user_plus = "user-plus", l.user_x = "user-x", l.users = "users", l.video = "video", l.video_off = "video-off", l.voicemail = "voicemail", l.volume = "volume", l.volume_1 = "volume-1", l.volume_2 = "volume-2", l.volume_x = "volume-x", l.watch = "watch", l.wifi = "wifi", l.wifi_off = "wifi-off", l.wind = "wind", l.x = "x", l.x_circle = "x-circle", l.x_octagon = "x-octagon", l.x_square = "x-square", l.youtube = "youtube", l.zap = "zap", l.zap_off = "zap-off", l.zoom_in = "zoom-in", l.zoom_out = "zoom-out", l.none = "none", l;
}({}), BoIconVariant = /* @__PURE__ */ function(l) {
	return l.default = "default", l.primary = "primary", l.secondary = "secondary", l.success = "success", l.warning = "warning", l.danger = "danger", l.light = "light", l.dark = "dark", l.current = "current", l.inherit = "inherit", l;
}({});
const svgPromiseRecord = {
	"/src/assets/icons/activity.svg": () => import("./activity-zDShJesz.js").then((l) => l.default),
	"/src/assets/icons/airplay.svg": () => import("./airplay-CMeWNnWL.js").then((l) => l.default),
	"/src/assets/icons/alert-circle.svg": () => import("./alert-circle-jHQjPRoc.js").then((l) => l.default),
	"/src/assets/icons/alert-octagon.svg": () => import("./alert-octagon-lM-dGbmA.js").then((l) => l.default),
	"/src/assets/icons/alert-triangle.svg": () => import("./alert-triangle-C8P6JR_D.js").then((l) => l.default),
	"/src/assets/icons/align-center.svg": () => import("./align-center-CmkVOFiQ.js").then((l) => l.default),
	"/src/assets/icons/align-justify.svg": () => import("./align-justify-D6Do5puF.js").then((l) => l.default),
	"/src/assets/icons/align-left.svg": () => import("./align-left-DozOX0Jw.js").then((l) => l.default),
	"/src/assets/icons/align-right.svg": () => import("./align-right-C7uJysCn.js").then((l) => l.default),
	"/src/assets/icons/anchor.svg": () => import("./anchor-CM4TffJI.js").then((l) => l.default),
	"/src/assets/icons/aperture.svg": () => import("./aperture-DPwkZzTl.js").then((l) => l.default),
	"/src/assets/icons/archive.svg": () => import("./archive-BqseOiFx.js").then((l) => l.default),
	"/src/assets/icons/arrow-down-circle.svg": () => import("./arrow-down-circle-49KV3j_S.js").then((l) => l.default),
	"/src/assets/icons/arrow-down-left.svg": () => import("./arrow-down-left-2nlE4saX.js").then((l) => l.default),
	"/src/assets/icons/arrow-down-right.svg": () => import("./arrow-down-right-CVYDcBXs.js").then((l) => l.default),
	"/src/assets/icons/arrow-down.svg": () => import("./arrow-down-BFgDEN6U.js").then((l) => l.default),
	"/src/assets/icons/arrow-left-circle.svg": () => import("./arrow-left-circle-UHhwETkO.js").then((l) => l.default),
	"/src/assets/icons/arrow-left.svg": () => import("./arrow-left-DmcmH4Du.js").then((l) => l.default),
	"/src/assets/icons/arrow-right-circle.svg": () => import("./arrow-right-circle-EjiNRdPb.js").then((l) => l.default),
	"/src/assets/icons/arrow-right.svg": () => import("./arrow-right-DYAUgLj2.js").then((l) => l.default),
	"/src/assets/icons/arrow-up-circle.svg": () => import("./arrow-up-circle-CjDPIJkR.js").then((l) => l.default),
	"/src/assets/icons/arrow-up-left.svg": () => import("./arrow-up-left-BGhSK73b.js").then((l) => l.default),
	"/src/assets/icons/arrow-up-right.svg": () => import("./arrow-up-right-civtnLec.js").then((l) => l.default),
	"/src/assets/icons/arrow-up.svg": () => import("./arrow-up-DfUv5LMG.js").then((l) => l.default),
	"/src/assets/icons/at-sign.svg": () => import("./at-sign-B7YcIrdd.js").then((l) => l.default),
	"/src/assets/icons/award.svg": () => import("./award-CInmbGJQ.js").then((l) => l.default),
	"/src/assets/icons/bar-chart-2.svg": () => import("./bar-chart-2-C8lxm5y1.js").then((l) => l.default),
	"/src/assets/icons/bar-chart.svg": () => import("./bar-chart-BKxp_oWM.js").then((l) => l.default),
	"/src/assets/icons/battery-charging.svg": () => import("./battery-charging-BNYOi2SJ.js").then((l) => l.default),
	"/src/assets/icons/battery.svg": () => import("./battery-BnrRyoXc.js").then((l) => l.default),
	"/src/assets/icons/bell-off.svg": () => import("./bell-off-CDyIXsul.js").then((l) => l.default),
	"/src/assets/icons/bell.svg": () => import("./bell-D8pjh8Ls.js").then((l) => l.default),
	"/src/assets/icons/bluetooth.svg": () => import("./bluetooth-CSgZC4wS.js").then((l) => l.default),
	"/src/assets/icons/bold.svg": () => import("./bold-DvWGclZD.js").then((l) => l.default),
	"/src/assets/icons/book-open.svg": () => import("./book-open-CUaRsEWL.js").then((l) => l.default),
	"/src/assets/icons/book.svg": () => import("./book-BcYR3bD-.js").then((l) => l.default),
	"/src/assets/icons/bookmark.svg": () => import("./bookmark-BIkBHsWr.js").then((l) => l.default),
	"/src/assets/icons/box.svg": () => import("./box-EjHWiyvS.js").then((l) => l.default),
	"/src/assets/icons/briefcase.svg": () => import("./briefcase-DNv_DZr4.js").then((l) => l.default),
	"/src/assets/icons/calendar.svg": () => import("./calendar-BhryoB4s.js").then((l) => l.default),
	"/src/assets/icons/camera-off.svg": () => import("./camera-off-DNgSNYAA.js").then((l) => l.default),
	"/src/assets/icons/camera.svg": () => import("./camera-DWpTbAFU.js").then((l) => l.default),
	"/src/assets/icons/cast.svg": () => import("./cast-BqsiuJSB.js").then((l) => l.default),
	"/src/assets/icons/check-circle.svg": () => import("./check-circle-CWeiUS0m.js").then((l) => l.default),
	"/src/assets/icons/check-square.svg": () => import("./check-square-Uut77Q-y.js").then((l) => l.default),
	"/src/assets/icons/check.svg": () => import("./check-dtmlR1A-.js").then((l) => l.default),
	"/src/assets/icons/chevron-down.svg": () => import("./chevron-down-mCX0BQgU.js").then((l) => l.default),
	"/src/assets/icons/chevron-left.svg": () => import("./chevron-left-9nTm2dtx.js").then((l) => l.default),
	"/src/assets/icons/chevron-right.svg": () => import("./chevron-right-DtnqPkMK.js").then((l) => l.default),
	"/src/assets/icons/chevron-up.svg": () => import("./chevron-up-D6Gl11pu.js").then((l) => l.default),
	"/src/assets/icons/chevrons-down.svg": () => import("./chevrons-down-DTQERVEr.js").then((l) => l.default),
	"/src/assets/icons/chevrons-left.svg": () => import("./chevrons-left-JlWTKuvE.js").then((l) => l.default),
	"/src/assets/icons/chevrons-right.svg": () => import("./chevrons-right-D2gCTiq5.js").then((l) => l.default),
	"/src/assets/icons/chevrons-up.svg": () => import("./chevrons-up-D8oi7wTU.js").then((l) => l.default),
	"/src/assets/icons/chrome.svg": () => import("./chrome-DKGR36Dz.js").then((l) => l.default),
	"/src/assets/icons/circle.svg": () => import("./circle-BTrvn7iL.js").then((l) => l.default),
	"/src/assets/icons/clipboard.svg": () => import("./clipboard-WKQepOl0.js").then((l) => l.default),
	"/src/assets/icons/clock.svg": () => import("./clock-BxPBoN3s.js").then((l) => l.default),
	"/src/assets/icons/cloud-drizzle.svg": () => import("./cloud-drizzle-GPJcKsGJ.js").then((l) => l.default),
	"/src/assets/icons/cloud-lightning.svg": () => import("./cloud-lightning-mkrGfQ9z.js").then((l) => l.default),
	"/src/assets/icons/cloud-off.svg": () => import("./cloud-off-CgqzVx5h.js").then((l) => l.default),
	"/src/assets/icons/cloud-rain.svg": () => import("./cloud-rain-BH2paM4O.js").then((l) => l.default),
	"/src/assets/icons/cloud-snow.svg": () => import("./cloud-snow-C_diX4wS.js").then((l) => l.default),
	"/src/assets/icons/cloud.svg": () => import("./cloud-CYT2or3H.js").then((l) => l.default),
	"/src/assets/icons/code.svg": () => import("./code-D1vKVm8q.js").then((l) => l.default),
	"/src/assets/icons/codepen.svg": () => import("./codepen-DwUFvvKh.js").then((l) => l.default),
	"/src/assets/icons/codesandbox.svg": () => import("./codesandbox-hdvpLeFS.js").then((l) => l.default),
	"/src/assets/icons/coffee.svg": () => import("./coffee-BoPS03Q7.js").then((l) => l.default),
	"/src/assets/icons/columns.svg": () => import("./columns-CjpD2Tu7.js").then((l) => l.default),
	"/src/assets/icons/command.svg": () => import("./command-Dpv81uin.js").then((l) => l.default),
	"/src/assets/icons/compass.svg": () => import("./compass-BSUjW_u2.js").then((l) => l.default),
	"/src/assets/icons/copy.svg": () => import("./copy-CJqFmAwN.js").then((l) => l.default),
	"/src/assets/icons/corner-down-left.svg": () => import("./corner-down-left-Do1L4j5y.js").then((l) => l.default),
	"/src/assets/icons/corner-down-right.svg": () => import("./corner-down-right-DdDxJUaY.js").then((l) => l.default),
	"/src/assets/icons/corner-left-down.svg": () => import("./corner-left-down-CNh6rGD8.js").then((l) => l.default),
	"/src/assets/icons/corner-left-up.svg": () => import("./corner-left-up-BLAUHsZo.js").then((l) => l.default),
	"/src/assets/icons/corner-right-down.svg": () => import("./corner-right-down-CCSiX4O5.js").then((l) => l.default),
	"/src/assets/icons/corner-right-up.svg": () => import("./corner-right-up-BMm32Bid.js").then((l) => l.default),
	"/src/assets/icons/corner-up-left.svg": () => import("./corner-up-left-DKFgEg_G.js").then((l) => l.default),
	"/src/assets/icons/corner-up-right.svg": () => import("./corner-up-right-pwuuYz7h.js").then((l) => l.default),
	"/src/assets/icons/cpu.svg": () => import("./cpu-24UGKpqi.js").then((l) => l.default),
	"/src/assets/icons/credit-card.svg": () => import("./credit-card-CZv38aVq.js").then((l) => l.default),
	"/src/assets/icons/crop.svg": () => import("./crop-DxNrIPTP.js").then((l) => l.default),
	"/src/assets/icons/crosshair.svg": () => import("./crosshair-oEFdWzD4.js").then((l) => l.default),
	"/src/assets/icons/database.svg": () => import("./database-B9A6wkVm.js").then((l) => l.default),
	"/src/assets/icons/delete.svg": () => import("./delete-CVWs46wz.js").then((l) => l.default),
	"/src/assets/icons/disc.svg": () => import("./disc-DDJjyfDn.js").then((l) => l.default),
	"/src/assets/icons/divide-circle.svg": () => import("./divide-circle-CPSifIAY.js").then((l) => l.default),
	"/src/assets/icons/divide-square.svg": () => import("./divide-square-Cx0N1pcY.js").then((l) => l.default),
	"/src/assets/icons/divide.svg": () => import("./divide-Dq2Txzdb.js").then((l) => l.default),
	"/src/assets/icons/dollar-sign.svg": () => import("./dollar-sign-CVaQdT9t.js").then((l) => l.default),
	"/src/assets/icons/download-cloud.svg": () => import("./download-cloud-COEPcQzr.js").then((l) => l.default),
	"/src/assets/icons/download.svg": () => import("./download-BBmCcDsy.js").then((l) => l.default),
	"/src/assets/icons/dribbble.svg": () => import("./dribbble-Z-5kM9TH.js").then((l) => l.default),
	"/src/assets/icons/droplet.svg": () => import("./droplet-piNZY6z5.js").then((l) => l.default),
	"/src/assets/icons/edit-2.svg": () => import("./edit-2-dyELHUBh.js").then((l) => l.default),
	"/src/assets/icons/edit-3.svg": () => import("./edit-3-DMeVzZOe.js").then((l) => l.default),
	"/src/assets/icons/edit.svg": () => import("./edit-BRybjKch.js").then((l) => l.default),
	"/src/assets/icons/external-link.svg": () => import("./external-link-DxRN6bKQ.js").then((l) => l.default),
	"/src/assets/icons/eye-off.svg": () => import("./eye-off-DvAWs_fa.js").then((l) => l.default),
	"/src/assets/icons/eye.svg": () => import("./eye-BhN_OvGd.js").then((l) => l.default),
	"/src/assets/icons/facebook.svg": () => import("./facebook-D5alNWDf.js").then((l) => l.default),
	"/src/assets/icons/fast-forward.svg": () => import("./fast-forward-Bp-09zMi.js").then((l) => l.default),
	"/src/assets/icons/feather.svg": () => import("./feather-m6NO322n.js").then((l) => l.default),
	"/src/assets/icons/figma.svg": () => import("./figma-Cz5YTEt_.js").then((l) => l.default),
	"/src/assets/icons/file-minus.svg": () => import("./file-minus-DyIwJobA.js").then((l) => l.default),
	"/src/assets/icons/file-plus.svg": () => import("./file-plus-n0DmUjxy.js").then((l) => l.default),
	"/src/assets/icons/file-text.svg": () => import("./file-text-DR8-V-D5.js").then((l) => l.default),
	"/src/assets/icons/file.svg": () => import("./file-DO-qeaop.js").then((l) => l.default),
	"/src/assets/icons/film.svg": () => import("./film-D2F2EYgK.js").then((l) => l.default),
	"/src/assets/icons/filter.svg": () => import("./filter-CaKEiRqM.js").then((l) => l.default),
	"/src/assets/icons/flag.svg": () => import("./flag-CATZ5gCd.js").then((l) => l.default),
	"/src/assets/icons/folder-minus.svg": () => import("./folder-minus-MOPs9HBJ.js").then((l) => l.default),
	"/src/assets/icons/folder-plus.svg": () => import("./folder-plus-BUmQ-EzE.js").then((l) => l.default),
	"/src/assets/icons/folder.svg": () => import("./folder-CnMtmQym.js").then((l) => l.default),
	"/src/assets/icons/framer.svg": () => import("./framer-BPeQP-w5.js").then((l) => l.default),
	"/src/assets/icons/frown.svg": () => import("./frown-CZMkr1QE.js").then((l) => l.default),
	"/src/assets/icons/gift.svg": () => import("./gift-V3yTKDc7.js").then((l) => l.default),
	"/src/assets/icons/git-branch.svg": () => import("./git-branch-DlaGIzLz.js").then((l) => l.default),
	"/src/assets/icons/git-commit.svg": () => import("./git-commit-C55C5voR.js").then((l) => l.default),
	"/src/assets/icons/git-merge.svg": () => import("./git-merge-CiS1Vnie.js").then((l) => l.default),
	"/src/assets/icons/git-pull-request.svg": () => import("./git-pull-request-BQai78hO.js").then((l) => l.default),
	"/src/assets/icons/github.svg": () => import("./github-C_AeuEBr.js").then((l) => l.default),
	"/src/assets/icons/gitlab.svg": () => import("./gitlab-KR5l6xPf.js").then((l) => l.default),
	"/src/assets/icons/globe.svg": () => import("./globe-DmQIo422.js").then((l) => l.default),
	"/src/assets/icons/grid.svg": () => import("./grid-B0BbDgyl.js").then((l) => l.default),
	"/src/assets/icons/hard-drive.svg": () => import("./hard-drive-s527Vba4.js").then((l) => l.default),
	"/src/assets/icons/hash.svg": () => import("./hash-6BThovLC.js").then((l) => l.default),
	"/src/assets/icons/headphones.svg": () => import("./headphones-CNBMM9j0.js").then((l) => l.default),
	"/src/assets/icons/heart.svg": () => import("./heart-ByakxaVf.js").then((l) => l.default),
	"/src/assets/icons/help-circle.svg": () => import("./help-circle-ke6WMxF-.js").then((l) => l.default),
	"/src/assets/icons/hexagon.svg": () => import("./hexagon-O_i0rUm8.js").then((l) => l.default),
	"/src/assets/icons/home.svg": () => import("./home-DxdRYiPq.js").then((l) => l.default),
	"/src/assets/icons/image.svg": () => import("./image-66a52bw6.js").then((l) => l.default),
	"/src/assets/icons/inbox.svg": () => import("./inbox-Dp3e1hoS.js").then((l) => l.default),
	"/src/assets/icons/info.svg": () => import("./info-BF5KcS7L.js").then((l) => l.default),
	"/src/assets/icons/instagram.svg": () => import("./instagram-DaEbxdlU.js").then((l) => l.default),
	"/src/assets/icons/italic.svg": () => import("./italic-CS7a2yjF.js").then((l) => l.default),
	"/src/assets/icons/key.svg": () => import("./key-5e-h4nsO.js").then((l) => l.default),
	"/src/assets/icons/layers.svg": () => import("./layers-DYVMeM2J.js").then((l) => l.default),
	"/src/assets/icons/layout.svg": () => import("./layout-CAsIscmX.js").then((l) => l.default),
	"/src/assets/icons/life-buoy.svg": () => import("./life-buoy-C66aJTu5.js").then((l) => l.default),
	"/src/assets/icons/link-2.svg": () => import("./link-2-ukTX6B2H.js").then((l) => l.default),
	"/src/assets/icons/link.svg": () => import("./link-Cg-_Vamm.js").then((l) => l.default),
	"/src/assets/icons/linkedin.svg": () => import("./linkedin-Cnrz7-iV.js").then((l) => l.default),
	"/src/assets/icons/list.svg": () => import("./list-DUoVQwSv.js").then((l) => l.default),
	"/src/assets/icons/loader.svg": () => import("./loader-CRGVyaXR.js").then((l) => l.default),
	"/src/assets/icons/lock.svg": () => import("./lock-C44g8o1Y.js").then((l) => l.default),
	"/src/assets/icons/log-in.svg": () => import("./log-in-CKp4AFHW.js").then((l) => l.default),
	"/src/assets/icons/log-out.svg": () => import("./log-out-EdnhQtJO.js").then((l) => l.default),
	"/src/assets/icons/mail.svg": () => import("./mail-Cn01TMc4.js").then((l) => l.default),
	"/src/assets/icons/map-pin.svg": () => import("./map-pin-CYUyGgKO.js").then((l) => l.default),
	"/src/assets/icons/map.svg": () => import("./map-B8yyqa7C.js").then((l) => l.default),
	"/src/assets/icons/maximize-2.svg": () => import("./maximize-2-CTUrmVEP.js").then((l) => l.default),
	"/src/assets/icons/maximize.svg": () => import("./maximize-IwbzMqGv.js").then((l) => l.default),
	"/src/assets/icons/meh.svg": () => import("./meh-WaawxME9.js").then((l) => l.default),
	"/src/assets/icons/menu.svg": () => import("./menu-C3N0Pd8N.js").then((l) => l.default),
	"/src/assets/icons/message-circle.svg": () => import("./message-circle-BHgBpqWw.js").then((l) => l.default),
	"/src/assets/icons/message-square.svg": () => import("./message-square-ePNRXWzo.js").then((l) => l.default),
	"/src/assets/icons/mic-off.svg": () => import("./mic-off-iCUZpqE0.js").then((l) => l.default),
	"/src/assets/icons/mic.svg": () => import("./mic-CDu86aVz.js").then((l) => l.default),
	"/src/assets/icons/minimize-2.svg": () => import("./minimize-2-DfK6sJzL.js").then((l) => l.default),
	"/src/assets/icons/minimize.svg": () => import("./minimize-Ce0n3TkG.js").then((l) => l.default),
	"/src/assets/icons/minus-circle.svg": () => import("./minus-circle-B5YuXiqZ.js").then((l) => l.default),
	"/src/assets/icons/minus-square.svg": () => import("./minus-square-CoMG7xsX.js").then((l) => l.default),
	"/src/assets/icons/minus.svg": () => import("./minus-DDuIGxW3.js").then((l) => l.default),
	"/src/assets/icons/monitor.svg": () => import("./monitor-CnK0zMsp.js").then((l) => l.default),
	"/src/assets/icons/moon.svg": () => import("./moon-DRd0Q0CG.js").then((l) => l.default),
	"/src/assets/icons/more-horizontal.svg": () => import("./more-horizontal-D48Ga8du.js").then((l) => l.default),
	"/src/assets/icons/more-vertical.svg": () => import("./more-vertical-DpaoksfV.js").then((l) => l.default),
	"/src/assets/icons/mouse-pointer.svg": () => import("./mouse-pointer-CXUMskX8.js").then((l) => l.default),
	"/src/assets/icons/move.svg": () => import("./move-CNc7d0P2.js").then((l) => l.default),
	"/src/assets/icons/music.svg": () => import("./music-BvilN_Pz.js").then((l) => l.default),
	"/src/assets/icons/navigation-2.svg": () => import("./navigation-2-Ccl9B8Rs.js").then((l) => l.default),
	"/src/assets/icons/navigation.svg": () => import("./navigation-C-CmSwsz.js").then((l) => l.default),
	"/src/assets/icons/none.svg": () => import("./none-CJCflrR2.js").then((l) => l.default),
	"/src/assets/icons/octagon.svg": () => import("./octagon-HCybLkDt.js").then((l) => l.default),
	"/src/assets/icons/package.svg": () => import("./package-DVk1HpIQ.js").then((l) => l.default),
	"/src/assets/icons/paperclip.svg": () => import("./paperclip-CaKAebug.js").then((l) => l.default),
	"/src/assets/icons/pause-circle.svg": () => import("./pause-circle-oAM34_sY.js").then((l) => l.default),
	"/src/assets/icons/pause.svg": () => import("./pause-Duho61qv.js").then((l) => l.default),
	"/src/assets/icons/pen-tool.svg": () => import("./pen-tool-D5UkSogx.js").then((l) => l.default),
	"/src/assets/icons/percent.svg": () => import("./percent-D7aIUXJD.js").then((l) => l.default),
	"/src/assets/icons/phone-call.svg": () => import("./phone-call-Di5piSaa.js").then((l) => l.default),
	"/src/assets/icons/phone-forwarded.svg": () => import("./phone-forwarded-CT945moy.js").then((l) => l.default),
	"/src/assets/icons/phone-incoming.svg": () => import("./phone-incoming-CHsMAjVT.js").then((l) => l.default),
	"/src/assets/icons/phone-missed.svg": () => import("./phone-missed-Bgwyd8uH.js").then((l) => l.default),
	"/src/assets/icons/phone-off.svg": () => import("./phone-off-Dp9O74w9.js").then((l) => l.default),
	"/src/assets/icons/phone-outgoing.svg": () => import("./phone-outgoing-CfDgXWod.js").then((l) => l.default),
	"/src/assets/icons/phone.svg": () => import("./phone-D3GSvnaj.js").then((l) => l.default),
	"/src/assets/icons/pie-chart.svg": () => import("./pie-chart-Cuam1FZZ.js").then((l) => l.default),
	"/src/assets/icons/play-circle.svg": () => import("./play-circle-BZTS0aHn.js").then((l) => l.default),
	"/src/assets/icons/play.svg": () => import("./play-D9lfG_w9.js").then((l) => l.default),
	"/src/assets/icons/plus-circle.svg": () => import("./plus-circle-ZGtwMYHj.js").then((l) => l.default),
	"/src/assets/icons/plus-square.svg": () => import("./plus-square-sH8lJ0-Y.js").then((l) => l.default),
	"/src/assets/icons/plus.svg": () => import("./plus-BesMD-ZM.js").then((l) => l.default),
	"/src/assets/icons/pocket.svg": () => import("./pocket-Bbk9icmz.js").then((l) => l.default),
	"/src/assets/icons/power.svg": () => import("./power-DB3sI3bc.js").then((l) => l.default),
	"/src/assets/icons/printer.svg": () => import("./printer-D7RYUrvi.js").then((l) => l.default),
	"/src/assets/icons/radio.svg": () => import("./radio-BKZ7_dtv.js").then((l) => l.default),
	"/src/assets/icons/refresh-ccw.svg": () => import("./refresh-ccw-DTxMcXeI.js").then((l) => l.default),
	"/src/assets/icons/refresh-cw.svg": () => import("./refresh-cw-CIBpYEgl.js").then((l) => l.default),
	"/src/assets/icons/repeat.svg": () => import("./repeat-BpEa3k_k.js").then((l) => l.default),
	"/src/assets/icons/rewind.svg": () => import("./rewind-BrFWPscx.js").then((l) => l.default),
	"/src/assets/icons/rotate-ccw.svg": () => import("./rotate-ccw-DB1sE88d.js").then((l) => l.default),
	"/src/assets/icons/rotate-cw.svg": () => import("./rotate-cw-CnXT56Tn.js").then((l) => l.default),
	"/src/assets/icons/rss.svg": () => import("./rss-DpP6RHT-.js").then((l) => l.default),
	"/src/assets/icons/save.svg": () => import("./save-DBqntdT6.js").then((l) => l.default),
	"/src/assets/icons/scissors.svg": () => import("./scissors-cug3-dxJ.js").then((l) => l.default),
	"/src/assets/icons/search.svg": () => import("./search-BHOYHbp3.js").then((l) => l.default),
	"/src/assets/icons/send.svg": () => import("./send-BkR4dyI2.js").then((l) => l.default),
	"/src/assets/icons/server.svg": () => import("./server-ClmaqCDy.js").then((l) => l.default),
	"/src/assets/icons/settings.svg": () => import("./settings-BDpspgt4.js").then((l) => l.default),
	"/src/assets/icons/share-2.svg": () => import("./share-2-BlqBngGp.js").then((l) => l.default),
	"/src/assets/icons/share.svg": () => import("./share-DWK49sUN.js").then((l) => l.default),
	"/src/assets/icons/shield-off.svg": () => import("./shield-off-uNGO43vK.js").then((l) => l.default),
	"/src/assets/icons/shield.svg": () => import("./shield-BsTEVhh5.js").then((l) => l.default),
	"/src/assets/icons/shopping-bag.svg": () => import("./shopping-bag-so9ObnRr.js").then((l) => l.default),
	"/src/assets/icons/shopping-cart.svg": () => import("./shopping-cart-COtwLlvY.js").then((l) => l.default),
	"/src/assets/icons/shuffle.svg": () => import("./shuffle-jkz2_AH1.js").then((l) => l.default),
	"/src/assets/icons/sidebar.svg": () => import("./sidebar-CiI4LAqi.js").then((l) => l.default),
	"/src/assets/icons/skip-back.svg": () => import("./skip-back-LJOcSZ17.js").then((l) => l.default),
	"/src/assets/icons/skip-forward.svg": () => import("./skip-forward-B21Q0Ypu.js").then((l) => l.default),
	"/src/assets/icons/slack.svg": () => import("./slack-BbqU8CdQ.js").then((l) => l.default),
	"/src/assets/icons/slash.svg": () => import("./slash-CMV2KJVV.js").then((l) => l.default),
	"/src/assets/icons/sliders.svg": () => import("./sliders-BJttDOtr.js").then((l) => l.default),
	"/src/assets/icons/smartphone.svg": () => import("./smartphone-kXmQQz2z.js").then((l) => l.default),
	"/src/assets/icons/smile.svg": () => import("./smile-DaHm6Arq.js").then((l) => l.default),
	"/src/assets/icons/speaker.svg": () => import("./speaker-ZjSVng_P.js").then((l) => l.default),
	"/src/assets/icons/square.svg": () => import("./square-DNCq7Qio.js").then((l) => l.default),
	"/src/assets/icons/star.svg": () => import("./star-CcUyETuK.js").then((l) => l.default),
	"/src/assets/icons/stop-circle.svg": () => import("./stop-circle-CFSzBCGQ.js").then((l) => l.default),
	"/src/assets/icons/sun.svg": () => import("./sun-CgrPB9-Q.js").then((l) => l.default),
	"/src/assets/icons/sunrise.svg": () => import("./sunrise-BfQuyumE.js").then((l) => l.default),
	"/src/assets/icons/sunset.svg": () => import("./sunset-DFFkW8Za.js").then((l) => l.default),
	"/src/assets/icons/table.svg": () => import("./table-CtsiNE_j.js").then((l) => l.default),
	"/src/assets/icons/tablet.svg": () => import("./tablet-BmdObAdn.js").then((l) => l.default),
	"/src/assets/icons/tag.svg": () => import("./tag-CEayEK-l.js").then((l) => l.default),
	"/src/assets/icons/target.svg": () => import("./target-BY_2Ju9Z.js").then((l) => l.default),
	"/src/assets/icons/terminal.svg": () => import("./terminal-Chzq53vP.js").then((l) => l.default),
	"/src/assets/icons/thermometer.svg": () => import("./thermometer-BvwyAeVC.js").then((l) => l.default),
	"/src/assets/icons/thumbs-down.svg": () => import("./thumbs-down-BDe_3rBT.js").then((l) => l.default),
	"/src/assets/icons/thumbs-up.svg": () => import("./thumbs-up-CrGSaman.js").then((l) => l.default),
	"/src/assets/icons/toggle-left.svg": () => import("./toggle-left-DFJhg57S.js").then((l) => l.default),
	"/src/assets/icons/toggle-right.svg": () => import("./toggle-right-addfKhtS.js").then((l) => l.default),
	"/src/assets/icons/tool.svg": () => import("./tool-D4kRVTjg.js").then((l) => l.default),
	"/src/assets/icons/trash-2.svg": () => import("./trash-2-JqBjkwbG.js").then((l) => l.default),
	"/src/assets/icons/trash.svg": () => import("./trash-mjkqpsK_.js").then((l) => l.default),
	"/src/assets/icons/trello.svg": () => import("./trello-u9fcWORL.js").then((l) => l.default),
	"/src/assets/icons/trending-down.svg": () => import("./trending-down-CXCWrYiU.js").then((l) => l.default),
	"/src/assets/icons/trending-up.svg": () => import("./trending-up-ClooxDpW.js").then((l) => l.default),
	"/src/assets/icons/triangle.svg": () => import("./triangle-DBx12jn5.js").then((l) => l.default),
	"/src/assets/icons/truck.svg": () => import("./truck-B0VDrYUL.js").then((l) => l.default),
	"/src/assets/icons/tv.svg": () => import("./tv-CJa7CcMS.js").then((l) => l.default),
	"/src/assets/icons/twitch.svg": () => import("./twitch-BrqnfG2S.js").then((l) => l.default),
	"/src/assets/icons/twitter.svg": () => import("./twitter-Bc2ISC3l.js").then((l) => l.default),
	"/src/assets/icons/type.svg": () => import("./type-MvK8rAhl.js").then((l) => l.default),
	"/src/assets/icons/umbrella.svg": () => import("./umbrella-ZfcByVme.js").then((l) => l.default),
	"/src/assets/icons/underline.svg": () => import("./underline-CFIH83Cy.js").then((l) => l.default),
	"/src/assets/icons/unlock.svg": () => import("./unlock-Bdo9LgMt.js").then((l) => l.default),
	"/src/assets/icons/upload-cloud.svg": () => import("./upload-cloud-tYRN-2NK.js").then((l) => l.default),
	"/src/assets/icons/upload.svg": () => import("./upload-DX4Rtnnn.js").then((l) => l.default),
	"/src/assets/icons/user-check.svg": () => import("./user-check-CMVclSMQ.js").then((l) => l.default),
	"/src/assets/icons/user-minus.svg": () => import("./user-minus-ClAGm-Bw.js").then((l) => l.default),
	"/src/assets/icons/user-plus.svg": () => import("./user-plus-B2kyMZkH.js").then((l) => l.default),
	"/src/assets/icons/user-x.svg": () => import("./user-x-ConxxY2C.js").then((l) => l.default),
	"/src/assets/icons/user.svg": () => import("./user-Dwv6Hiuq.js").then((l) => l.default),
	"/src/assets/icons/users.svg": () => import("./users-By3ZXyK-.js").then((l) => l.default),
	"/src/assets/icons/video-off.svg": () => import("./video-off-B6HNvcjD.js").then((l) => l.default),
	"/src/assets/icons/video.svg": () => import("./video-Ds7K9KS6.js").then((l) => l.default),
	"/src/assets/icons/voicemail.svg": () => import("./voicemail-J0U-Nuua.js").then((l) => l.default),
	"/src/assets/icons/volume-1.svg": () => import("./volume-1-QRqAooey.js").then((l) => l.default),
	"/src/assets/icons/volume-2.svg": () => import("./volume-2-Cn3sxzFi.js").then((l) => l.default),
	"/src/assets/icons/volume-x.svg": () => import("./volume-x-Cgj_s7eE.js").then((l) => l.default),
	"/src/assets/icons/volume.svg": () => import("./volume-BALpo4GW.js").then((l) => l.default),
	"/src/assets/icons/watch.svg": () => import("./watch-C-_RUdyG.js").then((l) => l.default),
	"/src/assets/icons/wifi-off.svg": () => import("./wifi-off-DeE0Wo7-.js").then((l) => l.default),
	"/src/assets/icons/wifi.svg": () => import("./wifi-BybufB4M.js").then((l) => l.default),
	"/src/assets/icons/wind.svg": () => import("./wind-8tGCc1Oi.js").then((l) => l.default),
	"/src/assets/icons/x-circle.svg": () => import("./x-circle-BUH7TL2Y.js").then((l) => l.default),
	"/src/assets/icons/x-octagon.svg": () => import("./x-octagon-CqRUSBM3.js").then((l) => l.default),
	"/src/assets/icons/x-square.svg": () => import("./x-square-C_06jNeh.js").then((l) => l.default),
	"/src/assets/icons/x.svg": () => import("./x-CHP1hq9H.js").then((l) => l.default),
	"/src/assets/icons/youtube.svg": () => import("./youtube-CRnySjo_.js").then((l) => l.default),
	"/src/assets/icons/zap-off.svg": () => import("./zap-off-yD63yzIT.js").then((l) => l.default),
	"/src/assets/icons/zap.svg": () => import("./zap-rL_f8qFh.js").then((l) => l.default),
	"/src/assets/icons/zoom-in.svg": () => import("./zoom-in-DQ_NFN-j.js").then((l) => l.default),
	"/src/assets/icons/zoom-out.svg": () => import("./zoom-out-0oHA4K_5.js").then((l) => l.default)
};
var _hoisted_1$8 = [
	"innerHTML",
	"id",
	"data-testid",
	"role",
	"aria-label",
	"aria-hidden",
	"title"
], bo_icon_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-icon",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-icon") },
		icon: {},
		size: { default: 24 },
		variant: { default: () => BoIconVariant.default },
		customColor: {},
		customCssClass: {},
		cursor: {},
		title: {},
		role: {},
		ariaLabel: {},
		decorative: {
			type: Boolean,
			default: !0
		}
	},
	setup(l) {
		let R = l, B = ref(""), V = Object.keys(svgPromiseRecord).reduce((l, R) => {
			let z = R.split("/"), B = z[z.length - 1]?.split(".")?.[0];
			return !B || !svgPromiseRecord[R] || (l[B] = svgPromiseRecord[R]), l;
		}, {}), H = computed(() => {
			if (!R.decorative) return R.role ?? "img";
		}), U = computed(() => R.decorative ? !0 : void 0), W = computed(() => {
			if (!R.decorative) return R.ariaLabel ? R.ariaLabel : R.title ?? R.icon;
		}), G = computed(() => R.cursor ? { cursor: R.cursor } : { cursor: "default" }), K = computed(() => R.customColor ? { color: ColorService.instance.getValidCssColor(R.customColor) } : {}), q = computed(() => ({
			width: `${R.size}px`,
			height: `${R.size}px`
		})), J = computed(() => ({
			...q.value,
			...K.value,
			...G.value
		})), Y = computed(() => ["bo-icon", `bo-icon--variant-${R.variant}`].filter(Boolean).join(" "));
		async function X(l) {
			try {
				let R = await V[l]?.();
				R && (B.value = R);
			} catch (R) {
				console.error(`Could not find icon of name ${l}\n${R}`);
			}
		}
		return watchEffect(() => {
			X(R.icon);
		}), (R, z) => B.value ? (openBlock(), createElementBlock("i", {
			key: 0,
			innerHTML: B.value,
			id: l.id,
			"data-testid": l.dataTestId,
			role: H.value,
			style: normalizeStyle(J.value),
			class: normalizeClass([Y.value, l.customCssClass]),
			"aria-label": W.value,
			"aria-hidden": U.value,
			title: l.title
		}, null, 14, _hoisted_1$8)) : createCommentVNode("", !0);
	}
}), [["__scopeId", "data-v-5e9000c6"]]);
let BoFontWeight = /* @__PURE__ */ function(l) {
	return l.thin = "thin", l.extra_light = "extra-light", l.light = "light", l.regular = "regular", l.medium = "medium", l.semibold = "semibold", l.bold = "bold", l.extra_bold = "extra-bold", l.black = "black", l;
}({}), BoFontSize = /* @__PURE__ */ function(l) {
	return l.xs = "xs", l.sm = "sm", l.default = "default", l.lg = "lg", l.xl = "xl", l["2xl"] = "2xl", l["3xl"] = "3xl", l["4xl"] = "4xl", l["5xl"] = "5xl", l["6xl"] = "6xl", l["7xl"] = "7xl", l["8xl"] = "8xl", l["9xl"] = "9xl", l;
}({}), BoFontFamily = /* @__PURE__ */ function(l) {
	return l.sans = "sans", l.mono = "mono", l.serif = "serif", l.inherit = "inherit", l;
}({}), BoTextWhiteSpace = /* @__PURE__ */ function(l) {
	return l.normal = "normal", l.nowrap = "nowrap", l.pre = "pre", l.pre_line = "pre-line", l.pre_wrap = "pre-wrap", l.break_spaces = "break-spaces", l;
}({}), BoTextVariant = /* @__PURE__ */ function(l) {
	return l.default = "default", l.primary = "primary", l.secondary = "secondary", l.disabled = "disabled", l.inherit = "inherit", l.current = "currentColor", l.success = "success", l.warning = "warning", l.danger = "danger", l.light = "light", l.dark = "dark", l;
}({}), BoTextAlign = /* @__PURE__ */ function(l) {
	return l.left = "left", l.center = "center", l.right = "right", l.justify = "justify", l;
}({}), BoTextTransform = /* @__PURE__ */ function(l) {
	return l.none = "none", l.capitalize = "capitalize", l.uppercase = "uppercase", l.lowercase = "lowercase", l;
}({});
var _hoisted_1$7 = [
	"id",
	"role",
	"lang",
	"aria-live",
	"aria-label",
	"data-testid",
	"aria-labelledby",
	"aria-describedby"
], bo_text_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-text",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-text") },
		value: {},
		fontSize: { default: () => BoFontSize.default },
		fontWeight: { default: () => BoFontWeight.regular },
		fontFamily: { default: () => BoFontFamily.sans },
		whiteSpace: { default: () => BoTextWhiteSpace.normal },
		variant: { default: () => BoTextVariant.default },
		customColor: {},
		clickable: { type: Boolean },
		textAlign: {},
		textTransform: { default: () => BoTextTransform.none },
		cursor: {},
		maxLines: { default: "none" },
		role: {},
		ariaLabel: {},
		ariaLabelledBy: {},
		ariaDescribedBy: {},
		ariaLive: { default: () => AriaLive.polite },
		lang: { default: "en" }
	},
	setup(l) {
		let R = l, B = computed(() => R.ariaLabel || R.value), V = computed(() => R.role ?? "text"), H = computed(() => {
			switch (R.textTransform) {
				case BoTextTransform.capitalize: return R.value.replace(/\b\w/g, (l) => l.toUpperCase());
				case BoTextTransform.uppercase: return R.value.toUpperCase();
				case BoTextTransform.lowercase: return R.value.toLowerCase();
				case BoTextTransform.none:
				default: return R.value;
			}
		}), U = computed(() => R.customColor ? { color: ColorService.instance.getValidCssColor(R.customColor) } : {}), W = computed(() => R.cursor ? { cursor: R.cursor } : R.clickable ? { cursor: "pointer" } : { cursor: "default" }), G = computed(() => typeof R.maxLines == "number" ? {
			overflow: "hidden",
			display: "-webkit-box",
			textOverflow: "ellipsis",
			WebkitBoxOrient: "vertical",
			WebkitLineClamp: R.maxLines
		} : {}), K = computed(() => ({
			...U.value,
			...G.value,
			...W.value
		})), q = computed(() => ({
			"bo-text": !0,
			[`bo-text--variant-${R.variant}`]: !0,
			[`bo-text--size-${R.fontSize}`]: !0,
			[`bo-text--align-${R.textAlign}`]: !0,
			[`bo-text--weight-${R.fontWeight}`]: !0,
			[`bo-text--whitespace-${R.whiteSpace}`]: !0,
			[`bo-text--font-family-${R.fontFamily}`]: !0,
			[`bo-text--transform-${R.textTransform}`]: !0
		}));
		return (R, z) => (openBlock(), createElementBlock("p", {
			id: l.id,
			role: V.value,
			lang: l.lang,
			style: normalizeStyle(K.value),
			class: normalizeClass(q.value),
			"aria-live": l.ariaLive,
			"aria-label": B.value,
			"data-testid": l.dataTestId,
			"aria-labelledby": l.ariaLabelledBy,
			"aria-describedby": l.ariaDescribedBy
		}, toDisplayString(H.value), 15, _hoisted_1$7));
	}
}), [["__scopeId", "data-v-9f8c23cf"]]), _hoisted_1$6 = [
	"id",
	"role",
	"aria-label",
	"data-testid"
], _hoisted_2$1 = {
	key: 0,
	class: "bo-badge__dot"
}, bo_badge_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-badge",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-badge") },
		size: { default: BoSize.md },
		variant: { default: BoVariant.primary },
		label: {},
		showDot: { type: Boolean },
		prefixIcon: {},
		suffixIcon: {},
		customColor: {},
		badgeStyle: { default: "default" },
		neutral: { type: Boolean },
		responsive: { type: Boolean },
		customCssClass: {},
		role: {},
		ariaLabel: {}
	},
	setup(l) {
		let R = l, B = computed(() => {
			if (R.ariaLabel) return R.ariaLabel;
			if (R.label) return R.label;
		}), H = computed(() => {
			switch (R.size) {
				case BoSize.xs: return BoFontSize.xs;
				case BoSize.sm: return BoFontSize.xs;
				case BoSize.lg: return BoFontSize.sm;
				case BoSize.xl: return BoFontSize.default;
				case BoSize.md:
				default: return BoFontSize.sm;
			}
		}), U = computed(() => {
			switch (R.size) {
				case BoSize.xs: return 12;
				case BoSize.sm: return 12;
				case BoSize.lg: return 14;
				case BoSize.xl: return 16;
				case BoSize.md:
				default: return 14;
			}
		}), W = computed(() => {
			if (R.customColor) {
				let l = ColorService.instance.getValidCssColor(R.customColor);
				return {
					backgroundColor: l,
					borderColor: l
				};
			}
			return {};
		}), G = computed(() => ({ ...W.value })), K = computed(() => [
			"bo-badge",
			R.showDot && "bo-badge--with-dot",
			`bo-badge--size-${R.size}`,
			R.neutral ? "bo-badge--neutral" : `bo-badge--variant-${R.variant}`,
			`bo-badge--style-${R.badgeStyle}`,
			R.responsive && "bo-badge--responsive"
		].filter(Boolean).join(" "));
		return (R, z) => (openBlock(), createElementBlock("span", {
			id: l.id,
			role: l.role,
			class: normalizeClass([K.value, l.customCssClass]),
			style: normalizeStyle(G.value),
			"aria-label": B.value,
			"data-testid": l.dataTestId
		}, [
			l.showDot ? (openBlock(), createElementBlock("span", _hoisted_2$1)) : createCommentVNode("", !0),
			l.prefixIcon ? (openBlock(), createBlock(bo_icon_default, {
				key: 1,
				icon: l.prefixIcon,
				size: U.value
			}, null, 8, ["icon", "size"])) : createCommentVNode("", !0),
			renderSlot(R.$slots, "default", {}, () => [l.label ? (openBlock(), createBlock(bo_text_default, {
				key: 0,
				value: l.label,
				"font-size": H.value,
				"font-weight": unref(BoFontWeight).medium
			}, null, 8, [
				"value",
				"font-size",
				"font-weight"
			])) : createCommentVNode("", !0)], !0),
			l.suffixIcon ? (openBlock(), createBlock(bo_icon_default, {
				key: 2,
				icon: l.suffixIcon,
				size: U.value
			}, null, 8, ["icon", "size"])) : createCommentVNode("", !0)
		], 14, _hoisted_1$6));
	}
}), [["__scopeId", "data-v-54206fcf"]]), _hoisted_1$5 = [
	"id",
	"data-testid",
	"aria-live",
	"aria-label",
	"aria-busy"
], bo_loading_ring_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-loading-ring",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-loader-ring") },
		size: { default: BoSize.md },
		variant: { default: BoVariant.primary },
		loaderText: {},
		textPosition: { default: BoLoaderTextPosition.after },
		customColor: {},
		ariaLive: {},
		ariaLabel: {},
		ariaBusy: { type: Boolean },
		customContainerCssClass: {},
		customRingClass: {}
	},
	setup(l) {
		let R = l, z = computed(() => {
			switch (R.size) {
				case BoSize.xs: return BoFontSize.xs;
				case BoSize.sm: return BoFontSize.sm;
				case BoSize.lg: return BoFontSize.xl;
				case BoSize.xl: return BoFontSize["2xl"];
				case BoSize.md:
				default: return BoFontSize.lg;
			}
		}), B = computed(() => ({
			"bo-loader-ring": !0,
			[`bo-loader-ring--${R.textPosition}`]: !0
		})), H = computed(() => ({
			"bo-loader-ring__spinner": !0,
			[`bo-loader-ring__spinner--${R.size}`]: !0,
			[`bo-loader-ring__spinner--${R.variant}`]: !0
		})), U = computed(() => R.customColor ? { color: R.customColor } : {});
		return (R, V) => (openBlock(), createElementBlock("div", {
			id: l.id,
			"data-testid": l.dataTestId,
			class: normalizeClass([B.value, l.customContainerCssClass]),
			"aria-live": l.ariaLive,
			"aria-label": l.ariaLabel,
			"aria-busy": l.ariaBusy
		}, [createElementVNode("span", {
			class: normalizeClass([H.value, l.customRingClass]),
			style: normalizeStyle(U.value)
		}, null, 6), renderSlot(R.$slots, "default", {}, () => [l.loaderText ? (openBlock(), createBlock(bo_text_default, {
			key: 0,
			value: l.loaderText,
			"font-size": z.value,
			variant: unref(BoTextVariant).secondary
		}, null, 8, [
			"value",
			"font-size",
			"variant"
		])) : createCommentVNode("", !0)], !0)], 10, _hoisted_1$5));
	}
}), [["__scopeId", "data-v-58d167d1"]]), _hoisted_1$4 = [
	"id",
	"data-testid",
	"aria-live",
	"aria-label",
	"aria-busy"
], bo_loading_spinner_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-loading-spinner",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-loading-spinner") },
		size: { default: BoSize.md },
		variant: { default: BoVariant.primary },
		loaderText: {},
		textPosition: { default: BoLoaderTextPosition.after },
		customColor: {},
		ariaLive: {},
		ariaLabel: {},
		ariaBusy: { type: Boolean },
		customContainerCssClass: {},
		customSpinnerCssClass: {}
	},
	setup(l) {
		let R = l, z = computed(() => {
			switch (R.size) {
				case BoSize.xs: return BoFontSize.xs;
				case BoSize.sm: return BoFontSize.sm;
				case BoSize.lg: return BoFontSize.xl;
				case BoSize.xl: return BoFontSize["2xl"];
				case BoSize.md:
				default: return BoFontSize.lg;
			}
		}), B = computed(() => ({
			"bo-loader": !0,
			[`bo-loader--${R.textPosition}`]: !0
		})), H = computed(() => ({
			"bo-loader__spinner": !0,
			[`bo-loader__spinner--${R.size}`]: !0,
			[`bo-loader__spinner--${R.variant}`]: !0
		})), U = computed(() => R.customColor ? { "border-bottom-color": R.customColor } : {});
		return (R, V) => (openBlock(), createElementBlock("div", {
			id: l.id,
			"data-testid": l.dataTestId,
			class: normalizeClass([B.value, l.customContainerCssClass]),
			"aria-live": l.ariaLive,
			"aria-label": l.ariaLabel,
			"aria-busy": l.ariaBusy
		}, [createElementVNode("span", {
			class: normalizeClass([H.value, l.customSpinnerCssClass]),
			style: normalizeStyle(U.value)
		}, null, 6), renderSlot(R.$slots, "default", {}, () => [l.loaderText ? (openBlock(), createBlock(bo_text_default, {
			key: 0,
			value: l.loaderText,
			"font-size": z.value,
			variant: unref(BoTextVariant).secondary
		}, null, 8, [
			"value",
			"font-size",
			"variant"
		])) : createCommentVNode("", !0)], !0)], 10, _hoisted_1$4));
	}
}), [["__scopeId", "data-v-d6709b2c"]]);
let BoButtonType = /* @__PURE__ */ function(l) {
	return l.button = "button", l.submit = "submit", l.reset = "reset", l;
}({});
var _hoisted_1$3 = [
	"id",
	"type",
	"disabled",
	"role",
	"aria-live",
	"aria-label",
	"data-testid",
	"aria-labelledby",
	"aria-describedby",
	"tabindex"
], _hoisted_2 = { class: "bo-button__content" }, bo_button_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-button",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-button") },
		size: { default: BoSize.md },
		variant: { default: BoVariant.primary },
		disabled: { type: Boolean },
		isLoading: { type: Boolean },
		loaderType: { default: BoLoaderType.spinner },
		type: { default: BoButtonType.button },
		label: {},
		fullWidth: { type: Boolean },
		prefixIcon: {},
		suffixIcon: {},
		customColor: {},
		customCssClass: {},
		role: {},
		ariaLabel: {},
		ariaLabelledBy: {},
		ariaDescribedBy: {},
		ariaLive: { default: AriaLive.polite },
		tabIndex: {}
	},
	emits: ["click"],
	setup(l, { emit: R }) {
		let B = l, H = R, U = computed(() => {
			if (B.ariaLabel) return B.ariaLabel;
			if (B.label) return B.label;
			B.ariaLabelledBy;
		}), G = computed(() => {
			if (B.tabIndex !== void 0) return B.tabIndex;
			if (B.disabled || B.isLoading) return -1;
		}), K = computed(() => B.disabled ? "not-allowed" : B.isLoading ? "wait" : "pointer"), Y = computed(() => {
			switch (B.size) {
				case BoSize.xs: return BoFontSize.xs;
				case BoSize.sm: return BoFontSize.sm;
				case BoSize.lg: return BoFontSize.lg;
				case BoSize.xl: return BoFontSize.xl;
				case BoSize.md:
				default: return BoFontSize.default;
			}
		}), X = computed(() => {
			switch (B.size) {
				case BoSize.xs: return 12;
				case BoSize.sm: return 14;
				case BoSize.lg: return 20;
				case BoSize.xl: return 24;
				case BoSize.md:
				default: return 16;
			}
		}), Z = computed(() => {
			if (B.customColor) {
				let l = ColorService.instance.getValidCssColor(B.customColor);
				return {
					backgroundColor: l,
					borderColor: l
				};
			}
			return {};
		}), Q = computed(() => ({
			"bo-button": !0,
			"bo-button--loading": B.isLoading,
			"bo-button--full-width": B.fullWidth,
			"bo-button--disabled": B.disabled || B.isLoading,
			[`bo-button--size-${B.size}`]: !0,
			[`bo-button--variant-${B.variant}`]: !0
		}));
		function $(l) {
			(l.key === "Enter" || l.key === " ") && !B.disabled && !B.isLoading && B.type !== BoButtonType.submit && (l.preventDefault(), H("click", l));
		}
		return (R, z) => (openBlock(), createElementBlock("button", {
			id: l.id,
			type: l.type,
			disabled: l.disabled || l.isLoading,
			role: l.role,
			class: normalizeClass([Q.value, l.customCssClass]),
			style: normalizeStyle(Z.value),
			"aria-live": l.ariaLive,
			"aria-label": U.value,
			"data-testid": l.dataTestId,
			"aria-labelledby": l.ariaLabelledBy,
			"aria-describedby": l.ariaDescribedBy,
			tabindex: G.value,
			onKeydown: $
		}, [renderSlot(R.$slots, "default", {}, () => [createElementVNode("div", _hoisted_2, [
			l.isLoading && l.loaderType === unref(BoLoaderType).spinner ? (openBlock(), createBlock(bo_loading_spinner_default, {
				key: 0,
				size: l.size,
				variant: l.variant,
				"custom-container-css-class": "bo-button__loader"
			}, null, 8, ["size", "variant"])) : l.isLoading && l.loaderType === unref(BoLoaderType).ring ? (openBlock(), createBlock(bo_loading_ring_default, {
				key: 1,
				size: l.size,
				variant: l.variant,
				"custom-container-css-class": "bo-button__loader"
			}, null, 8, ["size", "variant"])) : createCommentVNode("", !0),
			l.prefixIcon && !l.isLoading ? (openBlock(), createBlock(bo_icon_default, {
				key: 2,
				icon: l.prefixIcon,
				size: X.value,
				cursor: K.value,
				"custom-css-class": "bo-button__icon bo-button__icon--prefix"
			}, null, 8, [
				"icon",
				"size",
				"cursor"
			])) : createCommentVNode("", !0),
			l.label ? (openBlock(), createBlock(unref(bo_text_default), {
				key: 3,
				value: l.label,
				cursor: K.value,
				"font-size": Y.value,
				variant: unref(BoTextVariant).current,
				"font-weight": unref(BoFontWeight).medium,
				"custom-css-class": "bo-button__label"
			}, null, 8, [
				"value",
				"cursor",
				"font-size",
				"variant",
				"font-weight"
			])) : createCommentVNode("", !0),
			l.suffixIcon ? (openBlock(), createBlock(bo_icon_default, {
				key: 4,
				icon: l.suffixIcon,
				size: X.value,
				cursor: K.value,
				"custom-css-class": "bo-button__icon bo-button__icon--suffix"
			}, null, 8, [
				"icon",
				"size",
				"cursor"
			])) : createCommentVNode("", !0)
		])], !0)], 46, _hoisted_1$3));
	}
}), [["__scopeId", "data-v-f2b34485"]]);
let BoLinkBehavior = /* @__PURE__ */ function(l) {
	return l.default = "default", l.button = "button", l;
}({});
var _hoisted_1$2 = [
	"id",
	"href",
	"target",
	"rel",
	"role",
	"tabindex",
	"aria-live",
	"aria-label",
	"data-testid",
	"aria-labelledby",
	"aria-describedby",
	"aria-disabled"
], bo_link_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-link",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-link") },
		behavior: { default: BoLinkBehavior.default },
		href: {},
		target: { default: "_self" },
		rel: {},
		size: { default: BoSize.md },
		variant: { default: BoVariant.primary },
		label: {},
		disabled: { type: Boolean },
		customColor: {},
		customCssClass: {},
		role: {},
		ariaLabel: {},
		ariaLabelledBy: {},
		ariaDescribedBy: {},
		ariaLive: { default: AriaLive.polite },
		tabIndex: {}
	},
	emits: ["click"],
	setup(l, { emit: R }) {
		let B = l, H = R, U = computed(() => {
			if (B.rel) return B.rel;
			if (B.target === "_blank") return "noopener noreferrer";
		}), W = computed(() => {
			if (B.ariaLabel) return B.target === "_blank" ? `${B.ariaLabel} (opens in new window)` : B.ariaLabel;
			if (B.label) return B.target === "_blank" ? `${B.label} (opens in new window)` : B.label;
			B.ariaLabelledBy;
		}), G = computed(() => B.customColor ? ColorService.instance.getValidCssColor(B.customColor) : {}), K = computed(() => ({ ...G.value })), J = computed(() => {
			switch (B.size) {
				case BoSize.xs: return BoFontSize.xs;
				case BoSize.sm: return BoFontSize.sm;
				case BoSize.md: return BoFontSize.sm;
				case BoSize.lg: return BoFontSize.default;
				case BoSize.xl: return BoFontSize.lg;
				default: return BoFontSize.sm;
			}
		}), Y = computed(() => ({
			"bo-link": !0,
			[`bo-link--size-${B.size}`]: !0,
			[`bo-link--variant-${B.variant}`]: !0,
			[`bo-link--behavior-${B.behavior}`]: !0,
			"bo-link--disabled": B.disabled
		})), X = computed(() => {
			if (!(B.disabled || B.behavior === BoLinkBehavior.button)) return B.href;
		}), Z = computed(() => {
			if (B.role) return B.role;
			if (B.behavior === BoLinkBehavior.button) return "button";
		}), Q = computed(() => {
			if (B.tabIndex !== void 0) return B.tabIndex;
			if (B.disabled) return -1;
		}), $ = (l) => {
			if (B.disabled) {
				l.preventDefault();
				return;
			}
			H("click", l);
		};
		return (R, z) => (openBlock(), createElementBlock("a", {
			id: l.id,
			href: X.value,
			target: l.target,
			rel: U.value,
			role: Z.value,
			tabindex: Q.value,
			class: normalizeClass([Y.value, l.customCssClass]),
			style: normalizeStyle(K.value),
			"aria-live": l.ariaLive,
			"aria-label": W.value,
			"data-testid": l.dataTestId,
			"aria-labelledby": l.ariaLabelledBy,
			"aria-describedby": l.ariaDescribedBy,
			"aria-disabled": l.disabled,
			onClick: $
		}, [renderSlot(R.$slots, "default", {}, () => [l.label ? (openBlock(), createBlock(bo_text_default, {
			key: 0,
			value: l.label,
			"font-size": J.value,
			variant: unref(BoTextVariant).current,
			"font-weight": unref(BoFontWeight).medium,
			"custom-css-class": "bo-link__label"
		}, null, 8, [
			"value",
			"font-size",
			"variant",
			"font-weight"
		])) : createCommentVNode("", !0)], !0)], 14, _hoisted_1$2));
	}
}), [["__scopeId", "data-v-9a81b5de"]]), _hoisted_1$1 = ["id", "data-testid"], bo_tooltip_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-tooltip",
	props: {
		id: { default: IdentityService.instance.getComponentId() },
		dataTestId: { default: IdentityService.instance.getDataTestId("bo-tooltip") },
		content: {},
		position: { default: "top" },
		delay: { default: 200 },
		disabled: {
			type: Boolean,
			default: !1
		},
		customComponent: {},
		customProps: {},
		customCssClass: {},
		role: {},
		ariaLabel: {},
		ariaLive: { default: AriaLive.polite }
	},
	setup(l) {
		let z = l, B = ref(null), V = TooltipService.instance;
		function H() {
			z.disabled || !B.value || !z.content || V.show(B.value, {
				content: z.content,
				position: z.position,
				delay: z.delay,
				customComponent: z.customComponent,
				customProps: z.customProps
			});
		}
		function U() {
			z.disabled || V.hide();
		}
		function W() {
			z.disabled || !B.value || !z.content || V.show(B.value, {
				content: z.content,
				position: z.position,
				delay: z.delay,
				customComponent: z.customComponent,
				customProps: z.customProps
			});
		}
		function G() {
			z.disabled || V.hide();
		}
		return onUnmounted(() => {
			V.hide();
		}), (R, z) => (openBlock(), createElementBlock("div", {
			id: l.id,
			class: normalizeClass(["bo-tooltip__trigger", l.customCssClass]),
			"data-testid": l.dataTestId,
			ref_key: "triggerRef",
			ref: B,
			onMouseenter: H,
			onMouseleave: U,
			onFocus: W,
			onBlur: G
		}, [renderSlot(R.$slots, "default", {}, void 0, !0)], 42, _hoisted_1$1));
	}
}), [["__scopeId", "data-v-1665f2a2"]]), _hoisted_1 = ["aria-live"], bo_tooltip_container_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "bo-tooltip-container",
	setup(l) {
		let z = TooltipService.instance, B = ref(z.getState()), V = computed(() => ({ [`bo-tooltip--${B.value.placement}`]: !0 })), H = computed(() => {
			let l = B.value.placement, R = l === "top" || l === "bottom" ? "translateX(-50%)" : l === "left" || l === "right" ? "translateY(-50%)" : "none";
			return {
				top: `${B.value.position.top}px`,
				left: `${B.value.position.left}px`,
				transform: R
			};
		}), W = null;
		return onMounted(() => {
			W = z.subscribe((l) => {
				B.value = l;
			});
		}), onUnmounted(() => {
			W && W();
		}), (l, R) => (openBlock(), createBlock(Teleport, { to: "body" }, [createVNode(Transition, { name: "bo-tooltip--fade" }, {
			default: withCtx(() => [B.value.isVisible ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(["bo-tooltip", V.value]),
				style: normalizeStyle(H.value),
				role: "tooltip",
				"aria-live": unref(AriaLive).polite
			}, [B.value.customComponent ? (openBlock(), createBlock(resolveDynamicComponent(B.value.customComponent), normalizeProps(mergeProps({ key: 0 }, B.value.customProps)), null, 16)) : (openBlock(), createBlock(bo_text_default, {
				key: 1,
				value: B.value.content,
				"font-size": unref(BoFontSize).sm,
				variant: unref(BoTextVariant).current,
				"custom-css-class": "bo-tooltip__text"
			}, null, 8, [
				"value",
				"font-size",
				"variant"
			])), createElementVNode("div", { class: normalizeClass(["bo-tooltip__arrow", `bo-tooltip__arrow--${B.value.placement}`]) }, null, 2)], 14, _hoisted_1)) : createCommentVNode("", !0)]),
			_: 1
		})]));
	}
}), [["__scopeId", "data-v-d6d2f0dc"]]);
export { __plugin_vue_export_helper_default as S, BoTextWhiteSpace as _, bo_button_default as a, Icon as b, bo_loading_ring_default as c, BoFontFamily as d, BoFontSize as f, BoTextVariant as g, BoTextTransform as h, BoLinkBehavior as i, bo_badge_default as l, BoTextAlign as m, bo_tooltip_default as n, BoButtonType as o, BoFontWeight as p, bo_link_default as r, bo_loading_spinner_default as s, bo_tooltip_container_default as t, bo_text_default as u, bo_icon_default as v, svgPromiseRecord as x, BoIconVariant as y };
