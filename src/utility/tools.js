import base64 from "base-64";
import { authToken } from "./setting";


const DIVIDE_PATTERN = 'aaanewlineaaa';


const trimNewline = (content, trimText) => {
  if (content.startsWith(trimText)) {
    content = content.substring(trimText.length);
  }
  if (content.endsWith(trimText)) {
    content = content.substring(0, content.length - trimText.length);
  }
  return content
};

export const fetchGithub = (path, params={}, options={}) => {
  let headers = new Headers();
  if (process.env.NODE_ENV !== 'production') {
    headers.set(
      'Authorization',
      'Basic ' + base64.encode(authToken)
    );
  }

  const request_url = `https://api.github.com${path}?` + new URLSearchParams(params);
  return fetch(request_url, {headers: headers, ...options})
}

export const renderMarkdown = (textList, repo) => {
  const text = textList.join(`\r\n${DIVIDE_PATTERN}\r\n`);
  return fetchGithub(
    '/markdown',
    undefined,
    {
      method: 'POST',
      body: JSON.stringify({
        mode: 'gfm',
        context: repo,
        text: text
      })
    }
  ).then(
    resp => resp && resp.text()
  ).then(text => {
      let markdownBody = text.split(DIVIDE_PATTERN);
      markdownBody = markdownBody.map(el => trimNewline(el, '<br>'))
    return markdownBody
  })
}