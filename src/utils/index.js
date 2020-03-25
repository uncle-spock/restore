export const compose = (...functions) => (component) => {
	return functions.reduceRight((wrapped, func) => func(wrapped), component);
};