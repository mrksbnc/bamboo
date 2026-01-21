function getConflictGroup(baseClass: string): string | null {
	// Padding - check specific first, then general
	if (/^px-/.test(baseClass)) return 'px';
	if (/^py-/.test(baseClass)) return 'py';
	if (/^ps-/.test(baseClass)) return 'ps'; // inline-start
	if (/^pe-/.test(baseClass)) return 'pe'; // inline-end
	if (/^pt-/.test(baseClass)) return 'pt';
	if (/^pr-/.test(baseClass)) return 'pr';
	if (/^pb-/.test(baseClass)) return 'pb';
	if (/^pl-/.test(baseClass)) return 'pl';
	if (/^p-/.test(baseClass)) return 'p';

	// Margin - check specific first, then general
	if (/^mx-/.test(baseClass)) return 'mx';
	if (/^my-/.test(baseClass)) return 'my';
	if (/^ms-/.test(baseClass)) return 'ms'; // inline-start
	if (/^me-/.test(baseClass)) return 'me'; // inline-end
	if (/^mt-/.test(baseClass)) return 'mt';
	if (/^mr-/.test(baseClass)) return 'mr';
	if (/^mb-/.test(baseClass)) return 'mb';
	if (/^ml-/.test(baseClass)) return 'ml';
	if (/^m-/.test(baseClass)) return 'm';

	// Space between
	if (/^space-x-/.test(baseClass)) return 'spaceX';
	if (/^space-y-/.test(baseClass)) return 'spaceY';

	// Gap
	if (/^gap-x-/.test(baseClass)) return 'gapX';
	if (/^gap-y-/.test(baseClass)) return 'gapY';
	if (/^gap-/.test(baseClass)) return 'gap';

	// Width
	if (/^min-w-/.test(baseClass)) return 'minWidth';
	if (/^max-w-/.test(baseClass)) return 'maxWidth';
	if (/^w-/.test(baseClass)) return 'width';

	// Height
	if (/^min-h-/.test(baseClass)) return 'minHeight';
	if (/^max-h-/.test(baseClass)) return 'maxHeight';
	if (/^h-/.test(baseClass)) return 'height';

	// Size (width and height together)
	if (/^size-/.test(baseClass)) return 'size';

	// Flex
	if (/^flex-grow/.test(baseClass)) return 'flexGrow';
	if (/^flex-shrink/.test(baseClass)) return 'flexShrink';
	if (/^flex-/.test(baseClass)) return 'flex';
	if (/^basis-/.test(baseClass)) return 'flexBasis';

	// Grid
	if (/^grid-cols-/.test(baseClass)) return 'gridCols';
	if (/^grid-rows-/.test(baseClass)) return 'gridRows';
	if (/^auto-cols-/.test(baseClass)) return 'autoCols';
	if (/^auto-rows-/.test(baseClass)) return 'autoRows';
	if (/^col-start-/.test(baseClass)) return 'colStart';
	if (/^col-end-/.test(baseClass)) return 'colEnd';
	if (/^col-/.test(baseClass)) return 'col';
	if (/^row-start-/.test(baseClass)) return 'rowStart';
	if (/^row-end-/.test(baseClass)) return 'rowEnd';
	if (/^row-/.test(baseClass)) return 'row';

	// Aspect Ratio
	if (/^aspect-/.test(baseClass)) return 'aspect';

	// Container
	if (/^container$/.test(baseClass)) return 'container';

	// Columns (CSS multi-column)
	if (/^columns-/.test(baseClass)) return 'columns';

	// Break (column/page breaks)
	if (/^break-after-/.test(baseClass)) return 'breakAfter';
	if (/^break-before-/.test(baseClass)) return 'breakBefore';
	if (/^break-inside-/.test(baseClass)) return 'breakInside';

	// Box Decoration Break
	if (/^box-decoration-/.test(baseClass)) return 'boxDecorationBreak';

	// Box Sizing
	if (/^box-/.test(baseClass)) return 'boxSizing';

	// Display
	if (
		/^(block|inline-block|inline|flex|inline-flex|table|inline-table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row-group|table-row|flow-root|grid|inline-grid|contents|list-item|hidden)$/.test(
			baseClass,
		)
	)
		return 'display';

	// Float
	if (/^float-/.test(baseClass)) return 'float';

	// Clear
	if (/^clear-/.test(baseClass)) return 'clear';

	// Isolation
	if (/^(isolate|isolation-auto)$/.test(baseClass)) return 'isolation';

	// Object Fit
	if (/^object-/.test(baseClass)) return 'objectFit';

	// Object Position
	if (
		/^object-(top|bottom|left|right|center|left-top|left-bottom|right-top|right-bottom)$/.test(
			baseClass,
		)
	)
		return 'objectPosition';

	// Overflow
	if (/^overflow-x-/.test(baseClass)) return 'overflowX';
	if (/^overflow-y-/.test(baseClass)) return 'overflowY';
	if (/^overflow-/.test(baseClass)) return 'overflow';

	// Overscroll Behavior
	if (/^overscroll-x-/.test(baseClass)) return 'overscrollX';
	if (/^overscroll-y-/.test(baseClass)) return 'overscrollY';
	if (/^overscroll-/.test(baseClass)) return 'overscroll';

	// Position
	if (/^(static|fixed|absolute|relative|sticky)$/.test(baseClass)) return 'position';

	// Top / Right / Bottom / Left
	if (/^inset-x-/.test(baseClass)) return 'insetX';
	if (/^inset-y-/.test(baseClass)) return 'insetY';
	if (/^start-/.test(baseClass)) return 'start';
	if (/^end-/.test(baseClass)) return 'end';
	if (/^top-/.test(baseClass)) return 'top';
	if (/^right-/.test(baseClass)) return 'right';
	if (/^bottom-/.test(baseClass)) return 'bottom';
	if (/^left-/.test(baseClass)) return 'left';
	if (/^inset-/.test(baseClass)) return 'inset';

	// Visibility
	if (/^(visible|invisible|collapse)$/.test(baseClass)) return 'visibility';

	// Z-Index
	if (/^z-/.test(baseClass)) return 'zIndex';

	// Flex Direction
	if (/^flex-(row|row-reverse|col|col-reverse)$/.test(baseClass)) return 'flexDirection';

	// Flex Wrap
	if (/^flex-(wrap|wrap-reverse|nowrap)$/.test(baseClass)) return 'flexWrap';

	// Align Content
	if (/^content-/.test(baseClass)) return 'alignContent';

	// Align Items
	if (/^items-/.test(baseClass)) return 'alignItems';

	// Align Self
	if (/^self-/.test(baseClass)) return 'alignSelf';

	// Justify Content
	if (/^justify-/.test(baseClass)) return 'justifyContent';

	// Justify Items
	if (/^justify-items-/.test(baseClass)) return 'justifyItems';

	// Justify Self
	if (/^justify-self-/.test(baseClass)) return 'justifySelf';

	// Place Content
	if (/^place-content-/.test(baseClass)) return 'placeContent';

	// Place Items
	if (/^place-items-/.test(baseClass)) return 'placeItems';

	// Place Self
	if (/^place-self-/.test(baseClass)) return 'placeSelf';

	// Order
	if (/^order-/.test(baseClass)) return 'order';

	// Grid Auto Flow
	if (/^grid-flow-/.test(baseClass)) return 'gridAutoFlow';

	// Ring (must check width patterns before color)
	if (/^ring(-\d+)?$/.test(baseClass)) return 'ringWidth';
	if (/^ring-inset$/.test(baseClass)) return 'ringInset';
	if (/^ring-offset-\d+$/.test(baseClass)) return 'ringOffsetWidth';
	if (/^ring-offset-/.test(baseClass)) return 'ringOffsetColor';
	if (/^ring-/.test(baseClass)) return 'ringColor';

	// Background
	if (/^bg-opacity-/.test(baseClass)) return 'bgOpacity';
	if (/^bg-gradient-/.test(baseClass)) return 'bgGradient';
	if (/^from-/.test(baseClass)) return 'gradientFrom';
	if (/^via-/.test(baseClass)) return 'gradientVia';
	if (/^to-/.test(baseClass)) return 'gradientTo';
	if (/^bg-clip-/.test(baseClass)) return 'bgClip';
	if (/^bg-origin-/.test(baseClass)) return 'bgOrigin';
	if (/^bg-(fixed|local|scroll)$/.test(baseClass)) return 'bgAttachment';
	if (
		/^bg-(bottom|center|left|left-bottom|left-top|right|right-bottom|right-top|top)$/.test(
			baseClass,
		)
	)
		return 'bgPosition';
	if (/^bg-(auto|cover|contain)$/.test(baseClass)) return 'bgSize';
	if (/^bg-(repeat|no-repeat|repeat-x|repeat-y|repeat-round|repeat-space)$/.test(baseClass))
		return 'bgRepeat';
	if (/^bg-/.test(baseClass)) return 'background';

	// Border Color (check before border width)
	if (/^border-x-/.test(baseClass) && !/^border-x-\d/.test(baseClass)) return 'borderXColor';
	if (/^border-y-/.test(baseClass) && !/^border-y-\d/.test(baseClass)) return 'borderYColor';
	if (/^border-s-/.test(baseClass) && !/^border-s-\d/.test(baseClass)) return 'borderSColor';
	if (/^border-e-/.test(baseClass) && !/^border-e-\d/.test(baseClass)) return 'borderEColor';
	if (/^border-t-/.test(baseClass) && !/^border-t-\d/.test(baseClass)) return 'borderTColor';
	if (/^border-r-/.test(baseClass) && !/^border-r-\d/.test(baseClass)) return 'borderRColor';
	if (/^border-b-/.test(baseClass) && !/^border-b-\d/.test(baseClass)) return 'borderBColor';
	if (/^border-l-/.test(baseClass) && !/^border-l-\d/.test(baseClass)) return 'borderLColor';
	if (
		/^border-(?!(\d+$|solid$|dashed$|dotted$|double$|hidden$|none$|x-|y-|s-|e-|t-|r-|b-|l-))/.test(
			baseClass,
		)
	)
		return 'borderColor';

	// Border Width
	if (/^border-x-\d/.test(baseClass)) return 'borderXWidth';
	if (/^border-y-\d/.test(baseClass)) return 'borderYWidth';
	if (/^border-s-\d/.test(baseClass)) return 'borderSWidth';
	if (/^border-e-\d/.test(baseClass)) return 'borderEWidth';
	if (/^border-t-\d/.test(baseClass)) return 'borderTWidth';
	if (/^border-r-\d/.test(baseClass)) return 'borderRWidth';
	if (/^border-b-\d/.test(baseClass)) return 'borderBWidth';
	if (/^border-l-\d/.test(baseClass)) return 'borderLWidth';
	if (/^border(-\d+)?$/.test(baseClass)) return 'borderWidth';

	// Border Style
	if (/^border-(solid|dashed|dotted|double|hidden|none)$/.test(baseClass)) return 'borderStyle';

	// Border Radius
	if (/^rounded-tl-/.test(baseClass)) return 'roundedTL';
	if (/^rounded-tr-/.test(baseClass)) return 'roundedTR';
	if (/^rounded-br-/.test(baseClass)) return 'roundedBR';
	if (/^rounded-bl-/.test(baseClass)) return 'roundedBL';
	if (/^rounded-ss-/.test(baseClass)) return 'roundedSS';
	if (/^rounded-se-/.test(baseClass)) return 'roundedSE';
	if (/^rounded-ee-/.test(baseClass)) return 'roundedEE';
	if (/^rounded-es-/.test(baseClass)) return 'roundedES';
	if (/^rounded-t-/.test(baseClass)) return 'roundedT';
	if (/^rounded-r-/.test(baseClass)) return 'roundedR';
	if (/^rounded-b-/.test(baseClass)) return 'roundedB';
	if (/^rounded-l-/.test(baseClass)) return 'roundedL';
	if (/^rounded-s-/.test(baseClass)) return 'roundedS';
	if (/^rounded-e-/.test(baseClass)) return 'roundedE';
	if (/^rounded/.test(baseClass)) return 'rounded';

	// Divide Width
	if (/^divide-x(-\d+)?$/.test(baseClass)) return 'divideX';
	if (/^divide-y(-\d+)?$/.test(baseClass)) return 'divideY';

	// Divide Color
	if (/^divide-/.test(baseClass)) return 'divideColor';

	// Divide Style
	if (/^divide-(solid|dashed|dotted|double|none)$/.test(baseClass)) return 'divideStyle';

	// Outline Width
	if (/^outline-\d/.test(baseClass)) return 'outlineWidth';

	// Outline Color
	if (
		/^outline-/.test(baseClass) &&
		!/^outline-(none|dashed|dotted|double|hidden)$/.test(baseClass)
	)
		return 'outlineColor';

	// Outline Style
	if (/^outline-(none|dashed|dotted|double|hidden)$/.test(baseClass)) return 'outlineStyle';

	// Outline Offset
	if (/^outline-offset-/.test(baseClass)) return 'outlineOffset';

	// Box Shadow
	if (/^shadow-/.test(baseClass) && !/^shadow-(sm|md|lg|xl|2xl|inner|none)$/.test(baseClass))
		return 'shadowColor';
	if (/^shadow/.test(baseClass)) return 'shadow';

	// Opacity
	if (/^opacity-/.test(baseClass)) return 'opacity';

	// Mix Blend Mode
	if (/^mix-blend-/.test(baseClass)) return 'mixBlend';

	// Background Blend Mode
	if (/^bg-blend-/.test(baseClass)) return 'bgBlend';

	// Blur
	if (/^blur/.test(baseClass)) return 'blur';

	// Brightness
	if (/^brightness-/.test(baseClass)) return 'brightness';

	// Contrast
	if (/^contrast-/.test(baseClass)) return 'contrast';

	// Drop Shadow
	if (/^drop-shadow/.test(baseClass)) return 'dropShadow';

	// Grayscale
	if (/^grayscale/.test(baseClass)) return 'grayscale';

	// Hue Rotate
	if (/^hue-rotate-/.test(baseClass)) return 'hueRotate';

	// Invert
	if (/^invert/.test(baseClass)) return 'invert';

	// Saturate
	if (/^saturate-/.test(baseClass)) return 'saturate';

	// Sepia
	if (/^sepia/.test(baseClass)) return 'sepia';

	// Backdrop Blur
	if (/^backdrop-blur/.test(baseClass)) return 'backdropBlur';

	// Backdrop Brightness
	if (/^backdrop-brightness-/.test(baseClass)) return 'backdropBrightness';

	// Backdrop Contrast
	if (/^backdrop-contrast-/.test(baseClass)) return 'backdropContrast';

	// Backdrop Grayscale
	if (/^backdrop-grayscale/.test(baseClass)) return 'backdropGrayscale';

	// Backdrop Hue Rotate
	if (/^backdrop-hue-rotate-/.test(baseClass)) return 'backdropHueRotate';

	// Backdrop Invert
	if (/^backdrop-invert/.test(baseClass)) return 'backdropInvert';

	// Backdrop Opacity
	if (/^backdrop-opacity-/.test(baseClass)) return 'backdropOpacity';

	// Backdrop Saturate
	if (/^backdrop-saturate-/.test(baseClass)) return 'backdropSaturate';

	// Backdrop Sepia
	if (/^backdrop-sepia/.test(baseClass)) return 'backdropSepia';

	// Border Collapse
	if (/^border-(collapse|separate)$/.test(baseClass)) return 'borderCollapse';

	// Border Spacing
	if (/^border-spacing-x-/.test(baseClass)) return 'borderSpacingX';
	if (/^border-spacing-y-/.test(baseClass)) return 'borderSpacingY';
	if (/^border-spacing-/.test(baseClass)) return 'borderSpacing';

	// Table Layout
	if (/^table-(auto|fixed)$/.test(baseClass)) return 'tableLayout';

	// Caption Side
	if (/^caption-/.test(baseClass)) return 'captionSide';

	// Transition Property
	if (/^transition/.test(baseClass)) return 'transition';

	// Transition Duration
	if (/^duration-/.test(baseClass)) return 'duration';

	// Transition Timing Function
	if (/^ease-/.test(baseClass)) return 'ease';

	// Transition Delay
	if (/^delay-/.test(baseClass)) return 'delay';

	// Animation
	if (/^animate-/.test(baseClass)) return 'animate';

	// Transform
	if (/^transform/.test(baseClass)) return 'transform';

	// Transform Origin
	if (/^origin-/.test(baseClass)) return 'transformOrigin';

	// Scale
	if (/^scale-x-/.test(baseClass)) return 'scaleX';
	if (/^scale-y-/.test(baseClass)) return 'scaleY';
	if (/^scale-/.test(baseClass)) return 'scale';

	// Rotate
	if (/^rotate-/.test(baseClass)) return 'rotate';

	// Translate
	if (/^translate-x-/.test(baseClass)) return 'translateX';
	if (/^translate-y-/.test(baseClass)) return 'translateY';

	// Skew
	if (/^skew-x-/.test(baseClass)) return 'skewX';
	if (/^skew-y-/.test(baseClass)) return 'skewY';

	// Accent Color
	if (/^accent-/.test(baseClass)) return 'accent';

	// Appearance
	if (/^appearance-/.test(baseClass)) return 'appearance';

	// Cursor
	if (/^cursor-/.test(baseClass)) return 'cursor';

	// Caret Color
	if (/^caret-/.test(baseClass)) return 'caret';

	// Pointer Events
	if (/^pointer-events-/.test(baseClass)) return 'pointerEvents';

	// Resize
	if (/^resize/.test(baseClass)) return 'resize';

	// Scroll Behavior
	if (/^scroll-(auto|smooth)$/.test(baseClass)) return 'scrollBehavior';

	// Scroll Margin
	if (/^scroll-mx-/.test(baseClass)) return 'scrollMx';
	if (/^scroll-my-/.test(baseClass)) return 'scrollMy';
	if (/^scroll-ms-/.test(baseClass)) return 'scrollMs';
	if (/^scroll-me-/.test(baseClass)) return 'scrollMe';
	if (/^scroll-mt-/.test(baseClass)) return 'scrollMt';
	if (/^scroll-mr-/.test(baseClass)) return 'scrollMr';
	if (/^scroll-mb-/.test(baseClass)) return 'scrollMb';
	if (/^scroll-ml-/.test(baseClass)) return 'scrollMl';
	if (/^scroll-m-/.test(baseClass)) return 'scrollM';

	// Scroll Padding
	if (/^scroll-px-/.test(baseClass)) return 'scrollPx';
	if (/^scroll-py-/.test(baseClass)) return 'scrollPy';
	if (/^scroll-ps-/.test(baseClass)) return 'scrollPs';
	if (/^scroll-pe-/.test(baseClass)) return 'scrollPe';
	if (/^scroll-pt-/.test(baseClass)) return 'scrollPt';
	if (/^scroll-pr-/.test(baseClass)) return 'scrollPr';
	if (/^scroll-pb-/.test(baseClass)) return 'scrollPb';
	if (/^scroll-pl-/.test(baseClass)) return 'scrollPl';
	if (/^scroll-p-/.test(baseClass)) return 'scrollP';

	// Scroll Snap Align
	if (/^snap-/.test(baseClass)) return 'snapAlign';

	// Scroll Snap Stop
	if (/^snap-(normal|always)$/.test(baseClass)) return 'snapStop';

	// Scroll Snap Type
	if (/^snap-(none|x|y|both|mandatory|proximity)$/.test(baseClass)) return 'snapType';

	// Touch Action
	if (/^touch-/.test(baseClass)) return 'touchAction';

	// User Select
	if (/^select-/.test(baseClass)) return 'userSelect';

	// Will Change
	if (/^will-change-/.test(baseClass)) return 'willChange';

	// Fill
	if (/^fill-/.test(baseClass)) return 'fill';

	// Stroke
	if (/^stroke-\d/.test(baseClass)) return 'strokeWidth';
	if (/^stroke-/.test(baseClass)) return 'stroke';

	// Screen Readers
	if (/^(sr-only|not-sr-only)$/.test(baseClass)) return 'sr';

	// Forced Color Adjust
	if (/^forced-color-adjust-/.test(baseClass)) return 'forcedColorAdjust';

	// Font Family
	if (/^font-(sans|serif|mono)$/.test(baseClass)) return 'fontFamily';

	// Font Size
	if (/^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/.test(baseClass))
		return 'fontSize';

	// Font Smoothing
	if (/^(antialiased|subpixel-antialiased)$/.test(baseClass)) return 'fontSmoothing';

	// Font Style
	if (/^(italic|not-italic)$/.test(baseClass)) return 'fontStyle';

	// Font Weight
	if (/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/.test(baseClass))
		return 'fontWeight';

	// Font Variant Numeric
	if (
		/^(normal-nums|ordinal|slashed-zero|lining-nums|oldstyle-nums|proportional-nums|tabular-nums|diagonal-fractions|stacked-fractions)$/.test(
			baseClass,
		)
	)
		return 'fontVariantNumeric';

	// Letter Spacing
	if (/^tracking-/.test(baseClass)) return 'letterSpacing';

	// Line Clamp
	if (/^line-clamp-/.test(baseClass)) return 'lineClamp';

	// Line Height
	if (/^leading-/.test(baseClass)) return 'lineHeight';

	// List Style Image
	if (/^list-image-/.test(baseClass)) return 'listStyleImage';

	// List Style Position
	if (/^list-(inside|outside)$/.test(baseClass)) return 'listStylePosition';

	// List Style Type
	if (/^list-(none|disc|decimal)$/.test(baseClass)) return 'listStyleType';

	// Text Align
	if (/^text-(left|center|right|justify|start|end)$/.test(baseClass)) return 'textAlign';

	// Text Color
	if (
		/^text-(?!xs$|sm$|base$|lg$|xl$|2xl$|3xl$|4xl$|5xl$|6xl$|7xl$|8xl$|9xl$|left$|center$|right$|justify$|start$|end$)/.test(
			baseClass,
		)
	)
		return 'textColor';

	// Text Decoration
	if (/^(underline|overline|line-through|no-underline)$/.test(baseClass)) return 'textDecoration';

	// Text Decoration Color
	if (
		/^decoration-/.test(baseClass) &&
		!/^decoration-(solid|double|dotted|dashed|wavy|auto|from-font|\d)/.test(baseClass)
	)
		return 'textDecorationColor';

	// Text Decoration Style
	if (/^decoration-(solid|double|dotted|dashed|wavy)$/.test(baseClass))
		return 'textDecorationStyle';

	// Text Decoration Thickness
	if (/^decoration-(auto|from-font|\d)/.test(baseClass)) return 'textDecorationThickness';

	// Text Underline Offset
	if (/^underline-offset-/.test(baseClass)) return 'textUnderlineOffset';

	// Text Transform
	if (/^(uppercase|lowercase|capitalize|normal-case)$/.test(baseClass)) return 'textTransform';

	// Text Overflow
	if (/^(truncate|text-ellipsis|text-clip)$/.test(baseClass)) return 'textOverflow';

	// Text Wrap
	if (/^text-(wrap|nowrap|balance|pretty)$/.test(baseClass)) return 'textWrap';

	// Text Indent
	if (/^indent-/.test(baseClass)) return 'textIndent';

	// Vertical Align
	if (/^align-/.test(baseClass)) return 'verticalAlign';

	// Whitespace
	if (/^whitespace-/.test(baseClass)) return 'whitespace';

	// Word Break
	if (/^break-(normal|words|all|keep)$/.test(baseClass)) return 'wordBreak';

	// Hyphens
	if (/^hyphens-/.test(baseClass)) return 'hyphens';

	// Content
	if (/^content-/.test(baseClass)) return 'content';

	return null;
}

function parseClassName(className: string): { variants: string; base: string } {
	const parts = className.split(':');

	if (parts.length === 1) {
		return { variants: '', base: className };
	}

	const base = parts[parts.length - 1];
	const variants = parts.slice(0, -1).join(':');

	return { variants, base };
}

/**
 * Merges multiple Tailwind classes into a single string. Handles conflicts and priorities
 * and returns an ordered string of classes.
 */
export function mergeTwClasses(...classes: (string | undefined | null)[]): string {
	const allClasses = classes
		.filter(Boolean)
		.flatMap((c) => c?.split(' ') ?? [])
		.filter(Boolean);

	const classMap = new Map<string, { className: string; order: number }>();
	let order = 0;

	for (const className of allClasses) {
		const { variants, base } = parseClassName(className);
		const group = getConflictGroup(base);

		if (group) {
			const key = variants ? `${variants}:${group}` : group;
			classMap.set(key, { className, order: order++ });
		} else {
			const key = className;
			if (!classMap.has(key)) {
				classMap.set(key, { className, order: order++ });
			}
		}
	}

	return Array.from(classMap.values())
		.sort((a, b) => a.order - b.order)
		.map((item) => item.className)
		.join(' ');
}
