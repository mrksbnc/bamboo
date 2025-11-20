const { defineProperty, getPrototypeOf, hasOwn, setPrototypeOf, create: ObjectCreate } = Object;
function definePlugin(plugin) {
	if (typeof plugin != "object" || !plugin) throw Error("Plugin must be an object");
	let { rules } = plugin;
	if (typeof rules != "object" || !rules) throw Error("Plugin must have an object as `rules` property");
	for (let ruleName in rules) hasOwn(rules, ruleName) && (rules[ruleName] = defineRule(rules[ruleName]));
	return plugin;
}
function defineRule(rule) {
	if (typeof rule != "object" || !rule) throw Error("Rule must be an object");
	if ("create" in rule) return rule;
	let context = null, visitor, beforeHook;
	return rule.create = (eslintContext) => (context === null && ({context, visitor, beforeHook} = createContextAndVisitor(rule)), defineProperty(context, "id", { value: eslintContext.id }), defineProperty(context, "options", { value: eslintContext.options }), defineProperty(context, "report", { value: eslintContext.report }), setPrototypeOf(context, getPrototypeOf(eslintContext)), beforeHook !== null && beforeHook() === !1 ? {} : visitor), rule;
}
function createContextAndVisitor(rule) {
	let { createOnce } = rule;
	if (createOnce == null) throw Error("Rules must define either a `create` or `createOnce` method");
	if (typeof createOnce != "function") throw Error("Rule `createOnce` property must be a function");
	let context = ObjectCreate(null, {
		id: {
			value: "",
			enumerable: !0,
			configurable: !0
		},
		options: {
			value: null,
			enumerable: !0,
			configurable: !0
		},
		report: {
			value: null,
			enumerable: !0,
			configurable: !0
		}
	}), { before: beforeHook, after: afterHook,...visitor } = createOnce.call(rule, context);
	if (beforeHook === void 0) beforeHook = null;
	else if (beforeHook !== null && typeof beforeHook != "function") throw Error("`before` property of visitor must be a function if defined");
	if (afterHook != null) {
		if (typeof afterHook != "function") throw Error("`after` property of visitor must be a function if defined");
		let programExit = visitor["Program:exit"];
		visitor["Program:exit"] = programExit == null ? (_node) => afterHook() : (node) => {
			programExit(node), afterHook();
		};
	}
	return {
		context,
		visitor,
		beforeHook
	};
}
export { definePlugin, defineRule };
