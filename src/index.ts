import { readJson } from 'https://deno.land/std/fs/mod.ts'

const f = await readJson('./settings.json')
