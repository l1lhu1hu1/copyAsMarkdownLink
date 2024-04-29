const copyAsMarkdownLink = () => {
  const title = window.document.title;
  const href = window.location.href;
  const mdLink = `[${title}](${href})`;
  navigator.clipboard.writeText(mdLink)
}

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === 'copy-as-markdown-link') {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: copyAsMarkdownLink
    })
  }
  return
})
