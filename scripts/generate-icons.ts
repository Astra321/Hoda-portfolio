import fs from 'fs'
import path from 'path'
import { icons } from '../public/icons/icon'

const ICONS_DIR = path.join(process.cwd(), 'public', 'icons')

// Ensure icons directory exists
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true })
}

// Generate icons
Object.entries(icons).forEach(([name, svg]) => {
  fs.writeFileSync(
    path.join(ICONS_DIR, `${name}.svg`),
    svg
  )
}) 