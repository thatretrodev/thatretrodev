function getDiscord(shouldUseFullString) {
	if (shouldUseFullString) {
		return "thatretrodev#3049";
	}
	else {
		return ["thatretrodev", 3049];
	}
}

function getTwitter(shouldUseURL) {
	if (shouldUseURL) {
		return "https://twitter.com/thatretrodev";
	}
	else {
		return "thatretrodev";
	}
}

module.exports = {
	getDiscord,
	getTwitter
};