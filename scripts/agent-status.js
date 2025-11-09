#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

function main() {
  const manifestPath = path.resolve(__dirname, '..', '.agent', 'manifest.json')
  if (!fs.existsSync(manifestPath)) {
    console.error('Agent manifest not found at .agent/manifest.json')
    process.exit(1)
  }
  const data = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  console.log(`\n=== ${data.projectName} – Agent Status ===\n`)
  console.log('Rules:')
  console.log(` - No inline Tailwind outside UI: ${data.rules.styling.noInlineTailwindOutsideUI}`)
  console.log(` - UI components path: ${data.rules.styling.uiComponentsPath}`)
  console.log(` - Hosting: ${data.rules.hosting.server}; SPA routing: ${data.rules.hosting.spaRouting}`)
  console.log('\nCurrent Status:')
  Object.entries(data.status).forEach(([k, v]) => {
    if (Array.isArray(v)) return
    console.log(` - ${k}: ${v}`)
  })
  if (Array.isArray(data.status.todos)) {
    console.log('\nNext Actions:')
    data.status.todos.forEach((t, i) => console.log(` ${i + 1}. ${t}`))
  }
  console.log('\nSources of Truth:')
  Object.entries(data.sourcesOfTruth).forEach(([k, v]) => {
    if (Array.isArray(v)) {
      console.log(` - ${k}:`)
      v.forEach(p => console.log(`    * ${p}`))
    } else {
      console.log(` - ${k}: ${v}`)
    }
  })
  console.log('\n')
}

main()
