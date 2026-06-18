"""Cached data loading utilities for the Japanese Learning Streamlit app."""

import json
import os
from functools import lru_cache

DATA_DIR = os.path.join(os.path.dirname(__file__), "data")


@lru_cache(maxsize=1)
def _load_json(filename: str) -> dict | list:
    with open(os.path.join(DATA_DIR, filename), "r", encoding="utf-8") as f:
        return json.load(f)


def load_kana_data() -> dict:
    return _load_json("kana_data.json")


def load_grammar_data() -> dict:
    return _load_json("grammar_data.json")


def load_vocab_examples() -> dict:
    return _load_json("vocab_examples.json")


def load_translations() -> dict:
    return _load_json("translations.json")


def load_reading_data() -> list:
    return _load_json("reading_data.json")


def load_matcha_articles() -> list:
    return _load_json("matcha_articles.json")


def load_vocabulary_data() -> dict:
    return _load_json("vocabulary_data.json")


def build_meaning(word: str, meaning: str) -> str:
    """Build Chinese meaning from translations dictionary or fallback to original."""
    translations = load_translations()
    chinese = translations.get(word, "")
    return f"{chinese} / {meaning}" if chinese else meaning