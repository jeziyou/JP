#!/usr/bin/env python3
import re

with open('/workspace/japanese-learning/src/utils/translations.ts', 'r') as f:
    content = f.read()

# Find all key-value pairs in the translations object
# The pattern is 'key': 'value',
pattern = r"'([^']+)':\s*'([^']*)'"

matches = list(re.finditer(pattern, content))

# Find duplicates
seen = {}
duplicates = []
for m in matches:
    key = m.group(1)
    if key in seen:
        duplicates.append((key, m.start()))
    else:
        seen[key] = m.start()

print(f"Found {len(duplicates)} duplicate keys:")
for key, pos in duplicates[:20]:
    print(f"  '{key}'")
if len(duplicates) > 20:
    print(f"  ... and {len(duplicates) - 20} more")
