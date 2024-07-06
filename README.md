# Mass Map USA County

## Overview

**Mass Map USA County** is a Node.js application designed to facilitate mass uploads of modified maps.
This project provides a streamlined way to manage and upload map data to Wikimedia Commons.

Feel free to contribute and improve this project.
If you encounter any issues, please open an issue or submit a pull request.

## Features

- Mass upload of maps.
- Simple and easy-to-use interface to Wikimedia API.

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Usage

To use the application, simply run:

```bash
node main.js
```

## Configuration

To configure the application, you need to set up your credentials.

Create a `bot.config.js` file with the following content:
```javascript
const USERNAME = 'your_bot_username';
const PASSWORD = 'your_bot_password';

module.exports = {
	USERNAME,
	PASSWORD,
};
```

## Project Structure

### USA Maps of counties
SVG from categories like:
https://commons.wikimedia.org/wiki/Category:Locator_maps_of_counties_of_Wisconsin

The maps have a specific strucuture in which you can automate uploads as long as names are something like:
`Map of Wisconsin highlighting Adams County.svg`
So:
`Map of ${State} highlighting ${CountyId} County.svg`

- **main_prepare.js**: Prepare mass upload based on one of downloaded map of a county.
- **main.js**: Mass upload using a list of `CountyId` (array of strings).
	Can use a more specific mapping like this:
	```json
	{id: 'Saint_Johns', destFileName: 'Map of Florida highlighting St. Johns County.svg'},
	```
- **bot.config.js**: Configuration file for user credentials (for upload).

### Generic SVG fixer

A more generic fixer that just move a clip-path tag to definitions (`<clipPath>` into `<defs>`).

- **svg_download.js**: Download a category. Filters to only download SVG files.
- **svg_fix.js**: Mass fix downloaded files. It does try to apply map colors, but it should work for non-map SVG too.
- **svg_fixed_upload.js**: Mass upload of fixed files.

## Author

**Maciej Nux Jaros**

Starter API provided by Mediawiki devs at:
https://www.mediawiki.org/wiki/API:Upload#Example_1:_Upload_a_local_file_directly

## License

This project is licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).
