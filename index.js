import postcss from "postcss";

// Color properties
const properties = ["color", "background-color", "border-color"];

export default postcss.plugin("postcss-color-shorthand", () => {

	return root => {
		// Walk each matching declaration
		root.walkDecls("color", decl => {
			// Space-separated values (color, background-color, border-color)
			const values = postcss.list.space(decl.value);

			// Check correct number of values are defined
			if (values.length > -1 && values.length < 4) {
				// For each value apply corrosponding CSS property
				properties.forEach((property, index) => {

					function applyProperty() {
						decl.before({
							prop: property,
							value: values[index]
						});
					}

					if (values[index] !== undefined) {
						switch (index) {
							case 2:
								applyProperty();
								break;
							case 1:
								applyProperty();
								break;
							default:
								applyProperty();
						}

					}

				});

				decl.remove();
			}
			if (values.length === 0) {
				console.error("No values defined!")
			}
			else {
				console.error("More than 3 values defined!")
			}

		});
	};
});
