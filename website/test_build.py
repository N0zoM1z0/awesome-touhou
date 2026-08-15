"""Tests for the README-backed website catalog."""

from __future__ import annotations

import sys
import unittest
from pathlib import Path


WEBSITE_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(WEBSITE_DIR))

from build import README, parse_projects  # noqa: E402


class CatalogParserTests(unittest.TestCase):
    def test_parses_group_and_subcategory(self) -> None:
        markdown = """\
## Contents

- [Ignored](#ignored)

## Game Tools

### Practice

- [Example](https://example.com/project) - A useful tool.

## Contributing

- [Not a project](https://example.com/ignored) - Must not be parsed.
"""

        self.assertEqual(
            parse_projects(markdown),
            [
                {
                    "name": "Example",
                    "url": "https://example.com/project",
                    "description": "A useful tool.",
                    "group": "Game Tools",
                    "category": "Practice",
                }
            ],
        )

    def test_repository_catalog_is_unique_and_complete(self) -> None:
        projects = parse_projects(README.read_text(encoding="utf-8"))

        self.assertGreaterEqual(len(projects), 35)
        self.assertEqual(len(projects), len({project["url"] for project in projects}))
        self.assertTrue(all(project["description"].endswith(".") for project in projects))


if __name__ == "__main__":
    unittest.main()
