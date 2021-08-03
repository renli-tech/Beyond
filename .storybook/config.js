const req = require.context("../../src", true, /(\.stories\.js$)|(\.stories\.jsx$)/);

function loadStories() {
	req.keys().forEach((filename) => req(filename));
};
configure(loadStories, module)