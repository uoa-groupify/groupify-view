const FRAGMENT_TAG = "Fragment";
const FRAGMENT_ATTR_NAME = "name";

/**
 * Will replace <Fragment name="name"> with
 * their fragment from the fragments folder
 * @param element
 */
function insertFragments(element) {
	$(FRAGMENT_TAG).each(function(index, element) {
		//turns html element into a jquery element
		var fragmentPlaceholder = $(element);
		//Gets the content of the "name" attribute
		var fragmentName = fragmentPlaceholder.attr(FRAGMENT_ATTR_NAME);

		//insert fragment
		fragmentPlaceholder.load(
			"../fragments/" + fragmentName + ".html",
			function() {
				$(this)
					.children(":first")
					.unwrap();
				insertFragments(this);
			}
		);
	});
}
