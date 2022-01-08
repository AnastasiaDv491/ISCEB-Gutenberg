const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		'isceb-blocks/isceb-author-block': './isceb-blocks/isceb-author-block/src',
		'isceb-blocks/isceb-news-block': './isceb-blocks/isceb-news-block/src',
		'isceb-blocks/isceb-image-text-block': './isceb-blocks/isceb-image-text-block/src',
	},
};