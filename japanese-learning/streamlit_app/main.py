"""日本語学習 — Japanese Learning (Streamlit Edition)"""
import streamlit as st
import random
from data_loader import (
    load_kana_data, load_grammar_data, load_vocab_examples,
    load_translations, load_reading_data, load_matcha_articles,
    load_vocabulary_data, build_meaning,
)

# ── Page config ──────────────────────────────────────────────────
st.set_page_config(
    page_title="日本語学習",
    page_icon="🇯🇵",
    layout="wide",
    initial_sidebar_state="expanded",
)

# ── Custom CSS ───────────────────────────────────────────────────
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap');

    .stApp { background-color: #faf8f5; }

    .font-serif { font-family: 'Noto Serif JP', serif !important; }
    .font-sans { font-family: 'Noto Sans JP', 'Noto Sans SC', sans-serif !important; }

    .card { background: white; border: 1px solid #e5e0d8; border-radius: 12px; padding: 24px; margin-bottom: 16px; }
    .card-accent { border-left: 4px solid #d4a574; }
    .card-primary { border-left: 4px solid #6b8f7e; }
    .card-bamboo { border-left: 4px solid #7a9e7e; }
    .card-gold { border-left: 4px solid #c9a84c; }

    .flashcard-front { background: white; border: 2px solid #e5e0d8; border-radius: 16px; padding: 40px 20px; text-align: center; min-height: 320px; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer; }
    .flashcard-back { background: #6b8f7e; border: 2px solid #5a7d6d; border-radius: 16px; padding: 30px 20px; text-align: center; min-height: 320px; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer; color: white; }

    .tag { display: inline-block; padding: 2px 10px; border-radius: 12px; font-size: 12px; margin: 2px; }
    .tag-level { background: #e8f0ec; color: #6b8f7e; }
    .tag-pos { background: #fdf3e0; color: #c9a84c; }
    .tag-category { background: #e8e0f0; color: #7a5ea0; }

    .word-card { background: white; border: 1px solid #e5e0d8; border-radius: 12px; padding: 20px; margin-bottom: 12px; }
    .word-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }

    .example-box { background: #f8f6f2; border-left: 3px solid #d4a574; border-radius: 0 8px 8px 0; padding: 10px 14px; margin-top: 8px; }

    .article-card { background: white; border: 1px solid #e5e0d8; border-radius: 12px; padding: 20px; margin-bottom: 14px; cursor: pointer; }
    .article-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-color: #6b8f7e; }

    .kana-cell { display: inline-flex; flex-direction: column; align-items: center; padding: 8px 12px; margin: 2px; background: white; border: 1px solid #e5e0d8; border-radius: 8px; min-width: 56px; }
    .kana-cell:hover { border-color: #d4a574; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }

    .grammar-item { background: white; border: 1px solid #e5e0d8; border-radius: 12px; padding: 18px; margin-bottom: 10px; }

    h1, h2, h3 { font-family: 'Noto Serif JP', serif; }
    p, li, span, div { font-family: 'Noto Sans JP', 'Noto Sans SC', sans-serif; }

    div[data-testid="stVerticalBlock"] > div[style*="flex-direction: column;"] > div[data-testid="stVerticalBlock"] { gap: 0.5rem; }
</style>
""", unsafe_allow_html=True)


# ═══════════════════════════════════════════════════════════════════
# PAGE: HOME
# ═══════════════════════════════════════════════════════════════════
def home_page():
    st.header("日本語学習ツールへようこそ")
    st.caption("从五十音到高级阅读，一站式日语学习平台")

    modules = [
        {"icon": "あ", "title": "五十音図", "subtitle": "Kana Chart",
         "desc": "平仮名と片仮名の読み方と書き方を学びましょう",
         "desc_cn": "学习平假名和片假名的读法和写法",
         "accent": "#d4a574", "bg": "#fdf8f2"},
        {"icon": "単", "title": "単語暗記", "subtitle": "Vocabulary",
         "desc": "N5〜N1の単語をフラッシュカードで効率的に覚えましょう",
         "desc_cn": "通过闪卡高效记忆N5~N1单词",
         "accent": "#c9a84c", "bg": "#fefcf5"},
        {"icon": "文", "title": "文法学習", "subtitle": "Grammar",
         "desc": "JLPT各レベルの文法項目を例文とともに学びましょう",
         "desc_cn": "通过例句学习JLPT各级语法项目",
         "accent": "#7a9e7e", "bg": "#f5faf7"},
        {"icon": "読", "title": "読解練習", "subtitle": "Reading",
         "desc": "精选文章 + MATCHA简易日语，覆盖N5~N1各等级",
         "desc_cn": "通过阅读真实日语文章锻炼理解能力",
         "accent": "#6b8f7e", "bg": "#f4f8f7"},
    ]

    cols = st.columns(2)
    for i, mod in enumerate(modules):
        with cols[i % 2]:
            st.markdown(f"""
            <div class="card" style="border-left: 4px solid {mod['accent']}; background: {mod['bg']};">
                <div style="display: flex; align-items: flex-start; gap: 16px;">
                    <div style="font-size: 2rem; font-family: 'Noto Serif JP', serif; color: {mod['accent']}; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.6); border-radius: 8px;">
                        {mod['icon']}
                    </div>
                    <div style="flex: 1;">
                        <h3 style="margin: 0 0 4px; font-size: 1.1rem;">{mod['title']}</h3>
                        <p style="margin: 0 0 4px; font-size: 0.75rem; color: #888;">{mod['subtitle']}</p>
                        <p style="margin: 0; font-size: 0.85rem; color: #555;">{mod['desc']}</p>
                        <p style="margin: 4px 0 0; font-size: 0.75rem; color: #888;">{mod['desc_cn']}</p>
                    </div>
                </div>
            </div>
            """, unsafe_allow_html=True)

    st.divider()
    st.subheader("学習のヒント")
    tips = st.columns(3)
    with tips[0]:
        st.markdown("📝 **毎日少しずつ**\n\n每天坚持15分钟，效果远胜于一次性长时间学习")
    with tips[1]:
        st.markdown("🔄 **復習を忘れずに**\n\n定期复习比学习新内容更重要，参考艾宾浩斯遗忘曲线")
    with tips[2]:
        st.markdown("🎯 **実践が大切**\n\n通过阅读真实的日语文章，将学到的知识运用到实际中")


# ═══════════════════════════════════════════════════════════════════
# PAGE: KANA
# ═══════════════════════════════════════════════════════════════════
def kana_page():
    st.header("五十音図")
    st.caption("平假名和片假名是日语学习的基础，掌握五十音是第一步")

    data = load_kana_data()

    chart_type = st.radio("选择假名类型", ["ひらがな 平假名", "カタカナ 片假名"],
                          horizontal=True, key="kana_chart_type")
    section = st.radio("选择音型", ["清音", "濁音/半濁音", "拗音"],
                       horizontal=True, key="kana_section")

    is_hiragana = chart_type.startswith("ひら")

    if section == "清音":
        chars = data["hiragana"] if is_hiragana else data["katakana"]
        title = "平仮名（清音）" if is_hiragana else "片仮名（清音）"
    elif section == "濁音/半濁音":
        chars = data["hiraganaDakuon"] if is_hiragana else data["katakanaDakuon"]
        title = "濁音・半濁音"
    else:
        chars = data["hiraganaCombo"] if is_hiragana else data["katakanaCombo"]
        title = "拗音"

    st.subheader(title)

    # Group by vowel column
    vowels = ["a", "i", "u", "e", "o"]
    cols_by_vowel = {v: [] for v in vowels}
    for c in chars:
        for v in vowels:
            if c["romaji"].endswith(v) or c["romaji"] == v:
                cols_by_vowel[v].append(c)
                break

    grid_cols = st.columns(5)
    for idx, v in enumerate(vowels):
        with grid_cols[idx]:
            for char in cols_by_vowel[v]:
                st.markdown(f"""
                <div class="kana-cell" style="width:100%; text-align:center; margin-bottom:4px;">
                    <span style="font-size:1.5rem; font-family:'Noto Serif JP',serif;">{char['kana']}</span>
                    <span style="font-size:0.7rem; color:#888;">{char['romaji']}</span>
                </div>
                """, unsafe_allow_html=True)
            if not cols_by_vowel[v]:
                st.markdown("<div style='height:56px;'></div>", unsafe_allow_html=True)

    st.divider()
    with st.expander("📖 学習のポイント", expanded=False):
        st.markdown("""
        - 横向按「あいうえお」五个元音排列，纵向按辅音排列
        - 濁音是在清音假名右上角加「゛」（濁点）表示
        - 半濁音在右上角加「゜」（半濁点），仅は行有
        - 拗音由「い段」假名+小写「ゃ/ゅ/ょ」组成，发音为一个音节
        """)


# ═══════════════════════════════════════════════════════════════════
# PAGE: VOCABULARY
# ═══════════════════════════════════════════════════════════════════
def vocabulary_page():
    st.header("単語暗記")
    st.caption("按JLPT级别分类或在线搜索，通过闪卡系统高效记忆单词")

    vocab_data = load_vocabulary_data()
    examples_data = load_vocab_examples()
    vocab_list = vocab_data["vocabulary"]
    vocab_by_level = vocab_data["vocabularyByLevel"]
    vocab_by_category = vocab_data["vocabularyByCategory"]

    LEVELS = ["N5", "N4", "N3", "N2", "N1"]

    # Init session state
    if "vocab_mode" not in st.session_state:
        st.session_state.vocab_mode = "flashcard"
    if "vocab_level" not in st.session_state:
        st.session_state.vocab_level = "N5"
    if "vocab_idx" not in st.session_state:
        st.session_state.vocab_idx = 0
    if "vocab_flipped" not in st.session_state:
        st.session_state.vocab_flipped = False
    if "vocab_filter_type" not in st.session_state:
        st.session_state.vocab_filter_type = "level"
    if "vocab_category" not in st.session_state:
        st.session_state.vocab_category = "all"
    if "vocab_search_query" not in st.session_state:
        st.session_state.vocab_search_query = ""

    # Page mode tabs
    page_mode = st.radio("学习模式", ["分级学习", "在线搜索"], horizontal=True, key="vocab_page_mode")

    if page_mode == "在线搜索":
        search_query = st.text_input("输入日语单词搜索（汉字/假名/罗马音）…",
                                      key="vocab_search_input")
        if search_query:
            q = search_query.strip().lower()
            results = [w for w in vocab_list if
                       q in w["word"].lower() or q in w["reading"].lower() or q in w["meaning"].lower()]
            if results:
                st.caption(f"找到 {len(results)} 个结果")
                words = results
            else:
                st.info("未找到相关单词，请尝试其他关键词")
                words = []
        else:
            st.info("🔍 输入日语单词开始搜索\n\n支持汉字、假名、罗马音搜索")
            words = []
    else:
        # Static vocabulary mode
        mode = st.radio("显示模式", ["闪卡模式", "列表模式"], horizontal=True, key="vocab_display_mode")
        st.session_state.vocab_mode = "flashcard" if mode == "闪卡模式" else "list"

        # Level tabs
        st.caption("选择级别")
        level_cols = st.columns(len(LEVELS))
        for i, lvl in enumerate(LEVELS):
            with level_cols[i]:
                if st.button(lvl, key=f"level_{lvl}",
                             use_container_width=True,
                             type="primary" if st.session_state.vocab_level == lvl else "secondary"):
                    st.session_state.vocab_level = lvl
                    st.session_state.vocab_idx = 0
                    st.session_state.vocab_flipped = False
                    st.session_state.vocab_category = "all"
                    st.rerun()

        # Filter type
        filter_type = st.radio("筛选方式", ["按级别", "按分类"], horizontal=True, key="vocab_filter")
        st.session_state.vocab_filter_type = "level" if filter_type == "按级别" else "category"

        if filter_type == "按分类":
            categories = ["all"] + sorted(vocab_by_category.keys())
            cat_label_map = {
                '食べ物・料理': '🍽️ 食べ物・料理', '身体・健康': '🏥 身体・健康',
                'スポーツ': '⚽ スポーツ', '音楽・芸術': '🎵 音楽・芸術',
                'テクノロジー': '💻 テクノロジー', '交通・移動': '🚃 交通・移動',
                '自然・科学': '🔬 自然・科学', 'ビジネス・経済': '💼 ビジネス・経済',
                '法律・政治': '⚖️ 法律・政治', '言語・教育': '📚 言語・教育',
                '宗教・文化': '⛩️ 宗教・文化', '歴史': '📜 歴史',
                '生活・日常': '🏠 生活・日常', '娯楽': '🎮 娯楽',
                'メディア': '📺 メディア', '仕事': '🛠️ 仕事',
                '場所': '📍 場所', '感情・心理': '💭 感情・心理',
                '思想': '🧠 思想', '未分類': '📦 未分類',
            }
            cat_display = [cat_label_map.get(c, c) for c in categories]
            selected_cat_display = st.selectbox("选择分类", cat_display, key="vocab_cat_select")
            selected_cat = categories[cat_display.index(selected_cat_display)] if selected_cat_display in cat_display else "all"
            st.session_state.vocab_category = selected_cat

            if selected_cat == "all":
                words = vocab_list
            else:
                words = vocab_by_category.get(selected_cat, [])
        else:
            # Sub-category filter within level
            words = vocab_by_level.get(st.session_state.vocab_level, [])
            cats_in_level = sorted(set(w["category"] for w in words))
            cat_label_map = {
                '食べ物・料理': '🍽️ 食べ物・料理', '身体・健康': '🏥 身体・健康',
                'スポーツ': '⚽ スポーツ', '音楽・芸術': '🎵 音楽・芸術',
                'テクノロジー': '💻 テクノロジー', '交通・移動': '🚃 交通・移動',
                '自然・科学': '🔬 自然・科学', 'ビジネス・経済': '💼 ビジネス・経済',
                '法律・政治': '⚖️ 法律・政治', '言語・教育': '📚 言語・教育',
                '宗教・文化': '⛩️ 宗教・文化', '歴史': '📜 歴史',
                '生活・日常': '🏠 生活・日常', '娯楽': '🎮 娯楽',
                'メディア': '📺 メディア', '仕事': '🛠️ 仕事',
                '場所': '📍 場所', '感情・心理': '💭 感情・心理',
                '思想': '🧠 思想', '未分類': '📦 未分類',
            }
            sub_cats = ["全部"] + [cat_label_map.get(c, c) for c in cats_in_level]
            sub_cat = st.selectbox("细分分类", sub_cats, key="vocab_sub_cat")
            if sub_cat != "全部":
                real_cat = {v: k for k, v in cat_label_map.items()}.get(sub_cat, sub_cat)
                words = [w for w in words if w["category"] == real_cat]

        st.caption(f"当前：{len(words)} 个单词")

        if st.session_state.vocab_mode == "flashcard":
            if words:
                _render_flashcard(words, examples_data)
            else:
                st.info("暂无单词数据")
        else:
            _render_word_list(words, examples_data)


def _render_flashcard(words, examples_data):
    """Render flashcard mode."""
    idx = st.session_state.vocab_idx
    if idx >= len(words):
        idx = 0
        st.session_state.vocab_idx = 0

    word = words[idx]
    flipped = st.session_state.vocab_flipped
    examples = examples_data.get(word["word"], [])

    # Flashcard
    if not flipped:
        st.markdown(f"""
        <div class="flashcard-front" onclick="this.querySelector('span').click()">
            <span class="tag tag-level">{word['level']}</span>
            <span class="tag tag-pos" style="margin-left:4px;">{word['partOfSpeech']}</span>
            <div style="font-size:3rem; font-family:'Noto Serif JP',serif; margin: 20px 0; color: #333;">{word['word']}</div>
            <div style="font-size:1.1rem; color: #888;">{word['reading']}</div>
            <div style="font-size:0.75rem; color: #bbb; margin-top: 24px;">点击「翻转卡片」按钮查看释义</div>
        </div>
        """, unsafe_allow_html=True)
    else:
        ex_html = ""
        if examples:
            ex_html = '<div style="border-top:1px solid rgba(255,255,255,0.3); margin-top:12px; padding-top:12px; text-align:left; width:100%;">'
            ex_html += '<p style="font-size:0.75rem; color:rgba(255,255,255,0.7); margin-bottom:8px;">📝 例句</p>'
            for ex in examples[:2]:
                ex_html += f'<p style="font-size:0.9rem; margin:4px 0;">{ex["japanese"]}</p>'
                if ex.get("reading"):
                    ex_html += f'<p style="font-size:0.75rem; color:rgba(255,255,255,0.6); margin:2px 0;">{ex["reading"]}</p>'
                if ex.get("chinese"):
                    ex_html += f'<p style="font-size:0.75rem; color:rgba(255,255,255,0.7); margin:2px 0 8px;">{ex["chinese"]}</p>'
            ex_html += '</div>'

        st.markdown(f"""
        <div class="flashcard-back">
            <div style="font-size:1.8rem; margin-bottom: 8px;">{build_meaning(word['word'], word['meaning'])}</div>
            <div style="font-size:0.9rem; color:rgba(255,255,255,0.8);">{word['reading']}</div>
            <div style="font-size:1.4rem; margin: 8px 0;">{word['word']}</div>
            {ex_html}
        </div>
        """, unsafe_allow_html=True)

    # Controls
    col1, col2, col3, col4 = st.columns([1, 1, 1, 1])
    with col1:
        if st.button("⬅ 上一个", use_container_width=True):
            st.session_state.vocab_idx = (idx - 1) % len(words)
            st.session_state.vocab_flipped = False
            st.rerun()
    with col2:
        st.caption(f"{idx + 1} / {len(words)}")
    with col3:
        if st.button("下一个 ➡", use_container_width=True):
            st.session_state.vocab_idx = (idx + 1) % len(words)
            st.session_state.vocab_flipped = False
            st.rerun()
    with col4:
        if st.button("🔄 翻转卡片", use_container_width=True):
            st.session_state.vocab_flipped = not flipped
            st.rerun()

    if st.button("🎲 随机", use_container_width=True):
        st.session_state.vocab_idx = random.randint(0, len(words) - 1)
        st.session_state.vocab_flipped = False
        st.rerun()


def _render_word_list(words, examples_data):
    """Render list mode with pagination."""
    PAGE_SIZE = 15
    if "list_visible" not in st.session_state:
        st.session_state.list_visible = PAGE_SIZE

    visible = st.session_state.list_visible
    for w in words[:visible]:
        examples = examples_data.get(w["word"], [])
        ex_html = ""
        if examples:
            ex_html = '<div class="example-box">'
            ex_html += '<p style="font-size:0.7rem; color:#999; margin-bottom:4px;">📝 例句</p>'
            for ex in examples[:2]:
                ex_html += f'<p style="font-size:0.85rem; margin:2px 0;">{ex["japanese"]}</p>'
                if ex.get("reading"):
                    ex_html += f'<p style="font-size:0.7rem; color:#888; margin:1px 0;">{ex["reading"]}</p>'
                if ex.get("chinese"):
                    ex_html += f'<p style="font-size:0.7rem; color:#999; margin:1px 0 6px;">{ex["chinese"]}</p>'
            ex_html += '</div>'

        st.markdown(f"""
        <div class="word-card">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                    <span style="font-size:1.2rem; font-family:'Noto Serif JP',serif; font-weight:bold;">{w['word']}</span>
                    <span style="font-size:0.85rem; color:#888; margin-left:8px;">{w['reading']}</span>
                    <span class="tag tag-pos" style="margin-left:6px;">{w['partOfSpeech']}</span>
                    <span class="tag tag-level" style="margin-left:4px;">{w['level']}</span>
                </div>
                <span style="font-weight:bold; color:#333;">{build_meaning(w['word'], w['meaning'])}</span>
            </div>
            {ex_html}
        </div>
        """, unsafe_allow_html=True)

    if visible < len(words):
        if st.button(f"显示更多（{visible} / {len(words)}）", use_container_width=True):
            st.session_state.list_visible += PAGE_SIZE
            st.rerun()
    elif words:
        st.caption(f"已显示全部 {len(words)} 个单词")


# ═══════════════════════════════════════════════════════════════════
# PAGE: GRAMMAR
# ═══════════════════════════════════════════════════════════════════
def grammar_page():
    st.header("文法学習")
    st.caption("按JLPT级别系统学习日语语法，每个语法点配有详细解释和例句")

    grammar = load_grammar_data()
    LEVELS = ["N5", "N4", "N3", "N2", "N1"]

    if "grammar_level" not in st.session_state:
        st.session_state.grammar_level = "N5"
    if "grammar_expanded" not in st.session_state:
        st.session_state.grammar_expanded = None

    cols = st.columns(len(LEVELS))
    for i, lvl in enumerate(LEVELS):
        with cols[i]:
            if st.button(lvl, key=f"grammar_{lvl}", use_container_width=True,
                         type="primary" if st.session_state.grammar_level == lvl else "secondary"):
                st.session_state.grammar_level = lvl
                st.session_state.grammar_expanded = None
                st.rerun()

    points = grammar.get(st.session_state.grammar_level, [])
    st.caption(f"共 {len(points)} 个语法点")

    for point in points:
        pid = point["id"]
        is_expanded = st.session_state.grammar_expanded == pid

        with st.container():
            col1, col2 = st.columns([6, 1])
            with col1:
                st.markdown(f"""
                <div class="grammar-item">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <span style="font-size:1.1rem; font-family:'Noto Serif JP',serif; font-weight:bold; color:#7a9e7e;">{point['pattern']}</span>
                        <span class="tag tag-pos">{point['meaning']}</span>
                    </div>
                    <p style="font-size:0.85rem; color:#888; margin-top:4px;">{point['explanation'][:100]}{'...' if len(point.get('explanation','')) > 100 else ''}</p>
                </div>
                """, unsafe_allow_html=True)
            with col2:
                if st.button("展开 ▼" if not is_expanded else "收起 ▲", key=f"grammar_expand_{pid}"):
                    st.session_state.grammar_expanded = pid if not is_expanded else None
                    st.rerun()

            if is_expanded:
                st.markdown(f"**{point['explanation']}**")
                for ex in point["examples"]:
                    st.markdown(f"""
                    <div class="example-box">
                        <p style="font-size:1rem; font-family:'Noto Serif JP',serif; font-weight:bold; margin:0;">{ex['japanese']}</p>
                        <p style="font-size:0.85rem; color:#888; margin:2px 0;">{ex['reading']}</p>
                        <p style="font-size:0.85rem; color:#999; margin:2px 0;">{ex['chinese']}</p>
                    </div>
                    """, unsafe_allow_html=True)


# ═══════════════════════════════════════════════════════════════════
# PAGE: READING
# ═══════════════════════════════════════════════════════════════════
def reading_page():
    st.header("読解練習")
    st.caption("精选文章 + MATCHA简易日语，覆盖N5~N1各级别，支持译文对照与重点词汇学习")

    articles_data = load_reading_data()
    matcha_data = load_matcha_articles()

    # Convert to unified format
    all_articles = []
    for a in articles_data:
        level_match = None
        for lvl in ["N5", "N4", "N3", "N2", "N1"]:
            if lvl in a.get("source", ""):
                level_match = lvl
                break
        all_articles.append({
            **a,
            "category": "日常" if level_match in ("N5", "N4") else ("中级" if level_match == "N3" else "上级" if level_match else "日常"),
            "level": level_match,
        })
    for ma in matcha_data:
        all_articles.append({
            "id": ma["id"],
            "title": ma["title"],
            "source": ma["source"],
            "date": ma["date"],
            "content": ma["content"],
            "translation": ma["translation"],
            "vocabulary": ma["vocabulary"],
            "category": ma.get("category", ""),
            "level": ma.get("level", ""),
        })

    # Session state
    if "reading_selected" not in st.session_state:
        st.session_state.reading_selected = None
    if "reading_show_trans" not in st.session_state:
        st.session_state.reading_show_trans = False

    # Source filter
    source = st.radio("文章来源", ["全部文章", "MATCHA 簡易日本語", "基础読解"], horizontal=True, key="reading_source")

    if source == "MATCHA 簡易日本語":
        filtered = [a for a in all_articles if a["id"].startswith("matcha")]
        # Category filter for MATCHA
        matcha_cats = ["全部", "文化", "旅行", "美食", "交通", "季節", "生活", "日常", "中级", "上级"]
        cat_filter = st.selectbox("分类筛选", matcha_cats, key="reading_cat")
        if cat_filter != "全部":
            filtered = [a for a in filtered if a.get("category") == cat_filter]
    elif source == "基础読解":
        filtered = [a for a in all_articles if not a["id"].startswith("matcha")]
    else:
        filtered = all_articles

    st.caption(f"共 {len(filtered)} 篇文章")

    # Back button
    if st.session_state.reading_selected:
        if st.button("← 返回文章列表"):
            st.session_state.reading_selected = None
            st.session_state.reading_show_trans = False
            st.rerun()

        article = next((a for a in all_articles if a["id"] == st.session_state.reading_selected), None)
        if article:
            _render_article_detail(article)
    else:
        _render_article_list(filtered)


def _render_article_list(articles):
    """Render article list view."""
    col1, col2 = st.columns([1, 1])
    with col1:
        if st.button("🎲 随机一篇", use_container_width=True):
            if articles:
                article = random.choice(articles)
                st.session_state.reading_selected = article["id"]
                st.session_state.reading_show_trans = False
                st.rerun()

    for article in articles:
        content_preview = article["content"].replace("\n", " ")[:120] + "..."
        cats = []
        if article.get("category"):
            cats.append(article["category"])
        if article.get("level"):
            cats.append(article["level"])

        with st.container():
            st.markdown(f"""
            <div class="article-card" id="art_{article['id']}">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="flex:1;">
                        <h4 style="margin:0 0 4px; font-size:1.1rem;">{article['title']}</h4>
                        <div style="margin-bottom:6px;">
                            <span class="tag tag-level">{article['source']}</span>
                            {"".join(f'<span class="tag tag-category" style="margin-left:4px;">{c}</span>' for c in cats)}
                            <span style="font-size:0.75rem; color:#bbb; margin-left:8px;">{article['date']}</span>
                        </div>
                        <p style="font-size:0.85rem; color:#888; margin:0;">{content_preview}</p>
                    </div>
                </div>
            </div>
            """, unsafe_allow_html=True)

            if st.button("阅读 →", key=f"read_{article['id']}"):
                st.session_state.reading_selected = article["id"]
                st.session_state.reading_show_trans = False
                st.rerun()


def _render_article_detail(article):
    """Render article detail view."""
    st.subheader(article["title"])

    cats = []
    if article.get("category"):
        cats.append(article["category"])
    if article.get("level"):
        cats.append(article["level"])

    st.markdown(f"""
    <span class="tag tag-level">{article['source']}</span>
    {"".join(f'<span class="tag tag-category" style="margin-left:4px;">{c}</span>' for c in cats)}
    <span style="font-size:0.8rem; color:#bbb; margin-left:8px;">{article['date']}</span>
    """, unsafe_allow_html=True)

    # Article content
    st.markdown("### 📄 文章")
    paragraphs = article["content"].split("\n")
    for p in paragraphs:
        if p.strip():
            st.markdown(f"""
            <p style="font-size:1.1rem; font-family:'Noto Serif JP',serif; line-height:2; margin:8px 0;">{p.strip()}</p>
            """, unsafe_allow_html=True)

    st.caption("选中日语文字即可查询释义（在真机环境可用）")

    # Translation toggle
    if st.button("📖 显示/隐藏译文" if not st.session_state.reading_show_trans else "📖 隐藏译文"):
        st.session_state.reading_show_trans = not st.session_state.reading_show_trans
        st.rerun()

    if st.session_state.reading_show_trans:
        trans = article.get("translation", "")
        if trans:
            st.markdown(f"""
            <div class="example-box">
                <p style="font-size:0.9rem; line-height:1.8; white-space:pre-line;">{trans}</p>
            </div>
            """, unsafe_allow_html=True)

    # Vocabulary
    vocab = article.get("vocabulary", [])
    if vocab:
        st.divider()
        st.markdown("### 📝 重要単語")
        vocab_cols = st.columns(2)
        for i, v in enumerate(vocab):
            with vocab_cols[i % 2]:
                st.markdown(f"""
                <div style="display:flex; align-items:center; gap:12px; padding:8px 12px; background:#f8f6f2; border-radius:8px; margin-bottom:6px;">
                    <span style="font-size:1.1rem; font-family:'Noto Serif JP',serif; font-weight:bold;">{v['word']}</span>
                    <div>
                        <span style="font-size:0.8rem; color:#888; display:block;">{v['reading']}</span>
                        <span style="font-size:0.8rem; color:#999;">{build_meaning(v['word'], v['meaning'])}</span>
                    </div>
                </div>
                """, unsafe_allow_html=True)


# ═══════════════════════════════════════════════════════════════════
# NAVIGATION & ROUTING
# ═══════════════════════════════════════════════════════════════════
with st.sidebar:
    st.title("🇯🇵 日本語学習")
    st.caption("Japanese Learning Platform")

    page = st.radio(
        "Navigation",
        ["🏠 首页 Home", "🔤 五十音図 Kana", "📝 単語暗記 Vocabulary",
         "📖 文法学習 Grammar", "📰 読解練習 Reading"],
        label_visibility="collapsed",
    )

    st.divider()
    st.caption("从五十音到高级阅读，一站式日语学习平台")

# Route to selected page
if page.startswith("🏠"):
    home_page()
elif page.startswith("🔤"):
    kana_page()
elif page.startswith("📝"):
    vocabulary_page()
elif page.startswith("📖"):
    grammar_page()
elif page.startswith("📰"):
    reading_page()