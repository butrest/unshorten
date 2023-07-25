# unshorten simple api

## Using

Simply request `https://unshorten.but.rest/ANY-SHORT-URL-HERE`

### Example

`GET https://unshorten.but.rest/https://tinyurl.com/AsiaProblem`

```json
{
  "requested_url": "https://tinyurl.com/AsiaProblem",
  "success": true,
  "resolved_url": "https://en.wikipedia.org/wiki/Slavery_in_Asia",
  "usage_count": 1,
  "remaining_calls": 9
}
```

## Colaborating

1. `git clone git@github.com:butrest/unshorten.git`
2. Run `npm run dev`
3. Edit mainly `src/main.ts`
4. After changes made, send
   a [PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests>)

Released under [MIT license](LICENSE)

## TO-DO

- [ ] Add direct redirect
- [ ] Support trash XML
- [ ] Support one line info
- [ ] Use [CF Cache](https://developers.cloudflare.com/workers/examples/cache-api/)
- [ ] Redirect home to but.rest
