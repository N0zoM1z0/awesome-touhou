#!/usr/bin/env python3
"""Build the Awesome Touhou static site from the repository README."""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
README = ROOT / "README.md"
STATIC = ROOT / "website" / "static"
DIST = ROOT / "website" / "dist"

HEADING_RE = re.compile(r"^(#{2,3})\s+(.+?)\s*$")
ENTRY_RE = re.compile(
    r"^- \[([^\]]+)]\((https://[^)]+)\) - (.+)$"
)
INLINE_CODE_RE = re.compile(r"`([^`]+)`")


def parse_projects(markdown: str) -> list[dict[str, str]]:
    """Extract curated entries and their category path from README Markdown."""

    projects: list[dict[str, str]] = []
    group = ""
    category = ""

    for line in markdown.splitlines():
        heading = HEADING_RE.match(line)
        if heading:
            level = len(heading.group(1))
            title = heading.group(2)

            if level == 2:
                if title == "Contributing":
                    break
                group = title if title != "Contents" else ""
                category = ""
            elif level == 3 and group:
                category = title
            continue

        if not group:
            continue

        entry = ENTRY_RE.match(line)
        if not entry:
            continue

        name, url, description = entry.groups()
        projects.append(
            {
                "name": name,
                "url": url,
                "description": INLINE_CODE_RE.sub(r"\1", description),
                "group": group,
                "category": category or group,
            }
        )

    if not projects:
        raise ValueError("No project entries were found in README.md")

    urls = [project["url"] for project in projects]
    duplicates = sorted({url for url in urls if urls.count(url) > 1})
    if duplicates:
        raise ValueError(f"Duplicate project URLs: {', '.join(duplicates)}")

    return projects


def build() -> None:
    projects = parse_projects(README.read_text(encoding="utf-8"))

    if DIST.exists():
        shutil.rmtree(DIST)
    shutil.copytree(STATIC, DIST)

    payload = {
        "source": "README.md",
        "count": len(projects),
        "projects": projects,
    }
    (DIST / "projects.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    (DIST / ".nojekyll").touch()
    print(f"Built {len(projects)} entries into {DIST.relative_to(ROOT)}")


if __name__ == "__main__":
    build()
