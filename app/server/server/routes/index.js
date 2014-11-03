var express = require('express');
var router = express.Router();
var fs = require('fs');
var filePath = __dirname + '/../files';

router.get('/files', function(req, res) {
	var files = [];

	fs.readdir(filePath, function(err, data) {
		for (var i in data) {
			files.push({
				fileName: data[i].replace(/\.txt$/, ''),
				fullPath: '#/files/' + data[i]
			});
		}
		res.json(files);
	});
});

router.post('/create', function(req, res) {
	var name = req.body.fileName,
		content = req.body.fileContent;
	fs.writeFile(filePath + '/' + name + '.txt', content, function(err, data) {
		if (err) {
			res.json({
				code: 1,
				msg: 'Create file error'
			});
		} else {
			res.json({
				code: 0,
				msg: 'Create file successfully'
			});
		}
	});
});

router.delete('/delete', function(req, res) {

	var file = req.query.name;
	fs.unlink(filePath + '/' + file, function(err, data) {
		if (err) {
			res.json({
				code: 1,
				msg: 'Delete file error'
			});
		} else {
			res.json({
				code: 0,
				msg: 'Delete file successfully'
			});
		}
	});
});

router.get('/read', function(req, res) {
	var file = req.query.name,
		fullFile = req.query.name + '.txt';
	fs.readFile(filePath + '/' + fullFile, 'utf-8', function(err, data) {
		if (err) {
			res.json({
				code: 1,
				msg: 'Read file:' + fullFile + ' error'
			});
		} else {
			res.json({
				fileName: fullFile,
				fileContent: data
			});
		}
	});
});

router.post('/update', function(req, res) {

	var fileName = req.body.fileName,
		fileContent = req.body.fileContent;

	fs.writeFile(filePath + '/' + fileName, fileContent, function(err) {
		if (err) {
			res.json({
				code: 1,
				msg: 'Update file error'
			});
		} else {
			res.json({
				code: 0,
				msg: 'Update file successfully'
			});
		}
	});
})


module.exports = router;
