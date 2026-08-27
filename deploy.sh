#!/usr/bin/env bash
set -euo pipefail

DOMAIN="sheraz-ali-portfolio.vercel.app"
STALE_DOMAIN="folio-one-lime.vercel.app"

OUTPUT=$(vercel --prod 2>&1)
echo "$OUTPUT"

DEPLOY_URL=$(echo "$OUTPUT" | grep -m1 'Production' | grep -oE 'https://[a-zA-Z0-9.-]+\.vercel\.app' || true)

if [ -z "$DEPLOY_URL" ]; then
  echo "Could not determine the new deployment URL; skipping alias update." >&2
  exit 1
fi

echo "Pointing $DOMAIN -> $DEPLOY_URL"
vercel alias set "$DEPLOY_URL" "$DOMAIN"

# Vercel keeps re-creating this legacy alias (from the project's original
# name) on every deploy. Remove it so only the current domain is public.
vercel alias rm "$STALE_DOMAIN" --yes >/dev/null 2>&1 || true
