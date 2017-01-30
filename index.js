var twit = require('twit'),
	conf = require('./conf.js'),
	T    = new twit(conf);


console.log('Bonjour.');

var stream = T.stream('statuses/filter', { follow: '217749896' });
stream.on('tweet', function (tweet) {
	T.post('statuses/update', { status: 'Désolé pour ça. https://twitter.com/tiphedor/status/' + tweet.id_str,  }, function(err, data, response) {
		console.log('She tweeted.');
	});
})