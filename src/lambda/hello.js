import { Http2ServerResponse } from "http2";

// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
export function handler(event, context) {
  console.log('queryStringParameters', event.queryStringParameters)
  const resp = {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, all' }),
  }
  return response
}
