const del = require('del');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const marked = require('marked');

const clean = () => Promise.resolve()
		.then(() => del(['**.html']))


const markFiles = ([files, css]) => Promise.all(
	files.map((file) => {
		return new Promise((resolve, reject) => {
			fs.readFile(file, 'utf8', (err, data) => err ? reject(err) : resolve(data));
		}).then((data) => {
			return new Promise((resolve, reject) => {
				marked(
					data,
					(err, data) => err ? reject(err) : resolve([file, data, css])
				);
			})
		})
	})
);

const saveFiles = (files) => Promise.all(
	files.map(([file, data, css]) => {
		//console.log(file, data, css)
		return new Promise((resolve, reject) => {
			const name = path.basename(file, '.md');
			const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${file}</title>
  <style>
  ${css}
  </style>
</head>
<body>
  ${data}
</body>
</html>`;
			fs.writeFile(`./${name}.html`, html, 'utf8', (err, data) => err ? reject(err) : resolve(data));
		});
	})
)


const readFiles = (css) => new Promise((resolve) => {
	glob('src/*.md', {}, (er, files) => {
		resolve([files, css]);
	})
});

const readCss = () => new Promise((resolve, reject) => {
	fs.readFile(
		'./styles/main.css',
		'utf8',
		(err, css) => {
			err ? reject(err) : resolve(css)
		}
	)
});


const compile = () => Promise.resolve()
		.then(readCss)
		.then(readFiles)
		.then(markFiles)
		.then(saveFiles)



module.exports = function build() {
	return Promise.resolve()
		.then(() => clean())
		.then(() => compile())
}
