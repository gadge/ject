import { delogger }  from '@spare/deco'
import stripComments from 'strip-json-comments'

const json = `{
    // Rainbows
    "unicorn": /* ❤ */ "cake"
}`

stripComments(json) |> delogger

JSON.parse(stripComments(json))