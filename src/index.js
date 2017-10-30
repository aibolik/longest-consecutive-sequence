module.exports = function longestConsecutiveLength(array) {
	var arr = []
	for (var i in array) {
		if (Number.isInteger(arr[array[i]])) {
			arr[array[i]]++
		} else {
			arr[array[i]] = 1
		}
	}
	var longest = 0
	var currentLong = 1
	var lastIt
	for (var i in arr) {
		if (i === 0) {
			lastIt = i
			continue
		}
		if (i - lastIt === 1) {
			currentLong++
		} else {
			longest = longest < currentLong ? currentLong : longest
			currentLong = 1
		}
		lastIt = i
	}
	longest = longest < currentLong ? currentLong : longest
	return longest
}