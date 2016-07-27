var webpack = require('webpack');
var path = require('path');
var fs = require("fs")

var BUILD_DIR = path.resolve(__dirname, 'src/public/react');
var APP_DIR = path.resolve(__dirname, 'src/app');

var getFiles = function (dir, files_) {
	files_ = files_ || [];
	var files = fs.readdirSync(dir);
	for (var i in files){
		var name = dir + '/' + files[i];
		if (fs.statSync(name).isDirectory()){
			// For get files in sub-directories
			// getFiles(name, files_);
		} else {
			files_.push(name);
		}
	}
	return files_;
}

var getEntries = function () {
	var entries_ = {}
	var fileNames = getFiles(APP_DIR);
	for (var i in fileNames) {
		var fileName = fileNames[i].split('/').pop();
		var splitedFileName = fileName.split('.');
		var entryName = splitedFileName[0];
		var extension = splitedFileName.pop();
		if (['js','jsx'].indexOf(extension) > -1) {
			entries_[entryName] = APP_DIR + '/' + fileName;
		}
	}
	return entries_;
}

var config = {
	entry: getEntries(),
        output: {
                path: BUILD_DIR,
                filename: '[name]-bundle.js'
        },
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				include : APP_DIR,
				loader : 'babel'
			}
		]
	},
	plugins: [
        	new webpack.ProvidePlugin({
			// Declare your global plugin here (use it without 'require')
			// fetch: 'whatwg-fetch',
            		// promise: 'imports?this=>global!exports?global.Promise!es6-promise',
            		fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
        	})
    	],
        externals: {
                'config':  JSON.stringify({
                        // Your react website configuration here
                })
        }
};

module.exports = config;

