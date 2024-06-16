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

- **main.js**: The main entry point of the application.
- **config.js**: Configuration file for user credentials.

## Author

**Maciej Nux Jaros**

Starter API provided by Mediawiki devs at:
https://www.mediawiki.org/wiki/API:Upload#Example_1:_Upload_a_local_file_directly

## License

This project is licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).
