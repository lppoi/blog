import { defineConfig, presetAttributify, presetUno, presetIcons } from "unocss";

export default defineConfig({
    presets: [presetUno(), presetAttributify(), presetIcons({
        collections: {
            'logos': () => import('@iconify-json/logos/icons.json').then(i => i.default),
            'carbon': () => import('@iconify-json/carbon/icons.json').then(i => i.default)
        }
    })]
})