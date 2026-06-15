#!/bin/bash

# Installer le skill ui-ux-pro-max pour Claude Code
# Usage : bash install-skill.sh

set -e

SKILL_DIR="$HOME/.claude/skills/ui-ux-pro-max"
REPO="kevinzooo3n/Projetct_2"
BRANCH="claude/happy-brahmagupta-ss2zj3"
RAW="https://raw.githubusercontent.com/$REPO/$BRANCH/.claude/skills/ui-ux-pro-max"

echo "Installation du skill ui-ux-pro-max..."
echo ""

# Créer les dossiers
mkdir -p "$SKILL_DIR/scripts"
mkdir -p "$SKILL_DIR/data/stacks"

# Télécharger SKILL.md
echo "→ SKILL.md"
curl -fsSL "$RAW/SKILL.md" -o "$SKILL_DIR/SKILL.md"

# Télécharger les scripts Python
for f in core.py design_system.py search.py; do
  echo "→ scripts/$f"
  curl -fsSL "$RAW/scripts/$f" -o "$SKILL_DIR/scripts/$f"
done

# Télécharger les fichiers CSV (data/)
for f in charts.csv colors.csv icons.csv landing.csv products.csv react-performance.csv styles.csv typography.csv ui-reasoning.csv ux-guidelines.csv web-interface.csv; do
  echo "→ data/$f"
  curl -fsSL "$RAW/data/$f" -o "$SKILL_DIR/data/$f"
done

# Télécharger les stacks
for f in astro.csv flutter.csv html-tailwind.csv jetpack-compose.csv nextjs.csv nuxt-ui.csv nuxtjs.csv react-native.csv react.csv shadcn.csv svelte.csv swiftui.csv vue.csv; do
  echo "→ data/stacks/$f"
  curl -fsSL "$RAW/data/stacks/$f" -o "$SKILL_DIR/data/stacks/$f"
done

echo ""
echo "✓ Skill installé dans : $SKILL_DIR"
echo ""
echo "Redémarre VS Code puis tape /ui-ux-pro-max dans le chat Claude Code."
