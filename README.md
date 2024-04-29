# copyAsMarkdownLink

This Chrome extension allows you to copy the current webpage's title and URL in Markdown link format to your clipboard.

## Installation

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded/cloned this repository.

## Usage

Once the extension is installed, you can use the following keyboard shortcut to copy the current webpage's title and URL in Markdown link format:
- **Windows/Linux**: `Ctrl + Shift + C`
- **Mac**: `Command + Shift + C`

## How it Works

When you press the keyboard shortcut, the extension injects a script into the current webpage. This script retrieves the title and URL of the webpage and formats them into a Markdown link (`[title](url)`). Then, it copies the formatted Markdown link to your clipboard using the `navigator.clipboard.writeText()` method.

## Permissions

This extension requires the following permissions:
- `activeTab`: Allows the extension to access the active tab in your browser in order to retrieve the title and URL of the webpage.
- `clipboardWrite`: Allows the extension to write text to the clipboard.
- `scripting`: Allows the extension to execute scripts in the context of web pages.

## License

This project is licensed under the MIT License.
