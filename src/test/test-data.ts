export const schema = '$remote_addr - $remote_user [$time_local]'
	+ ' "$request" $status $bytes_sent "$http_referer" "$http_user_agent"'

export const testData = [{
	line: '127.0.0.1 - - [07/Jul/2018:17:37:28 +0200] "GET /7d32ce87648a4050faca.hot-update.json HTTP/1.1" 200 43'
	+ ' "http://test.local/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0"',
	expectedResult: {
		remote_addr: '127.0.0.1',
		remote_user: '-',
		time_local: '07/Jul/2018:17:37:28 +0200',
		request: 'GET /7d32ce87648a4050faca.hot-update.json HTTP/1.1',
		status: '200',
		bytes_sent: '43',
		http_referer: 'http://test.local/',
		http_user_agent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0',
	},
}]
