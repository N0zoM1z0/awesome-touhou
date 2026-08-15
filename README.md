# [Awesome Touhou](https://n0zom1z0.github.io/awesome-touhou/) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<p align="center">
  <a href="https://n0zom1z0.github.io/awesome-touhou/"><img src="website/static/favicon.svg" width="96" alt="Awesome Touhou logo"></a>
</p>

Bullet hell shoot 'em up game series and doujin media franchise created by ZUN.

## Contents

- [Official Resources and Getting Started](#official-resources-and-getting-started)
  - [Official Resources](#official-resources)
  - [Getting Started](#getting-started)
- [Game Tools](#game-tools)
  - [Launchers and Compatibility](#launchers-and-compatibility)
  - [Input and Integrations](#input-and-integrations)
  - [Patching and Modding](#patching-and-modding)
- [Gameplay, Replays, and Scoring](#gameplay-replays-and-scoring)
  - [Practice and Replay Tools](#practice-and-replay-tools)
  - [Scoreboards and Replay Archives](#scoreboards-and-replay-archives)
- [Reverse Engineering and Preservation](#reverse-engineering-and-preservation)
- [Game Development](#game-development)
- [Fighting Games](#fighting-games)
- [Music and Data](#music-and-data)
- [Open-source Fangames](#open-source-fangames)
- [Touhou in Other Games](#touhou-in-other-games)
- [Knowledge and Community](#knowledge-and-community)

## Official Resources and Getting Started

### Official Resources

_Official guidance and trusted sources for official and authorized news._

- [Touhou Project Fan Creator Guidelines](https://touhou-project.news/guideline/) - The official multilingual guidelines for fan works, distribution, monetization, crowdfunding, and other derivative activities.
- [Touhou Yomoyama News](https://touhou-project.news/) - A committee-run hub for official and authorized Touhou Project news, with ZUN serving as honorary chair.

### Getting Started

_Essential starting points for discovering, obtaining, and playing Touhou games._

- [Getting Started](https://en.touhouwiki.net/wiki/Getting_Started) - A newcomer-oriented introduction to the official games and the wider series.
- [Purchasing Guide](https://en.touhouwiki.net/wiki/Purchasing_Guide) - Where and how to legally purchase official Touhou games and music.
- [Touhou Patch Center](https://www.thpatch.net/wiki/Touhou_Patch_Center:Download) - Multilingual community patches and installation instructions for official games.

## Game Tools

### Launchers and Compatibility

_Tools for organizing, launching, and running Touhou games across platforms._

- [9Launcher](https://github.com/wearrrrr/9Launcher) - A Windows and Linux launcher with support for official Touhou games, thcrap, DOSBox-X, Proton, and Wine.
- [thcrap Steam Proton Wrapper](https://github.com/nerusuki/thcrap-steam-proton-wrapper) - Launches official Steam releases with thcrap patches through Proton on GNU/Linux.
- [Touhou Steam Executable Patches](https://github.com/MisterMonstr/2hu_steam-exe_to_disc-exe) - Converts supported Steam executables to their original disc form for compatibility with tools such as vpatch.
- [Universal THCRAP Launcher](https://github.com/thpatch/Universal-THCRAP-Launcher) - A universal game launcher for thcrap configurations.

### Input and Integrations

_Tools for configuring controls and connecting games to other applications._

- [thkmc](https://github.com/wz520/thkmc) - Adds custom key mappings to supported Touhou STGs by patching their executables.
- [TouhouKeymap](https://github.com/devinacker/TouhouKeymap) - A thcrap plugin that adds per-game configurable keyboard controls to supported official Touhou games.
- [TouhouRPC](https://github.com/TheBakaRem/TouhouRPC) - Adds Discord Rich Presence support to Touhou games.

### Patching and Modding

_Core tools for patching game data, translating games, and building mods._

- [thcrap](https://github.com/thpatch/thcrap) - The community patching, translation, and modding framework for Touhou games.
- [thtk](https://github.com/thpatch/thtk) - A command-line toolkit for extracting, creating, compiling, and decompiling Touhou game data.
- [Touhou 6 APWorld](https://github.com/Nepley/eosd-apworld) - Adds Embodiment of Scarlet Devil to the Archipelago multi-game randomizer, with configurable stage, resource, difficulty, and Extra Stage progression.
- [truth](https://github.com/ExpHP/truth) - A multipass compiler and decompiler suite for binary script formats used by Touhou shooting games.

## Gameplay, Replays, and Scoring

### Practice and Replay Tools

_Tools for practice, replay inspection, and analysis of saved game data._

- [thhyl](https://github.com/wz520/thhyl) - A desktop viewer for metadata stored in Touhou STG replay (`.rpy`) files.
- [thprac](https://github.com/touhouworldcup/thprac) - A comprehensive practice tool for official Touhou shooting games.
- [threp](https://github.com/wasupandceacar/threp) - Parses Touhou replay metadata and recorded input sequences.
- [ThScoreFileConverter](https://github.com/y-iihoshi/ThScoreFileConverter) - Generates text or HTML summaries from score files and PNG images from best-shot data for many official Touhou games.

### Scoreboards and Replay Archives

_Active scoreboards and preserved collections of historical Touhou replays._

- [Gensokyo Replay Archive](https://maribelhearn.com/gensokyo) - Preserves replays from the defunct replays.gensokyo.org with searchable metadata.
- [Royalflare Archive](https://maribelhearn.com/royalflare) - Preserves Royalflare's historical replay and ranking data with full search.
- [Silent Selene](https://www.silentselene.net/) - An active replay host and scoreboard covering the PC-98 and Windows shooting games.

## Reverse Engineering and Preservation

_Source reconstruction and technical research that preserve how the games work._

- [ReC98](https://github.com/nmlgc/ReC98) - Reconstructs readable, binary-equivalent source code for the five PC-98 Touhou games.
- [Touhou 6 Decompilation](https://github.com/GensokyoClub/th06) - A decompilation of Embodiment of Scarlet Devil version 1.02h.
- [Touhou 7 Decompilation](https://github.com/some100/th07) - A fully implemented, nearly byte-accurate decompilation of Perfect Cherry Blossom version 1.00b, with cross-platform porting branches.
- [Touhou 8 Agent-First Source Reconstruction](https://github.com/N0zoM1z0/th08) - An agent-first continuation of the GensokyoClub decompilation, with reproducible binary matching and documented reverse-engineering workflows.
- [Touhou 8 Decompilation](https://github.com/GensokyoClub/th08) - A decompilation of Imperishable Night version 1.00d.

## Game Development

_Engines and authoring tools for building Touhou-style games and scripts._

- [LuaSTG Editor Sharp X](https://github.com/Sharp-X-Team/LuaSTG-Editor-Sharp-X) - A graphical code generator for authoring LuaSTG games across multiple engine variants.
- [LuaSTG Sub](https://github.com/Legacy-LuaSTG-Engine/LuaSTG-Sub) - A maintained modern LuaSTG engine that moves rendering and audio to newer Windows APIs.
- [Sparen's Danmakufu ph3 Tutorials](https://sparen.github.io/ph3tutorials/ph3tutorials.html) - A peer-reviewed, step-by-step curriculum for learning Danmakufu ph3 scripting, with references and documentation backups.
- [Touhou Danmakufu ph3sx-2](https://github.com/Natashi/Touhou-Danmakufu-ph3sx-2) - A performance-oriented Danmakufu ph3 fork with expanded scripting and archive features.

## Fighting Games

_Launchers, mods, and netplay improvements for Touhou fighting games._

- [giuroll](https://github.com/Hagb/giuroll-hagb) - A maintained successor to the original Giuroll rollback netcode mod, with replay improvements for Touhou Hisoutensoku.
- [Soku Launcher](https://github.com/0Miles/soku-launcher) - A dedicated launcher for Touhou Hisoutensoku.
- [SokuMods](https://github.com/SokuDev/SokuMods) - A collected, reproducible source tree for SWRSToys, SokuEngine, and their Hisoutensoku modules.

## Music and Data

_Tools and datasets for identifying, tagging, extracting, and playing Touhou music._

- [foo_thbgm](https://github.com/nyfair/foo_thbgm) - A foobar2000 component that directly plays BGM from Touhou games and related fangames.
- [Touhou Music Database](https://github.com/solaasan/Touhou-Music-Database) - A database for reverse-searching Touhou music arrangements.
- [Touhou Music Extractor](https://github.com/lyons/touhou_music_extractor) - A command-line tool for extracting music files from Touhou games.
- [Touhou Song Sorter](https://github.com/relick/touhou-song-sorter) - An interactive sorter for ranking favorite Touhou songs.
- [Touhou Tagger](https://github.com/the1812/Touhou-Tagger) - Fills Touhou Project CD track metadata using information from THBWiki.
- [TouhouThemeDB](https://github.com/thpatch/TouhouThemeDB) - A MediaWiki extension that provides structured data for canonical Touhou music themes.

## Open-source Fangames

_Playable fan games whose source code is publicly available._

- [Taisei](https://github.com/taisei-project/taisei) - A polished, free, and open-source Touhou-style bullet hell game for desktop platforms and the web.

## Touhou in Other Games

_Substantial Touhou-themed mods and curated resources for Touhou content in other games._

- [Touhou Little Maid](https://github.com/TartaricAcid/TouhouLittleMaid) - A Forge and NeoForge Minecraft mod that adds customizable Touhou-inspired maids, combat, farming, and other systems.
- [Touhou osu! Index](https://github.com/N0zoM1z0/touhou-osu-index) - An open, reproducible, automatically maintained catalog of Touhou music mapped in osu!, with provenance, confidence-based review, and JSON and CSV exports.

## Knowledge and Community

_Curated references, community tools, and multilingual knowledge bases._

- [Fumo Guides](https://fumo.website/) - Community-maintained guides and structured information about Touhou Fumo plushes.
- [Maribel Hearn's Touhou Portal](https://maribelhearn.com/) - A privacy-friendly collection of game tools, replay and scoring resources, and community references.
- [THBWiki](https://thwiki.cc/) - A Chinese-language Touhou encyclopedia and community database with extensive music, event, and publication coverage.
- [Touhou Wiki](https://en.touhouwiki.net/) - A multilingual community encyclopedia covering official works, characters, gameplay, music, and fan culture.

## Contributing

Contributions are welcome. Please read the [contribution guidelines](CONTRIBUTING.md) before opening a pull request.

## Footnotes

Awesome Touhou is an unofficial community project and is not affiliated with ZUN or Team Shanghai Alice. Inactive and superseded resources with lasting research or preservation value are kept in [Historical and Reference Projects](historical.md).
